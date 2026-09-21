"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE } from "@/lib/site";

export function Hero() {
  const { copy, locale } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-noir text-ivory lg:min-h-[calc(100svh-5.75rem)]">
      <div id="jewelry" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[calc(100svh-5.75rem)]">
        <Image
          src={PRODUCT_IMAGE}
          alt={copy.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-5 py-10 sm:min-h-[40rem] sm:px-8 sm:py-14 lg:min-h-[calc(100svh-5.75rem)] lg:justify-center lg:py-20">
          <div className="max-w-2xl">
            <p
              className={`inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-ivory ${
                locale === "zh" ? "tracking-[0.14em]" : "uppercase tracking-[0.16em]"
              }`}
            >
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-[2.85rem] font-semibold leading-[0.98] tracking-tight text-ivory sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/85 sm:text-xl">
              {copy.hero.line}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/#waitlist" className="maison-btn maison-btn-light w-full sm:w-auto">
                {copy.hero.waitlistTitle}
              </Link>
              <Link
                href="/#life"
                className="maison-link maison-link-on-dark hidden sm:inline-flex"
              >
                {copy.hero.discoverCta}
              </Link>
            </div>
          </div>

          <ul className="mt-10 flex max-w-3xl flex-wrap gap-2.5">
            {copy.hero.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/15 bg-noir/45 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
