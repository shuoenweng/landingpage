"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Care() {
  const { copy } = useI18n();

  return (
    <section id="care" className="bg-ivory">
      <div className="mx-auto max-w-2xl px-6 py-28 text-center sm:px-10 sm:py-36">
        <Eyebrow>{copy.care.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          {copy.care.title}
        </h2>
        <ul className="mt-16 space-y-14 text-left sm:mt-20">
          {copy.care.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-serif text-3xl font-medium leading-snug text-ink sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-3 text-xl leading-relaxed text-stone">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-16">
          <Link href="/features" className="maison-link">
            {copy.care.featuresCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
