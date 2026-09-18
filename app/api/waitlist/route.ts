import { NextResponse } from "next/server";
import {
  buildWaitlistBody,
  parseWaitlistRequestBody,
  readCountryFromHeaders,
  validateWaitlist,
} from "@/lib/waitlist";

function waitlistEndpoint(): string | undefined {
  const server = process.env.WAITLIST_ENDPOINT?.trim();
  if (server) {
    return server;
  }

  const published = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim();
  if (published) {
    return published;
  }

  return undefined;
}

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const payload = parseWaitlistRequestBody(json);

  if (!payload) {
    return NextResponse.json({ ok: false, error: "INVALID_REQUEST" }, { status: 400 });
  }

  const fields = validateWaitlist(payload);

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { ok: false, error: "VALIDATION_FAILED", fields },
      { status: 400 },
    );
  }

  const geo = readCountryFromHeaders(request.headers);
  const body = buildWaitlistBody(payload, geo);
  const endpoint = waitlistEndpoint();

  if (!endpoint) {
    return NextResponse.json({
      ok: true,
      demo: true,
      country: geo.country,
    });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "UPSTREAM_FAILED" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "UPSTREAM_FAILED" }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    country: geo.country,
  });
}
