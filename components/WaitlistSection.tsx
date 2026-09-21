"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";
import { LIFESTYLE_MOMENTS } from "@/lib/site";

const WINDOW_MOMENT = LIFESTYLE_MOMENTS.find((moment) => moment.id === "window")!;

export function WaitlistSection() {
  const { copy } = useI18n();

  return (
    <section id="waitlist" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-noir text-ivory shadow-[0_24px_80px_-32px_rgba(20,16,12,0.55)] lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
            <Eyebrow tone="pearl">{copy.waitlist.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
              {copy.waitlist.title}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-pearl sm:text-xl">
              {copy.waitlist.body}
            </p>
            <div className="mt-8 rounded-[1.5rem] bg-ivory p-5 text-ink sm:p-7">
              <WaitlistForm idPrefix="footer-waitlist" />
            </div>
          </div>
          <div className="relative hidden min-h-[28rem] lg:block">
            <Image
              src={WINDOW_MOMENT.src}
              alt={copy.life.items.window.imageAlt}
              fill
              className="object-cover"
              style={{ objectPosition: WINDOW_MOMENT.objectPosition }}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
