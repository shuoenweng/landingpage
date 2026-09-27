"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  const { copy, interpolate } = useI18n();

  return (
    <footer className="bg-ivory text-ink">
      <div className="overflow-hidden px-5 pt-20 sm:px-8 sm:pt-28">
        <p className="font-wordmark text-[clamp(4.25rem,18vw,11rem)] font-medium leading-[0.82] tracking-tight text-ink">
          QiLyra
        </p>
      </div>
      <div className="mt-10 border-t border-sand/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6 text-lg sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-stone">
            {interpolate(copy.footer.copyright, {
              year: String(new Date().getFullYear()),
            })}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="font-medium text-ink hover:underline" href="/#waitlist">
              {copy.footer.joinWaitlist}
            </Link>
            <Link className="text-ink hover:underline" href="/#faq">
              {copy.footer.faq}
            </Link>
            <Link className="text-ink hover:underline" href="/features">
              {copy.footer.features}
            </Link>
            <Link className="text-ink hover:underline" href="/privacy">
              {copy.footer.privacy}
            </Link>
            <a className="text-ink hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </nav>
          <a className="font-medium text-ink underline underline-offset-4" href="#main">
            {copy.footer.backToTop}
          </a>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-10 text-lg leading-relaxed text-stone sm:px-8">
          {copy.footer.blurb}
        </p>
      </div>
    </footer>
  );
}
