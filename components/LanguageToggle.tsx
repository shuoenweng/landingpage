"use client";

import { useI18n } from "@/lib/i18n/provider";
import type { Locale } from "@/lib/i18n/messages";

const options: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh", label: "中文" },
];

export function LanguageToggle() {
  const { locale, setLocale, copy } = useI18n();

  return (
    <div role="group" aria-label={copy.languageLabel} className="inline-flex items-center gap-1">
      {options.map((option, index) => {
        const selected = locale === option.locale;

        return (
          <span key={option.locale} className="inline-flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1 text-stone/70">
                /
              </span>
            ) : null}
            <button
              type="button"
              aria-pressed={selected}
              onClick={() => setLocale(option.locale)}
              className={`inline-flex min-h-12 items-center px-1.5 text-base font-semibold underline-offset-[0.35em] ${
                selected
                  ? "text-ink underline decoration-ink"
                  : "text-stone hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
