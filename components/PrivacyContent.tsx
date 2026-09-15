"use client";

import { Logo } from "@/components/Logo";
import { useI18n } from "@/lib/i18n/provider";
import { CONTACT_EMAIL } from "@/lib/site";

export function PrivacyContent() {
  const { copy } = useI18n();

  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Logo />
      <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {copy.privacy.title}
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone">
        <p>{copy.privacy.p1}</p>
        <p>{copy.privacy.p2}</p>
        <p>
          {copy.privacy.p3Before}{" "}
          <code className="rounded bg-cream px-1.5 py-0.5 text-ink">
            NEXT_PUBLIC_WAITLIST_ENDPOINT
          </code>
          {copy.privacy.p3After}
        </p>
        <p>{copy.privacy.p4}</p>
        <p>
          {copy.privacy.p5Before}{" "}
          <a className="font-medium text-moss underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          {copy.privacy.p5After}
        </p>
      </div>
    </main>
  );
}
