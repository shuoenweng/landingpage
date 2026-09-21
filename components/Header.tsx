"use client";

import Link from "next/link";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n/provider";

export function Header() {
  const { copy, locale } = useI18n();
  const links = [
    { href: "/#everyday", label: copy.header.everyday },
    { href: "/#life", label: copy.header.life },
    { href: "/#why", label: copy.header.why },
    { href: "/#faq", label: copy.header.faq },
    { href: "/features", label: copy.header.features },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-ivory/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8 sm:py-3.5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <Link href="/" className="rounded-lg" aria-label={copy.header.homeAria}>
            <Logo />
          </Link>
          <Link
            href="/features"
            className="hidden text-base font-medium text-stone transition-colors hover:text-ink sm:inline lg:hidden"
          >
            {copy.header.features}
          </Link>
          <Link
            href="/#life"
            className="hidden text-base font-medium text-stone transition-colors hover:text-ink sm:inline lg:hidden"
          >
            {copy.header.life}
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.95rem] font-medium text-stone transition-colors hover:text-ink ${
                locale === "zh" ? "" : "tracking-[0.04em]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <Link
            href="/#waitlist"
            className="maison-btn maison-btn-compact shrink-0 whitespace-nowrap"
          >
            <span className="sm:hidden">{copy.header.joinWaitlistShort}</span>
            <span className="hidden sm:inline">{copy.header.joinWaitlist}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
