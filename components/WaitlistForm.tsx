"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n/provider";
import {
  GENDER_VALUES,
  submitWaitlist,
  validateWaitlist,
  type Gender,
  type WaitlistFieldErrors,
  type WaitlistPayload,
} from "@/lib/waitlist";

type WaitlistFormProps = {
  idPrefix?: string;
};

const fieldOrder = ["firstName", "email", "age"] as const;

export function WaitlistForm({ idPrefix = "waitlist" }: WaitlistFormProps) {
  const { copy, interpolate, locale } = useI18n();
  const liveId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [betaInterest, setBetaInterest] = useState(false);
  const [errors, setErrors] = useState<WaitlistFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);

  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const ageId = `${idPrefix}-age`;
  const genderId = `${idPrefix}-gender`;
  const betaId = `${idPrefix}-beta`;
  const nameErrorId = `${idPrefix}-name-error`;
  const emailErrorId = `${idPrefix}-email-error`;
  const ageErrorId = `${idPrefix}-age-error`;
  const formErrorId = `${idPrefix}-form-error`;

  const genderOptions: { value: Gender; label: string }[] = [
    { value: "prefer-not-to-say", label: copy.waitlist.genderPreferNot },
    { value: "female", label: copy.waitlist.genderFemale },
    { value: "male", label: copy.waitlist.genderMale },
    { value: "other", label: copy.waitlist.genderOther },
  ];

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  function clearFieldError(field: keyof WaitlistFieldErrors) {
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: WaitlistPayload = {
      email,
      firstName,
      age,
      gender,
      betaInterest,
    };
    const nextErrors = validateWaitlist(payload);
    setErrors(nextErrors);
    setFormError(null);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
      const focusId =
        firstInvalid === "firstName"
          ? nameId
          : firstInvalid === "age"
            ? ageId
            : emailId;
      document.getElementById(focusId)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await submitWaitlist(payload);
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(copy.waitlist.submitFailed);
    }
  }

  if (status === "success") {
    const name = firstName.trim()
      ? locale === "zh"
        ? `，${firstName.trim()}`
        : `, ${firstName.trim()}`
      : "";

    return (
      <div
        ref={successRef}
        className="rounded-3xl border border-leaf bg-leaf/50 px-6 py-8 text-left shadow-sm"
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <p className="font-serif text-3xl font-semibold text-ink">
          {copy.waitlist.successTitle}
        </p>
        <p className="mt-3 max-w-md text-lg text-stone">
          {interpolate(copy.waitlist.successBody, { name })}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="text-left"
      aria-describedby={formError ? formErrorId : undefined}
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={nameId} className="text-base font-semibold text-ink">
              {copy.waitlist.firstName}
            </label>
            <input
              id={nameId}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
                clearFieldError("firstName");
              }}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? nameErrorId : undefined}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm placeholder:text-silver aria-invalid:border-red-700 aria-invalid:ring-2 aria-invalid:ring-red-700/20"
              placeholder={copy.waitlist.firstNamePlaceholder}
            />
            {errors.firstName ? (
              <p id={nameErrorId} className="text-base font-medium text-red-800" role="alert">
                {copy.waitlist[errors.firstName]}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor={emailId} className="text-base font-semibold text-ink">
              {copy.waitlist.email}
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearFieldError("email");
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? emailErrorId : undefined}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm placeholder:text-silver aria-invalid:border-red-700 aria-invalid:ring-2 aria-invalid:ring-red-700/20"
              placeholder={copy.waitlist.emailPlaceholder}
            />
            {errors.email ? (
              <p id={emailErrorId} className="text-base font-medium text-red-800" role="alert">
                {copy.waitlist[errors.email]}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={ageId} className="text-base font-semibold text-ink">
              {copy.waitlist.age}{" "}
              <span className="font-normal text-stone">{copy.waitlist.optional}</span>
            </label>
            <input
              id={ageId}
              name="age"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
                clearFieldError("age");
              }}
              aria-invalid={Boolean(errors.age)}
              aria-describedby={errors.age ? ageErrorId : undefined}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm placeholder:text-silver aria-invalid:border-red-700 aria-invalid:ring-2 aria-invalid:ring-red-700/20"
              placeholder={copy.waitlist.agePlaceholder}
            />
            {errors.age ? (
              <p id={ageErrorId} className="text-base font-medium text-red-800" role="alert">
                {copy.waitlist[errors.age]}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor={genderId} className="text-base font-semibold text-ink">
              {copy.waitlist.gender}{" "}
              <span className="font-normal text-stone">{copy.waitlist.optional}</span>
            </label>
            <select
              id={genderId}
              name="gender"
              value={gender}
              onChange={(event) => {
                const next = event.target.value;
                setGender(
                  next && GENDER_VALUES.includes(next as Gender) ? (next as Gender) : "",
                );
              }}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm"
            >
              <option value="">{copy.waitlist.genderPlaceholder}</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label
          htmlFor={betaId}
          className="flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl border border-pearl bg-white px-4 py-3 text-lg text-ink shadow-sm"
        >
          <input
            id={betaId}
            name="betaInterest"
            type="checkbox"
            checked={betaInterest}
            onChange={(event) => setBetaInterest(event.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-moss"
          />
          <span>{copy.waitlist.betaInterest}</span>
        </label>

        {formError ? (
          <p id={formErrorId} className="text-base font-medium text-red-800" role="alert">
            {formError}
          </p>
        ) : (
          <p id={liveId} className="sr-only" aria-live="polite">
            {status === "submitting" ? copy.waitlist.sending : ""}
          </p>
        )}

        <div className="flex flex-col items-start gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-full bg-moss px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-moss-deep disabled:cursor-wait disabled:opacity-80"
          >
            {status === "submitting" ? copy.waitlist.submitting : copy.waitlist.submit}
          </button>
          <p className="text-base text-stone">{copy.waitlist.privacyNote}</p>
        </div>
      </div>
    </form>
  );
}
