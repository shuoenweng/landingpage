"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Families() {
  const { copy } = useI18n();

  return (
    <section id="families" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>{copy.families.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.15]">
          {copy.families.title}
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.families.intro}
        </p>
        <ul className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {copy.families.notes.map((note, index) => (
            <li
              key={note.title}
              className={`lg:px-10 ${index === 0 ? "lg:pl-0" : ""} ${
                index === copy.families.notes.length - 1 ? "lg:pr-0" : ""
              } ${index > 0 ? "border-t border-sand pt-10 lg:border-l lg:border-t-0 lg:pt-0" : ""}`}
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-moss">
                {note.audience}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                {note.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{note.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-14">
          <Link href="/features" className="maison-link">
            {copy.families.featuresCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
