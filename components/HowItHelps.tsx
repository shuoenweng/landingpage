"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function HowItHelps() {
  const { copy } = useI18n();

  return (
    <section id="how-it-helps" className="bg-noir text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow tone="pearl">{copy.howItHelps.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ivory sm:text-5xl lg:text-6xl">
          {copy.howItHelps.title}
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-pearl">
          {copy.howItHelps.intro}
        </p>
        <ul className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {copy.howItHelps.items.map((benefit, index) => (
            <li
              key={`${index}-${benefit.title}`}
              className="border-t border-ivory/15 pt-7"
            >
              <p className="font-serif text-3xl font-semibold text-ivory/45">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ivory sm:text-[1.75rem]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-pearl">
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-14">
          <Link href="/features" className="maison-link maison-link-on-dark">
            {copy.howItHelps.featuresCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
