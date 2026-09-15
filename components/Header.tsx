import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/#how-it-helps", label: "How it helps" },
  { href: "/#jewelry", label: "The piece" },
  { href: "/#families", label: "For families" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="rounded-lg" aria-label="Liora home">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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
        <Link
          href="/#waitlist"
          className="inline-flex min-h-12 items-center rounded-full bg-moss px-5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-moss-deep"
        >
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}
