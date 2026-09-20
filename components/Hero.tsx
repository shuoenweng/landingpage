"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE } from "@/lib/site";

export function Hero() {
  const { copy } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-cream md:min-h-[calc(100svh-5.75rem)]">
      <div className="relative h-[70svh] min-h-[22rem] md:absolute md:inset-0 md:h-auto md:min-h-0">
        <Image
          src={PRODUCT_IMAGE}
          alt={copy.hero.imageAlt}
          fill
          priority
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ivory/92 via-ivory/55 to-ivory/5 md:block"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 bg-ivory px-5 py-10 sm:px-8 md:flex md:min-h-[calc(100svh-5.75rem)] md:items-end md:bg-transparent md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl">
            <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-stone">
              {copy.hero.line}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/#waitlist" className="maison-btn">
                {copy.hero.waitlistTitle}
              </Link>
              <Link href="/#jewelry" className="maison-link">
                {copy.hero.discoverCta}
              </Link>
            </div>
            <p className="mt-6 max-w-md text-base text-stone/90">{copy.hero.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
