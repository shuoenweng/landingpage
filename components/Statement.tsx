"use client";

import { useI18n } from "@/lib/i18n/provider";

export function Statement() {
  const { copy } = useI18n();

  return (
    <section className="bg-ivory">
      <div className="mx-auto flex min-h-[68vh] max-w-4xl items-center px-6 py-28 sm:px-10 sm:py-36">
        <h2 className="text-center font-serif text-[clamp(2.15rem,4.4vw,3.85rem)] font-medium leading-[1.22] text-ink">
          {copy.statement.lead}{" "}
          <span className="text-stone">{copy.statement.rest}</span>
        </h2>
      </div>
    </section>
  );
}
