"use client";

import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Families() {
  const { copy } = useI18n();

  return (
    <section id="families" className="border-y border-sand bg-leaf/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>{copy.families.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.families.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.families.intro}
        </p>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {copy.families.notes.map((note) => (
            <li
              key={note.title}
              className="rounded-[1.75rem] bg-ivory/90 p-7 shadow-sm ring-1 ring-sand sm:p-8"
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
      </div>
    </section>
  );
}
