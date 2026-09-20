"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { LIFESTYLE_MOMENTS } from "@/lib/site";

export function Lifestyle() {
  const { copy } = useI18n();

  return (
    <section id="life" className="bg-ivory">
      <div id="designs" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <Eyebrow>{copy.life.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {copy.life.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.life.body}
        </p>
      </div>

      <div aria-label={copy.life.campaignLabel} className="hidden md:block">
        {LIFESTYLE_MOMENTS.map((moment, index) => {
          const item = copy.life.items[moment.id];

          return (
            <article
              key={moment.id}
              className="lifestyle-panel"
              data-tone={moment.tone}
            >
              <Image
                src={moment.src}
                alt={item.imageAlt}
                fill
                className="lifestyle-panel-image"
                style={{ objectPosition: moment.objectPosition }}
                sizes="100vw"
              />
              <div className="lifestyle-panel-copy">
                <div className="lifestyle-panel-copy-inner">
                  <p className="lifestyle-panel-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="lifestyle-panel-title">{item.title}</h3>
                  <p className="lifestyle-panel-line">{item.line}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ul className="md:hidden">
        {LIFESTYLE_MOMENTS.map((moment, index) => {
          const item = copy.life.items[moment.id];

          return (
            <li key={moment.id} className="border-t border-sand">
              <figure>
                <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[26rem]">
                  <Image
                    src={moment.src}
                    alt={item.imageAlt}
                    width={moment.width}
                    height={moment.height}
                    className="h-[28rem] w-full object-cover sm:h-[32rem]"
                    style={{ objectPosition: moment.objectPosition }}
                    sizes="100vw"
                  />
                </div>
                <figcaption className="bg-ivory px-5 py-7 sm:px-8">
                  <p className="text-sm font-semibold tracking-[0.18em] text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-[2rem] font-semibold leading-tight tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-stone">
                    {item.line}
                  </p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-sand bg-ivory px-5 py-12 sm:px-8 sm:py-16">
        <p className="mx-auto max-w-6xl">
          <Link href="/#waitlist" className="maison-btn">
            {copy.life.waitlistCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
