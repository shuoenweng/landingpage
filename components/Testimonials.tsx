"use client";

import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Testimonials() {
  const { copy, locale } = useI18n();
  const openQuote = locale === "zh" ? "「" : "“";
  const closeQuote = locale === "zh" ? "」" : "”";

  return (
    <section id="voices" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.social.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.social.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.social.intro}
        </p>
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.social.items.map((item) => (
            <li
              key={item.attribution}
              className="flex h-full flex-col rounded-[1.6rem] border border-sand/80 bg-white p-7 shadow-sm sm:p-8"
            >
              <p className="font-serif text-2xl font-semibold leading-snug text-ink">
                {openQuote}
                {item.quote}
                {closeQuote}
              </p>
              <p className="mt-6 text-base font-medium text-stone">{item.attribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
