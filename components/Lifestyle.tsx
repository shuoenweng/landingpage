"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { LIFESTYLE_MOMENTS } from "@/lib/site";

export function Lifestyle() {
  const { copy } = useI18n();

  return (
    <section id="life" className="bg-cream/60">
      <div id="designs" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>{copy.life.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {copy.life.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.life.body}
        </p>
      </div>

      <div aria-label={copy.life.campaignLabel} className="flex flex-col">
        {LIFESTYLE_MOMENTS.map((moment, index) => {
          const item = copy.life.items[moment.id];
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={moment.id}
              className="grid lg:grid-cols-2 lg:min-h-[min(42rem,78vh)]"
            >
              <div
                className={`relative min-h-[22rem] overflow-hidden bg-cream sm:min-h-[28rem] ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={moment.src}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: moment.objectPosition }}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div
                className={`flex items-center bg-ivory px-5 py-10 sm:px-10 sm:py-14 lg:px-16 ${
                  imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="mx-auto w-full max-w-md">
                  <p className="text-sm font-semibold tracking-[0.18em] text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-[2.15rem] font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-stone sm:text-xl">
                    {item.line}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
