"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE, PRODUCT_IMAGE_HEIGHT, PRODUCT_IMAGE_WIDTH } from "@/lib/site";

const HERO_ASPECT = `${PRODUCT_IMAGE_WIDTH}/${PRODUCT_IMAGE_HEIGHT}`;

export function Hero() {
  const { copy } = useI18n();

  return (
    <section className="relative isolate bg-[#f6ebe2] text-ink">
      <div id="jewelry" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="mx-auto flex min-h-[calc(100svh-5.75rem)] w-full flex-col items-center justify-center">
        {/* Wordmark, tagline, and “coming soon” are printed on the photograph. */}
        <h1 className="sr-only">{copy.hero.title}</h1>
        <p className="sr-only">
          {copy.hero.eyebrow}. {copy.hero.line}
        </p>

        <div
          className="relative w-full"
          style={{
            maxWidth: `min(100%, calc((100svh - 5.75rem - 9.25rem) * ${PRODUCT_IMAGE_WIDTH} / ${PRODUCT_IMAGE_HEIGHT}))`,
          }}
        >
          <div className="relative w-full" style={{ aspectRatio: HERO_ASPECT }}>
            <Image
              src={PRODUCT_IMAGE}
              alt={copy.hero.imageAlt}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1023px) 100vw, 72vh"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4 px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Link href="/#waitlist" className="maison-btn w-full sm:w-auto">
              {copy.hero.waitlistTitle}
            </Link>
            <Link href="/#life" className="maison-link hidden sm:inline-flex">
              {copy.hero.discoverCta}
            </Link>
          </div>
          <ul className="flex max-w-3xl flex-wrap justify-center gap-2">
            {copy.hero.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-sand bg-ivory/80 px-4 py-2 text-sm font-semibold text-ink"
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
