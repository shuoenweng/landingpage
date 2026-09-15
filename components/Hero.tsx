"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE } from "@/lib/site";

export function Hero() {
  const { copy } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div>
          <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-xl font-serif text-5xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-stone">
            {copy.hero.body}
          </p>
          <p className="mt-5">
            <Link
              href="/features"
              className="text-lg font-semibold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss"
            >
              {copy.hero.featuresLink}
            </Link>
          </p>
          <div className="mt-9 max-w-xl rounded-[1.75rem] border border-sand bg-white/80 p-5 shadow-sm sm:p-7">
            <p className="mb-5 font-serif text-2xl font-semibold text-ink">
              {copy.hero.waitlistTitle}
            </p>
            <WaitlistForm idPrefix="hero-waitlist" />
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_-40px_rgba(36,31,26,0.45)] ring-1 ring-sand">
            <Image
              src={PRODUCT_IMAGE}
              alt={copy.hero.imageAlt}
              width={1086}
              height={1448}
              priority
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <figcaption className="mt-4 text-center text-base text-stone">
            {copy.hero.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
