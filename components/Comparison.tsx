"use client";

import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

function cellTone(value: string, featured: boolean) {
  const normalized = value.trim().toLowerCase();
  const positive = normalized === "yes" || normalized === "是";

  if (featured) {
    return positive ? "font-semibold text-moss" : "font-medium text-ink";
  }

  return positive ? "font-medium text-ink" : "text-stone";
}

export function Comparison() {
  const { copy } = useI18n();
  const { columns, rows } = copy.comparison;

  return (
    <section id="why" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow>{copy.comparison.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {copy.comparison.title}
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          {copy.comparison.intro}
        </p>

        <div className="mt-10 overflow-x-auto rounded-[1.75rem] border border-sand bg-white shadow-sm">
          <table className="min-w-[40rem] w-full border-collapse text-left">
            <caption className="sr-only">{copy.comparison.title}</caption>
            <thead>
              <tr className="border-b border-sand bg-cream/70">
                <th
                  scope="col"
                  className="px-5 py-4 text-sm font-semibold tracking-wide text-stone sm:px-6"
                >
                  {columns.feature}
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-stone sm:px-5"
                >
                  {columns.smartwatch}
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-stone sm:px-5"
                >
                  {columns.pendant}
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold text-stone sm:px-5"
                >
                  {columns.band}
                </th>
                <th
                  scope="col"
                  className="bg-leaf/50 px-4 py-4 text-sm font-semibold text-ink sm:px-5"
                >
                  {columns.qilyra}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-sand last:border-b-0">
                  <th
                    scope="row"
                    className="px-5 py-4 font-serif text-lg font-semibold text-ink sm:px-6"
                  >
                    {row.feature}
                  </th>
                  <td className={`px-4 py-4 text-base sm:px-5 ${cellTone(row.smartwatch, false)}`}>
                    {row.smartwatch}
                  </td>
                  <td className={`px-4 py-4 text-base sm:px-5 ${cellTone(row.pendant, false)}`}>
                    {row.pendant}
                  </td>
                  <td className={`px-4 py-4 text-base sm:px-5 ${cellTone(row.band, false)}`}>
                    {row.band}
                  </td>
                  <td
                    className={`bg-leaf/35 px-4 py-4 text-base sm:px-5 ${cellTone(row.qilyra, true)}`}
                  >
                    {row.qilyra}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone">
          {copy.comparison.footnote}
        </p>
      </div>
    </section>
  );
}
