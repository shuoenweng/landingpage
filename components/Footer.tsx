import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-lg text-stone">
            Quiet jewelry for everyday independence. A first collection for older
            adults and the families who love them.
          </p>
        </div>
        <div className="grid gap-3 text-base text-stone">
          <Link className="font-medium text-ink hover:text-moss" href="/#waitlist">
            Join the waitlist
          </Link>
          <Link className="hover:text-ink" href="/privacy">
            Privacy
          </Link>
          <a className="hover:text-ink" href="mailto:hello@wearliora.com">
            hello@wearliora.com
          </a>
        </div>
      </div>
      <div className="border-t border-sand/80">
        <p className="mx-auto max-w-6xl px-5 py-6 text-base text-stone sm:px-8">
          © {new Date().getFullYear()} Liora. Brand name is a placeholder and may be
          replaced before launch.
        </p>
      </div>
    </footer>
  );
}
