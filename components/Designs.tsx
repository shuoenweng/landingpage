"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { DESIGN_COLORWAYS } from "@/lib/site";

const COLORWAY_ATMOSPHERE = {
  ice: "radial-gradient(90% 80% at 38% 42%, #1c3a4d 0%, #0a1218 52%, #050708 100%)",
  rose: "radial-gradient(90% 80% at 62% 42%, #4a2a38 0%, #14090e 52%, #050708 100%)",
  citrine: "radial-gradient(90% 80% at 38% 42%, #4a3a18 0%, #141008 52%, #050708 100%)",
  onyx: "radial-gradient(90% 80% at 62% 42%, #2c2c30 0%, #0c0c0e 52%, #050708 100%)",
} as const;

export function Designs() {
  const { copy, locale } = useI18n();

  return (
    <section id="designs" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <Eyebrow>{copy.designs.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {copy.designs.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.designs.body}
        </p>
      </div>

      <div aria-label={copy.designs.campaignLabel} className="hidden md:block">
        {DESIGN_COLORWAYS.map((design, index) => {
          const item = copy.designs.items[design.id];
          const primary = locale === "zh" ? design.nameZh : design.nameEn;
          const secondary = locale === "zh" ? design.nameEn : design.nameZh;
          const reversed = index % 2 === 1;

          return (
            <article
              key={design.id}
              className={`colorway-campaign ${reversed ? "colorway-campaign-reverse" : ""}`}
              style={{ background: COLORWAY_ATMOSPHERE[design.id] }}
            >
              <div className="colorway-campaign-visual">
                <Image
                  src={design.src}
                  alt={item.imageAlt}
                  width={design.width}
                  height={design.height}
                  className="colorway-campaign-image"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
              <div className="colorway-campaign-copy">
                <p className="colorway-campaign-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="colorway-campaign-title">
                  {primary}
                  <span className="colorway-campaign-secondary">{secondary}</span>
                </h3>
                <p className="colorway-campaign-stones">{item.stones}</p>
              </div>
            </article>
          );
        })}
      </div>

      <ul className="md:hidden">
        {DESIGN_COLORWAYS.map((design, index) => {
          const item = copy.designs.items[design.id];
          const primary = locale === "zh" ? design.nameZh : design.nameEn;
          const secondary = locale === "zh" ? design.nameEn : design.nameZh;

          return (
            <li key={design.id} className="border-t border-sand">
              <figure>
                <div
                  className="flex min-h-[22rem] items-center justify-center px-4 py-8"
                  style={{ background: COLORWAY_ATMOSPHERE[design.id] }}
                >
                  <Image
                    src={design.src}
                    alt={item.imageAlt}
                    width={design.width}
                    height={design.height}
                    className="h-auto w-full max-w-sm object-contain"
                    sizes="100vw"
                  />
                </div>
                <figcaption className="bg-ivory px-5 py-7 sm:px-8">
                  <p className="text-sm font-semibold tracking-[0.18em] text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-[2rem] font-semibold leading-tight tracking-tight text-ink">
                    {primary}
                    <span className="mx-2 font-sans text-xl font-normal text-silver">
                      ·
                    </span>
                    <span className="font-serif text-[1.65rem] font-medium text-stone">
                      {secondary}
                    </span>
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-stone">
                    {item.stones}
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
            {copy.designs.waitlistCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
