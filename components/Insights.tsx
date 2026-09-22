"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { IconFall, IconFamily, IconHeart, IconPin } from "./Icons";
import { useI18n } from "@/lib/i18n/provider";
import { LIFESTYLE_MOMENTS } from "@/lib/site";

const COMMUTE_MOMENT = LIFESTYLE_MOMENTS.find((moment) => moment.id === "commute")!;
const itemIcons = [IconFall, IconFamily, IconPin, IconHeart];

export function Insights() {
  const { copy } = useI18n();
  const overlays = copy.insights.items.slice(0, 2);

  return (
    <section id="peace" className="bg-noir text-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div className="lifestyle-frame rounded-[1.8rem] bg-ink">
          <Image
            src={COMMUTE_MOMENT.src}
            alt={copy.insights.imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition: COMMUTE_MOMENT.objectPosition }}
            sizes="(min-width: 1024px) 29rem, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent"
            aria-hidden="true"
          />
          <ul className="absolute inset-x-4 bottom-4 flex flex-col gap-2 sm:inset-x-6 sm:bottom-6">
            {overlays.map((item) => (
              <li
                key={item.title}
                className="w-fit max-w-[90%] rounded-2xl border border-white/10 bg-noir/70 px-4 py-3 backdrop-blur-md"
              >
                <p className="font-serif text-lg font-semibold text-ivory">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow tone="pearl">{copy.insights.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {copy.insights.title}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-pearl">{copy.insights.intro}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {copy.insights.items.map((item, index) => {
              const Icon = itemIcons[index] ?? IconHeart;

              return (
                <li
                  key={item.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="h-5 w-5 text-leaf" />
                  <h3 className="mt-3 font-serif text-xl font-semibold text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-pearl">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
