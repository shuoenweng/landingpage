import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
          Early access
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Be first when the collection opens.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          Join the waitlist for a private preview, sizing notes, and first-collection
          access. We write rarely, and only when there is something worth knowing.
        </p>
        <div className="mt-10 rounded-[1.75rem] border border-sand bg-cream/60 p-5 text-left shadow-sm sm:p-8">
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>
      </div>
    </section>
  );
}
