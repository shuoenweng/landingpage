"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useI18n } from "@/lib/i18n/provider";

export default function NotFound() {
  const { copy } = useI18n();

  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="text-sm font-semibold tracking-[0.22em] text-moss">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          {copy.notFound.title}
        </h1>
        <p className="mt-5 text-xl text-stone">{copy.notFound.body}</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-moss px-6 text-lg font-semibold text-white hover:bg-moss-deep"
        >
          {copy.notFound.backHome}
        </Link>
      </main>
      <Footer />
    </>
  );
}
