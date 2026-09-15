import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          This page is not here.
        </h1>
        <p className="mt-5 text-xl text-stone">
          The link may be out of date. You can return to the Liora waitlist from here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-moss px-6 text-lg font-semibold text-white hover:bg-moss-deep"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
