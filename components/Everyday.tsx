"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Everyday() {
  const { copy } = useI18n();

  return (
    <section id="everyday" className="bg-ivory">
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
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {copy.everyday.items.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm sm:p-8"
            >
              <h3 className="font-serif text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{item.body}</p>
            </li>
          ))}
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
