"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE } from "@/lib/site";

export function Hero() {
  const { copy } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-ivory">
      <div id="jewelry" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div>
          <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-stone">
            {copy.hero.line}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {copy.hero.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-sand bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm"
              >
                {pill}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/#waitlist" className="maison-btn">
              {copy.hero.waitlistTitle}
            </Link>
            <Link href="/#life" className="maison-link">
              {copy.hero.discoverCta}
            </Link>
          </div>
          <p className="mt-6 max-w-md text-base text-stone/90">{copy.hero.caption}</p>
        </div>

        <figure className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-cream shadow-[0_24px_60px_-28px_rgba(36,31,26,0.35)] sm:min-h-[28rem] lg:min-h-[36rem]">
          <Image
            src={PRODUCT_IMAGE}
            alt={copy.hero.imageAlt}
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}
