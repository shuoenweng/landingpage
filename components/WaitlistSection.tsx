"use client";

import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";

export function WaitlistSection() {
  const { copy } = useI18n();

  return (
    <section id="waitlist" className="bg-ivory">
      <div className="mx-auto max-w-2xl px-6 py-28 sm:px-10 sm:py-36">
        <Eyebrow>{copy.waitlist.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          {copy.waitlist.title}
        </h2>
        <p className="mt-5 text-xl leading-relaxed text-stone">{copy.waitlist.body}</p>
        <div className="mt-12">
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>
      </div>
    </section>
  );
}
