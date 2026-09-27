"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n/provider";

export function Header({ tone = "solid" }: { tone?: "solid" | "overlay" }) {
  const { copy, locale } = useI18n();
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    if (tone !== "overlay") {
      return;
    }

    const onScroll = () => setRaised(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tone]);

  const links = [
    { href: "/features", label: copy.header.features },
    { href: "/#faq", label: copy.header.faq },
  ];

  const floating = tone === "overlay" && !raised;

  return (
    <header
      className={`${tone === "overlay" ? "fixed" : "sticky"} inset-x-0 top-0 z-40 border-b transition-colors ${
        floating
          ? "border-transparent bg-transparent"
          : "border-sand/80 bg-ivory/92 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link href="/" className="rounded-sm" aria-label={copy.header.homeAria}>
          <Logo />
        </Link>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium text-ink/80 transition-colors hover:text-ink ${
                locale === "zh" ? "" : "tracking-wide"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageToggle />
          <Link href="/#waitlist" className="maison-link min-h-12">
            <span className="sm:hidden">{copy.header.joinWaitlistShort}</span>
            <span className="hidden sm:inline">{copy.header.joinWaitlist}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
