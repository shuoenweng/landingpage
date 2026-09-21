"use client";

import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Positioning() {
  const { copy } = useI18n();
  const lastIndex = copy.positioning.cards.length - 1;

  return (
    <section id="positioning" className="bg-cream/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.positioning.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
          {copy.positioning.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.positioning.intro}
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.positioning.cards.map((card, index) => {
            const featured = index === lastIndex;

            return (
              <li
                key={card.title}
                className={`rounded-[1.75rem] border p-7 sm:p-8 ${
                  featured
                    ? "border-moss/25 bg-moss text-ivory shadow-sm"
                    : "border-sand bg-ivory text-ink"
                }`}
              >
                <h3
                  className={`font-serif text-2xl font-semibold sm:text-[1.75rem] ${
                    featured ? "text-ivory" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-3 text-lg leading-relaxed ${
                    featured ? "text-pearl" : "text-stone"
                  }`}
                >
                  {card.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
