import { WAITLIST_STORAGE_KEY } from "@/lib/site";

export const GENDER_VALUES = [
  "prefer-not-to-say",
  "female",
  "male",
  "other",
] as const;

export type Gender = (typeof GENDER_VALUES)[number];

export type WaitlistPayload = {
  email: string;
  firstName: string;
  age: string;
  gender: Gender | "";
  betaInterest: boolean;
};

export type FirstNameErrorKey = "firstNameRequired" | "firstNameTooLong";
export type EmailErrorKey = "emailRequired" | "emailTooLong" | "emailInvalid";
export type AgeErrorKey = "ageInvalid";

export type WaitlistFieldErrors = Partial<{
  firstName: FirstNameErrorKey;
  email: EmailErrorKey;
  age: AgeErrorKey;
}>;

const FIRST_NAME_MAX_LENGTH = 80;
const AGE_MIN = 1;
const AGE_MAX = 120;

export function validateFirstName(firstName: string): FirstNameErrorKey | null {
  const trimmed = firstName.trim();

  if (!trimmed) {
    return "firstNameRequired";
  }

  if (trimmed.length > FIRST_NAME_MAX_LENGTH) {
    return "firstNameTooLong";
  }

  return null;
}

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

export function validateAge(age: string): AgeErrorKey | null {
  const trimmed = age.trim();

  if (!trimmed) {
    return null;
  }

  if (!/^\d+$/.test(trimmed)) {
    return "ageInvalid";
  }

  const value = Number.parseInt(trimmed, 10);

  if (value < AGE_MIN || value > AGE_MAX) {
    return "ageInvalid";
  }

  return null;
}

export function validateWaitlist(payload: WaitlistPayload): WaitlistFieldErrors {
  const errors: WaitlistFieldErrors = {};
  const firstNameError = validateFirstName(payload.firstName);
  const emailError = validateEmail(payload.email);
  const ageError = validateAge(payload.age);

  if (firstNameError) {
    errors.firstName = firstNameError;
  }

  if (emailError) {
    errors.email = emailError;
  }

  if (ageError) {
    errors.age = ageError;
  }

  return errors;
}

function waitlistBody(payload: WaitlistPayload) {
  const firstName = payload.firstName.trim();
  const gender =
    payload.gender !== "" && GENDER_VALUES.includes(payload.gender)
      ? payload.gender
      : "";

  return {
    email: payload.email.trim(),
    firstName,
    name: firstName,
    age: payload.age.trim(),
    gender,
    betaInterest: payload.betaInterest ? "yes" : "no",
    source: "qilyra-landing",
  };
}

/**
 * Submit a waitlist signup.
 *
 * If `NEXT_PUBLIC_WAITLIST_ENDPOINT` is set, this POSTs JSON to that URL
 * (Formspree, Getform, Basin, a Next.js Route Handler, etc.).
 * Otherwise it saves a local demo record and still shows the success state.
 *
 * Do not put API keys in the client. A public form endpoint is enough for v1.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim();
  const body = waitlistBody(payload);

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
