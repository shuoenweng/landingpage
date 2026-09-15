"use client";

import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/lib/i18n/provider";

export function FeaturesContent() {
  const { copy } = useI18n();
  const page = copy.features;

  return (
    <main id="main">
      <section className="border-b border-sand bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {page.heading}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-stone">{page.intro}</p>
        </div>
      </section>

      <section className="bg-cream/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{page.highlightsEyebrow}</Eyebrow>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {page.highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-ivory p-7 shadow-sm sm:p-8"
              >
                <h2 className="font-serif text-2xl font-semibold text-ink sm:text-[1.7rem]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-stone">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{page.everydayEyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {page.everydayTitle}
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {page.everyday.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-cream/40 p-7 sm:p-8"
              >
                <h3 className="font-serif text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-stone">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="waitlist" className="border-t border-sand bg-leaf/40">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {page.waitlistTitle}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-stone">{page.waitlistBody}</p>
          <div className="mt-10 rounded-[1.75rem] border border-sand bg-ivory p-5 shadow-sm sm:p-8">
            <WaitlistForm idPrefix="features-waitlist" />
          </div>
          <p className="mt-8">
            <Link
              href="/"
              className="text-lg font-semibold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss"
            >
              {copy.notFound.backHome}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
