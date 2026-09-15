"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function HowItHelps() {
  const { copy } = useI18n();

  return (
    <section id="how-it-helps" className="border-t border-sand bg-cream/70">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>{copy.howItHelps.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.howItHelps.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.howItHelps.intro}
        </p>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {copy.howItHelps.items.map((benefit, index) => (
            <li
              key={`${index}-${benefit.title}`}
              className="rounded-[1.75rem] border border-sand bg-ivory p-7 shadow-sm sm:p-9"
            >
              <p className="font-serif text-4xl font-semibold text-moss/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-[1.7rem]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{benefit.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="/features"
            className="inline-flex min-h-12 items-center rounded-full border border-moss px-6 text-lg font-semibold text-moss transition-colors hover:bg-leaf"
          >
            {copy.howItHelps.featuresCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
