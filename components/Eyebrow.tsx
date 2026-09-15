"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n/provider";

export function Eyebrow({ children }: { children: ReactNode }) {
  const { locale } = useI18n();

  return (
    <p
      className={`text-sm font-semibold text-moss ${
        locale === "zh" ? "tracking-[0.18em]" : "uppercase tracking-[0.22em]"
      }`}
    >
      {children}
    </p>
  );
}
