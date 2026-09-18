"use client";

import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { DESIGN_COLORWAYS } from "@/lib/site";

export function Designs() {
  const { copy, locale } = useI18n();

  return (
    <section id="designs" className="border-t border-sand bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>{copy.designs.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.designs.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.designs.body}
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {DESIGN_COLORWAYS.map((design) => {
            const item = copy.designs.items[design.id];
            const primary = locale === "zh" ? design.nameZh : design.nameEn;
            const secondary = locale === "zh" ? design.nameEn : design.nameZh;

            return (
              <li key={design.id}>
                <figure className="group">
                  <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-[0_28px_64px_-32px_rgba(36,31,26,0.55)] ring-1 ring-ink/15">
                    <Image
                      src={design.src}
                      alt={item.imageAlt}
                      width={design.width}
                      height={design.height}
                      className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                  <figcaption className="mt-5 px-1">
                    <h3 className="font-serif text-3xl font-semibold tracking-tight text-ink">
                      {primary}
                      <span className="mx-2.5 font-sans text-xl font-normal text-silver">
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

        <p className="mt-12">
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
