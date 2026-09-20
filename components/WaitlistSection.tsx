"use client";

import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";

export function WaitlistSection() {
  const { copy } = useI18n();

  return (
    <section id="waitlist" className="bg-noir text-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow tone="pearl">{copy.waitlist.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            {copy.waitlist.title}
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-pearl">
            {copy.waitlist.body}
          </p>
        </div>
        <div className="bg-ivory p-6 text-ink sm:p-10">
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>
      </div>
    </section>
  );
}
