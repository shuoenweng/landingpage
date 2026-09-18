"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import {
  DESIGN_COLORWAYS,
  type DesignColorwayId,
} from "@/lib/site";

const COLORWAY_ATMOSPHERE: Record<
  DesignColorwayId,
  { panel: string; glow: string }
> = {
  ice: {
    panel:
      "radial-gradient(120% 90% at 42% 38%, #1c3a4d 0%, #0a1218 48%, #050708 100%)",
    glow: "rgba(126, 186, 206, 0.22)",
  },
  rose: {
    panel:
      "radial-gradient(120% 90% at 42% 38%, #4a2a38 0%, #14090e 48%, #050708 100%)",
    glow: "rgba(214, 142, 164, 0.2)",
  },
  citrine: {
    panel:
      "radial-gradient(120% 90% at 42% 38%, #4a3a18 0%, #141008 48%, #050708 100%)",
    glow: "rgba(220, 176, 86, 0.2)",
  },
  onyx: {
    panel:
      "radial-gradient(120% 90% at 42% 38%, #2c2c30 0%, #0c0c0e 48%, #050708 100%)",
    glow: "rgba(198, 196, 192, 0.16)",
  },
};

export function Designs() {
  const { copy, locale } = useI18n();
  const [activeId, setActiveId] = useState<DesignColorwayId>(
    DESIGN_COLORWAYS[0].id,
  );

  return (
    <section id="designs" className="border-t border-sand bg-ivory">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-28">
        <Eyebrow>{copy.designs.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.designs.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.designs.body}
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label={copy.designs.lookbookLabel}
        aria-describedby="colorway-lookbook-hint"
        className="colorway-lookbook hidden md:flex"
      >
        <p id="colorway-lookbook-hint" className="sr-only">
          {copy.designs.lookbookHint}
        </p>
        {DESIGN_COLORWAYS.map((design, index) => {
          const item = copy.designs.items[design.id];
          const primary = locale === "zh" ? design.nameZh : design.nameEn;
          const secondary = locale === "zh" ? design.nameEn : design.nameZh;
          const isActive = activeId === design.id;
          const atmosphere = COLORWAY_ATMOSPHERE[design.id];

          return (
            <label
              key={design.id}
              className="colorway-panel"
              data-active={isActive ? "true" : "false"}
              style={{ background: atmosphere.panel }}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  setActiveId(design.id);
                }
              }}
            >
              <input
                type="radio"
                name="qilyra-colorway-lookbook"
                value={design.id}
                checked={isActive}
                onChange={() => setActiveId(design.id)}
                className="sr-only"
                aria-label={`${primary}, ${secondary}. ${item.stones}`}
              />
              <span
                className="colorway-panel-glow"
                style={{ background: atmosphere.glow }}
                aria-hidden="true"
              />
              <span className="colorway-panel-media">
                <Image
                  src={design.src}
                  alt=""
                  width={design.width}
                  height={design.height}
                  className="colorway-panel-image"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
              </span>
              <span className="colorway-panel-caption">
                <span className="colorway-panel-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="colorway-panel-names">
                  <span className="colorway-panel-primary">{primary}</span>
                  <span className="colorway-panel-secondary">{secondary}</span>
                </span>
                <span className="colorway-panel-stones">{item.stones}</span>
              </span>
            </label>
          );
        })}
      </div>

      <ul className="mx-auto grid max-w-6xl gap-10 px-5 pb-4 md:hidden sm:px-8">
        {DESIGN_COLORWAYS.map((design, index) => {
          const item = copy.designs.items[design.id];
          const primary = locale === "zh" ? design.nameZh : design.nameEn;
          const secondary = locale === "zh" ? design.nameEn : design.nameZh;

          return (
            <li key={design.id}>
              <figure>
                <div className="overflow-hidden rounded-[1.5rem] bg-black ring-1 ring-ink/10">
                  <Image
                    src={design.src}
                    alt={item.imageAlt}
                    width={design.width}
                    height={design.height}
                    className="h-auto w-full object-cover"
                    sizes="90vw"
                  />
                </div>
                <figcaption className="mt-5 px-0.5">
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

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p>
          <Link
            href="/#waitlist"
            className="inline-flex min-h-12 items-center rounded-full bg-moss px-6 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-moss-deep"
          >
            {copy.designs.waitlistCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
