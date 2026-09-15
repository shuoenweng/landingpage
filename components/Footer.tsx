"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n/provider";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  const { copy, interpolate } = useI18n();

  return (
    <footer className="border-t border-sand bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-lg text-stone">{copy.footer.blurb}</p>
        </div>
        <div className="grid gap-3 text-base text-stone">
          <Link className="font-medium text-ink hover:text-moss" href="/#waitlist">
            {copy.footer.joinWaitlist}
          </Link>
          <Link className="hover:text-ink" href="/features">
            {copy.footer.features}
          </Link>
          <Link className="hover:text-ink" href="/privacy">
            {copy.footer.privacy}
          </Link>
          <a className="hover:text-ink" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-sand/80">
        <p className="mx-auto max-w-6xl px-5 py-6 text-base text-stone sm:px-8">
          {interpolate(copy.footer.copyright, {
            year: String(new Date().getFullYear()),
          })}
        </p>
      </div>
    </footer>
  );
}
