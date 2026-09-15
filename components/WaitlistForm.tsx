"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  AUDIENCE_OPTIONS,
  submitWaitlist,
  validateWaitlist,
  type Audience,
  type WaitlistPayload,
} from "@/lib/waitlist";

type WaitlistFormProps = {
  idPrefix?: string;
};

export function WaitlistForm({ idPrefix = "waitlist" }: WaitlistFormProps) {
  const liveId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [audience, setAudience] = useState<Audience>("myself");
  const [errors, setErrors] = useState<Partial<Record<"email" | "audience", string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);

  const emailId = `${idPrefix}-email`;
  const nameId = `${idPrefix}-name`;
  const emailErrorId = `${idPrefix}-email-error`;
  const formErrorId = `${idPrefix}-form-error`;

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: WaitlistPayload = { email, firstName, audience };
    const nextErrors = validateWaitlist(payload);
    setErrors(nextErrors);
    setFormError(null);

    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(emailId)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await submitWaitlist(payload);
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(
        "We could not join the waitlist just now. Please try again in a moment.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="rounded-3xl border border-leaf bg-leaf/50 px-6 py-8 text-left shadow-sm"
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <p className="font-serif text-3xl font-semibold text-ink">You are on the list.</p>
        <p className="mt-3 max-w-md text-lg text-stone">
          Thank you{firstName.trim() ? `, ${firstName.trim()}` : ""}. We will write when
          the first collection is ready — calmly, and only about Liora.
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
              First name{" "}
              <span className="font-normal text-stone">(optional)</span>
            </label>
            <input
              id={nameId}
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm placeholder:text-silver"
              placeholder="Alex"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor={emailId} className="text-base font-semibold text-ink">
              Email address
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
                if (errors.email) {
                  setErrors((current) => ({ ...current, email: undefined }));
                }
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? emailErrorId : undefined}
              className="min-h-14 rounded-2xl border border-pearl bg-white px-4 text-lg text-ink shadow-sm placeholder:text-silver aria-invalid:border-red-700 aria-invalid:ring-2 aria-invalid:ring-red-700/20"
              placeholder="you@example.com"
            />
            {errors.email ? (
              <p id={emailErrorId} className="text-base font-medium text-red-800" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <fieldset className="grid gap-3">
          <legend className="text-base font-semibold text-ink">
            Who is this for?
          </legend>
          <div className="grid gap-3">
            {AUDIENCE_OPTIONS.map((option) => {
              const optionId = `${idPrefix}-${option.value}`;
              const selected = audience === option.value;

              return (
                <label
                  key={option.value}
                  htmlFor={optionId}
                  className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-lg font-medium transition-colors ${
                    selected
                      ? "border-moss bg-leaf/70 text-ink"
                      : "border-pearl bg-white text-stone hover:border-silver"
                  }`}
                >
                  <input
                    id={optionId}
                    type="radio"
                    name={`${idPrefix}-audience`}
                    value={option.value}
                    checked={selected}
                    onChange={() => setAudience(option.value)}
                    className="h-5 w-5 accent-moss"
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
        </fieldset>

        {formError ? (
          <p id={formErrorId} className="text-base font-medium text-red-800" role="alert">
            {formError}
          </p>
        ) : (
          <p id={liveId} className="sr-only" aria-live="polite">
            {status === "submitting" ? "Sending your request." : ""}
          </p>
        )}

        <div className="flex flex-col items-start gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-14 items-center justify-center whitespace-nowrap rounded-full bg-moss px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-moss-deep disabled:cursor-wait disabled:opacity-80"
          >
            {status === "submitting" ? "Joining…" : "Reserve a place"}
          </button>
          <p className="text-base text-stone">
            We only use your email for launch notes. No ads, no clutter.
          </p>
        </div>
      </div>
    </form>
  );
}
