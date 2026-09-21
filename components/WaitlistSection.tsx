"use client";

import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";

export function WaitlistSection() {
  const { copy } = useI18n();

  return (
    <section id="waitlist" className="bg-leaf/45">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{copy.waitlist.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {copy.waitlist.title}
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-stone">
            {copy.waitlist.body}
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-sand bg-ivory p-6 shadow-sm sm:p-10">
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>
      </div>
    </section>
  );
}
