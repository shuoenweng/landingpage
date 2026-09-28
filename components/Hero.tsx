"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { FilmFrame } from "./FilmFrame";
import { useI18n } from "@/lib/i18n/provider";

export function Hero() {
  const { copy } = useI18n();

  return (
    <section className="relative min-h-svh bg-[#f3e6d6] text-ink">
      <div className="absolute inset-0" aria-hidden={false}>
        <FilmFrame
          clip="landscape"
          showOn="wide"
          label={copy.hero.videoAlt}
          fit="cover"
          objectPosition="center center"
          className="absolute inset-0"
          priority
          sizes="100vw"
          hiRes
        />
        <FilmFrame
          clip="portrait"
          showOn="narrow"
          label={copy.hero.videoAlt}
          fit="cover"
          objectPosition="center center"
          className="absolute inset-0"
          priority
          sizes="100vw"
        />
        <div className="hero-scrim pointer-events-none absolute inset-0" />
      </div>

      <div className="hero-layout relative z-10 flex min-h-svh flex-col px-6 pb-10 pt-24 sm:px-10 sm:pt-28">
        <div className="max-w-lg">
          <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
          <h1 className="hero-title mt-4 font-serif font-medium tracking-tight text-ink">
            {copy.hero.title}
          </h1>
          <p className="hero-lead mt-4 max-w-md text-lg leading-snug text-ink">
            {copy.hero.line}
          </p>
          <div className="hero-aside">
            <p className="mt-6 max-w-md text-xl leading-relaxed text-ink sm:text-2xl">
              {copy.hero.line}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/#waitlist" className="maison-btn">
                {copy.hero.waitlistCta}
              </Link>
              <Link href="/features" className="maison-link">
                {copy.hero.featuresCta}
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom mt-auto max-w-md">
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link href="/#waitlist" className="maison-btn">
              {copy.hero.waitlistCta}
            </Link>
            <Link href="/features" className="maison-link">
              {copy.hero.featuresCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
