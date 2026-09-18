"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n/provider";

export function Eyebrow({
  children,
  tone = "moss",
}: {
  children: ReactNode;
  tone?: "moss" | "ivory" | "pearl";
}) {
  const { locale } = useI18n();
  const color =
    tone === "ivory"
      ? "text-ivory"
      : tone === "pearl"
        ? "text-pearl"
        : "text-moss";

  return (
    <p
      className={`text-sm font-semibold ${color} ${
        locale === "zh" ? "tracking-[0.18em]" : "uppercase tracking-[0.22em]"
      }`}
    >
      {children}
    </p>
  );
}
