"use client";

import Link from "next/link";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n/provider";

export function Header() {
  const { copy } = useI18n();
  const links = [
    { href: "/features", label: copy.header.features },
    { href: "/#how-it-helps", label: copy.header.howItHelps },
    { href: "/#jewelry", label: copy.header.thePiece },
    { href: "/#families", label: copy.header.forFamilies },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8 sm:py-3.5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <Link href="/" className="rounded-lg" aria-label={copy.header.homeAria}>
            <Logo />
          </Link>
          <Link
            href="/features"
            className="text-base font-medium text-stone transition-colors hover:text-ink md:hidden"
          >
            {copy.header.features}
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-stone transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Link
            href="/#waitlist"
            className="inline-flex min-h-12 items-center rounded-full bg-moss px-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-moss-deep sm:px-5 sm:text-base"
          >
            <span className="sm:hidden">{copy.header.joinWaitlistShort}</span>
            <span className="hidden sm:inline">{copy.header.joinWaitlist}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
