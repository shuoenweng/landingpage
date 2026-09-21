"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { LIFESTYLE_MOMENTS } from "@/lib/site";

const GARDEN_MOMENT = LIFESTYLE_MOMENTS.find((moment) => moment.id === "garden")!;

export function Insights() {
  const { copy } = useI18n();

  return (
    <section id="peace" className="bg-noir text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[24rem] bg-ink sm:min-h-[32rem] lg:min-h-[min(42rem,78vh)]">
          <Image
            src={GARDEN_MOMENT.src}
            alt={copy.insights.imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition: GARDEN_MOMENT.objectPosition }}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto w-full max-w-xl">
            <Eyebrow tone="pearl">{copy.insights.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
              {copy.insights.title}
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-pearl">
              {copy.insights.intro}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.insights.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-ivory/12 bg-ivory/5 p-5"
                >
                  <h3 className="font-serif text-xl font-semibold text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-pearl">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
