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

export const UNKNOWN_COUNTRY = "unknown";
export const WAITLIST_SOURCE = "qilyra-landing";

export type GeoFields = {
  country: string;
  countryRegion?: string;
};

export type WaitlistSubmission = {
  email: string;
  firstName: string;
  name: string;
  age: string;
  gender: string;
  betaInterest: "yes" | "no";
  source: string;
  country: string;
  countryRegion?: string;
};

function parseBetaInterest(value: unknown): boolean {
  if (value === true) {
    return true;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "yes" || normalized === "true";
  }

  return false;
}

/**
 * Accept the existing waitlist fields from JSON (firstName or name, email,
 * age, gender, betaInterest as boolean or yes/no).
 */
export function parseWaitlistRequestBody(input: unknown): WaitlistPayload | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const record = input as Record<string, unknown>;
  const firstName =
    typeof record.firstName === "string"
      ? record.firstName
      : typeof record.name === "string"
        ? record.name
        : "";
  const email = typeof record.email === "string" ? record.email : "";
  const age =
    typeof record.age === "string"
      ? record.age
      : typeof record.age === "number" && Number.isFinite(record.age)
        ? String(Math.trunc(record.age))
        : "";
  const genderRaw = typeof record.gender === "string" ? record.gender : "";
  const gender: Gender | "" =
    genderRaw !== "" && GENDER_VALUES.includes(genderRaw as Gender)
      ? (genderRaw as Gender)
      : "";

  return {
    email,
    firstName,
    age,
    gender,
    betaInterest: parseBetaInterest(record.betaInterest),
  };
}

export function buildWaitlistBody(
  payload: WaitlistPayload,
  geo?: GeoFields,
): WaitlistSubmission {
  const firstName = payload.firstName.trim();
  const gender =
    payload.gender !== "" && GENDER_VALUES.includes(payload.gender)
      ? payload.gender
      : "";
  const country = geo?.country?.trim() || UNKNOWN_COUNTRY;
  const countryRegion = geo?.countryRegion?.trim();

  return {
    email: payload.email.trim(),
    firstName,
    name: firstName,
    age: payload.age.trim(),
    gender,
    betaInterest: payload.betaInterest ? "yes" : "no",
    source: WAITLIST_SOURCE,
    country,
    ...(countryRegion ? { countryRegion } : {}),
  };
}

/** ISO country from Vercel geo headers. Missing headers become `"unknown"`. */
export function readCountryFromHeaders(headers: Headers): GeoFields {
  const rawCountry = headers.get("x-vercel-ip-country")?.trim().toUpperCase() ?? "";
  const country = /^[A-Z]{2}$/.test(rawCountry) ? rawCountry : UNKNOWN_COUNTRY;
  const rawRegion =
    headers.get("x-vercel-ip-country-region")?.trim().toUpperCase() ?? "";

  if (/^[A-Z0-9-]{1,8}$/.test(rawRegion)) {
    return { country, countryRegion: rawRegion };
  }

  return { country };
}

type WaitlistApiResponse = {
  ok?: boolean;
  demo?: boolean;
  country?: string;
};

/**
 * Submit a waitlist signup through `/api/waitlist`.
 *
 * The route attaches `country` from Vercel geo headers and forwards to
 * Formspree when an endpoint is configured. Otherwise it returns demo
 * success and this function saves a localStorage record (including country).
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  const body = buildWaitlistBody(payload);

  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  let result: WaitlistApiResponse = {};

  try {
    result = (await response.json()) as WaitlistApiResponse;
  } catch {
    result = {};
  }

  if (!response.ok || result.ok === false) {
    throw new Error("WAITLIST_SUBMIT_FAILED");
  }

  const country =
    typeof result.country === "string" && result.country.trim()
      ? result.country.trim()
      : UNKNOWN_COUNTRY;

  if (result.demo && typeof window !== "undefined") {
    const existing = safeParseList(window.localStorage.getItem(WAITLIST_STORAGE_KEY));
    existing.push({ ...body, country, savedAt: new Date().toISOString() });
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
