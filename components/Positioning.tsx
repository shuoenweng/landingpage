"use client";

import { Eyebrow } from "./Eyebrow";
import { IconAlert, IconJewelry, IconWatch } from "./Icons";
import { useI18n } from "@/lib/i18n/provider";

const cardIcons = [IconWatch, IconAlert, IconJewelry];

export function Positioning() {
  const { copy } = useI18n();
  const lastIndex = copy.positioning.cards.length - 1;

  return (
    <section id="positioning" className="bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{copy.positioning.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
            {copy.positioning.title}
          </h2>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-stone">
            {copy.positioning.intro}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {copy.positioning.cards.map((card, index) => {
            const featured = index === lastIndex;
            const Icon = cardIcons[index] ?? IconJewelry;

            return (
              <li
                key={card.title}
                className={`rounded-[1.6rem] border p-6 shadow-sm sm:p-7 ${
                  featured
                    ? "border-transparent bg-noir text-ivory sm:col-span-2"
                    : "border-sand/80 bg-white text-ink"
                }`}
              >
                <Icon className={`h-6 w-6 ${featured ? "text-leaf" : "text-moss"}`} />
                <h3
                  className={`mt-4 font-serif text-2xl font-semibold ${
                    featured ? "text-ivory" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-base leading-relaxed sm:text-lg ${
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
