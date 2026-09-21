"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { IconFall, IconFamily, IconJewelry, IconPin } from "./Icons";
import { useI18n } from "@/lib/i18n/provider";

const itemIcons = [IconJewelry, IconFall, IconFamily, IconPin];

export function Everyday() {
  const { copy } = useI18n();

  return (
    <section id="everyday" className="bg-cream/60">
      <div id="how-it-helps" aria-hidden="true" className="h-0 overflow-hidden" />
      <div id="families" aria-hidden="true" className="h-0 overflow-hidden" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.everyday.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {copy.everyday.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.everyday.intro}
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.everyday.items.map((item, index) => {
            const Icon = itemIcons[index] ?? IconJewelry;

            return (
              <li
                key={item.title}
                className="rounded-[1.6rem] border border-sand/80 bg-white p-6 shadow-sm sm:p-7"
              >
                <Icon className="h-6 w-6 text-moss" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone sm:text-lg">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mt-12">
          <Link href="/features" className="maison-link">
            {copy.everyday.featuresCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
