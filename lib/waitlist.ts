export const AUDIENCE_OPTIONS = [
  { value: "myself", label: "For myself" },
  { value: "loved-one", label: "For a parent or loved one" },
  { value: "both", label: "For both of us" },
] as const;

export type Audience = (typeof AUDIENCE_OPTIONS)[number]["value"];

export type WaitlistPayload = {
  email: string;
  firstName: string;
  audience: Audience;
};

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();

  if (!trimmed) {
    return "Please enter your email address.";
  }

  if (trimmed.length > 254) {
    return "That email looks a little too long. Please check it and try again.";
  }

  // Intentionally simple: readable errors matter more than RFC-perfect matching.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Please enter a valid email, such as name@example.com.";
  }

  return null;
}

export function validateWaitlist(
  payload: WaitlistPayload,
): Partial<Record<"email" | "audience", string>> {
  const errors: Partial<Record<"email" | "audience", string>> = {};
  const emailError = validateEmail(payload.email);

  if (emailError) {
    errors.email = emailError;
  }

  const allowed = AUDIENCE_OPTIONS.map((option) => option.value);
  if (!allowed.includes(payload.audience)) {
    errors.audience = "Please tell us who the bracelet is for.";
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
    source: "liora-landing",
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
      throw new Error("We could not join the waitlist just now. Please try again.");
    }

    return;
  }

  // Demo fallback so the UI can be reviewed without a backend.
  await new Promise((resolve) => setTimeout(resolve, 650));

  if (typeof window !== "undefined") {
    const key = "liora-waitlist";
    const existing = safeParseList(window.localStorage.getItem(key));
    existing.push({ ...body, savedAt: new Date().toISOString() });
    window.localStorage.setItem(key, JSON.stringify(existing));
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
