import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy — Liora",
  description: "How Liora uses waitlist emails before launch.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Logo />
        <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Privacy
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone">
          <p>
            Liora is not for sale yet. This site collects waitlist details so we can
            tell you when the first collection is ready.
          </p>
          <p>
            We ask for an email address, an optional first name, and whether you are
            joining for yourself, a loved one, or both. We use that information only
            to send launch updates about Liora.
          </p>
          <p>
            We do not sell waitlist data. We do not send advertising on behalf of
            others. If a form provider is connected later, that provider will process
            submissions under their own terms — the endpoint is configured with{" "}
            <code className="rounded bg-cream px-1.5 py-0.5 text-ink">
              NEXT_PUBLIC_WAITLIST_ENDPOINT
            </code>
            .
          </p>
          <p>
            Until that endpoint is set, submissions stay in your browser for
            demonstration only and are not sent to a server.
          </p>
          <p>
            To be removed from the list after launch, write to{" "}
            <a className="font-medium text-moss underline" href="mailto:hello@wearliora.com">
              hello@wearliora.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
