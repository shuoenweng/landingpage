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
    <div
      role="group"
      aria-label={copy.languageLabel}
      className="inline-flex shrink-0 items-center rounded-full border border-sand bg-white/80 p-1"
    >
      {options.map((option) => {
        const selected = locale === option.locale;

        return (
          <button
            key={option.locale}
            type="button"
            aria-pressed={selected}
            onClick={() => setLocale(option.locale)}
            className={`inline-flex min-h-10 min-w-11 items-center justify-center rounded-full px-3 text-sm font-semibold transition-colors ${
              selected ? "bg-moss text-white" : "text-stone hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
