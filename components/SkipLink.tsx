"use client";

import { useI18n } from "@/lib/i18n/provider";

export function SkipLink() {
  const { copy } = useI18n();

  return (
    <a className="skip-link" href="#main">
      {copy.skipToContent}
    </a>
  );
}
