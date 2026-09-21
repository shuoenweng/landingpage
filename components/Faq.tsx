"use client";

import { useId, useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const buttonId = `${reactId}-button`;
  const panelId = `${reactId}-panel`;

  return (
    <div className="border-b border-sand">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="flex min-h-16 w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-serif text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand bg-white text-xl font-semibold text-moss"
          >
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p className="max-w-3xl pb-6 text-lg leading-relaxed text-stone">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const { copy } = useI18n();

  return (
    <section id="faq" className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.faq.title}
        </h2>
        <p className="mt-5 text-xl leading-relaxed text-stone">{copy.faq.intro}</p>
        <div className="mt-10 border-t border-sand">
          {copy.faq.items.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <p className="mt-10 text-base leading-relaxed text-stone">{copy.faq.disclaimer}</p>
      </div>
    </section>
  );
}
