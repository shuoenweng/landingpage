import { WAITLIST_STORAGE_KEY } from "@/lib/site";

export const AUDIENCE_VALUES = ["myself", "loved-one", "both"] as const;

export type Audience = (typeof AUDIENCE_VALUES)[number];

export type WaitlistPayload = {
  email: string;
  firstName: string;
  audience: Audience;
};

export type EmailErrorKey = "emailRequired" | "emailTooLong" | "emailInvalid";
export type AudienceErrorKey = "audienceRequired";

export function validateEmail(email: string): EmailErrorKey | null {
  const trimmed = email.trim();

  if (!trimmed) {
    return "emailRequired";
  }

  if (trimmed.length > 254) {
    return "emailTooLong";
  }

  // Intentionally simple: readable errors matter more than RFC-perfect matching.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "emailInvalid";
  }

  return null;
}

export function validateWaitlist(
  payload: WaitlistPayload,
): Partial<Record<"email", EmailErrorKey> & Record<"audience", AudienceErrorKey>> {
  const errors: Partial<
    Record<"email", EmailErrorKey> & Record<"audience", AudienceErrorKey>
  > = {};
  const emailError = validateEmail(payload.email);

  if (emailError) {
    errors.email = emailError;
  }

  if (!AUDIENCE_VALUES.includes(payload.audience)) {
    errors.audience = "audienceRequired";
  }

  return errors;
}

/**
 * Submit a waitlist signup.
 *
 * TODO: Connect a form provider before launch.
 * If `NEXT_PUBLIC_WAITLIST_ENDPOINT` is set, this POSTs JSON to that URL
 * (Formspree, Getform, Basin, a Next.js Route Handler, etc.).
 * Otherwise it saves a local demo record and still shows the success state.
 *
 * Do not put API keys in the client. A public form endpoint is enough for v1.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim();
  const body = {
    email: payload.email.trim(),
    firstName: payload.firstName.trim(),
    audience: payload.audience,
    source: "qilyra-landing",
  };

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("WAITLIST_SUBMIT_FAILED");
    }

    return;
  }

  // Demo fallback so the UI can be reviewed without a backend.
  await new Promise((resolve) => setTimeout(resolve, 650));

  if (typeof window !== "undefined") {
    const existing = safeParseList(window.localStorage.getItem(WAITLIST_STORAGE_KEY));
    existing.push({ ...body, savedAt: new Date().toISOString() });
    window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(existing));
  }
}

function safeParseList(value: string | null): unknown[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
