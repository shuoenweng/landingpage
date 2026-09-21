"use client";

import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Specs() {
  const { copy } = useI18n();

  return (
    <section id="specs" className="bg-cream/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.specs.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.specs.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.specs.intro}
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.specs.items.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-stone">
          {copy.specs.disclaimer}
        </p>
      </div>
    </section>
  );
}
