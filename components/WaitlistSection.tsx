"use client";

import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";

export function WaitlistSection() {
  const { copy } = useI18n();

  return (
    <section id="waitlist" className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Eyebrow>{copy.waitlist.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.waitlist.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.waitlist.body}
        </p>
        <div className="mt-10 rounded-[1.75rem] border border-sand bg-cream/60 p-5 text-left shadow-sm sm:p-8">
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>
      </div>
    </section>
  );
}
