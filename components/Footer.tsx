"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n/provider";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  const { copy, interpolate } = useI18n();

  return (
    <footer className="bg-noir text-pearl">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-sm text-lg text-pearl/85">{copy.footer.blurb}</p>
        </div>
        <div className="grid gap-3 text-base">
          <Link className="font-medium text-ivory hover:text-leaf" href="/#waitlist">
            {copy.footer.joinWaitlist}
          </Link>
          <Link className="text-pearl hover:text-ivory" href="/#designs">
            {copy.footer.designs}
          </Link>
          <Link className="text-pearl hover:text-ivory" href="/features">
            {copy.footer.features}
          </Link>
          <Link className="text-pearl hover:text-ivory" href="/privacy">
            {copy.footer.privacy}
          </Link>
          <a className="text-pearl hover:text-ivory" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-base text-pearl/70 sm:px-8">
          {interpolate(copy.footer.copyright, {
            year: String(new Date().getFullYear()),
          })}
        </p>
      </div>
    </footer>
  );
}
