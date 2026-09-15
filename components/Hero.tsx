import Image from "next/image";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
            First collection · coming soon
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-5xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            Quiet confidence, beautifully worn.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-stone">
            Liora is a jewelry-first bracelet for older adults who want to look like
            themselves — and for families who want to stay close without hovering.
            Discreet care for unexpected moments, held in a piece you would choose
            anyway.
          </p>
          <div className="mt-9 max-w-xl rounded-[1.75rem] border border-sand bg-white/80 p-5 shadow-sm sm:p-7">
            <p className="mb-5 font-serif text-2xl font-semibold text-ink">
              Join the waitlist
            </p>
            <WaitlistForm idPrefix="hero-waitlist" />
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_-40px_rgba(36,31,26,0.45)] ring-1 ring-sand">
            <Image
              src="/assets/liora-bracelet.jpg"
              alt="Liora bracelet with translucent moss-green stone beads, silver spacers, a lobster clasp, and a matte silver curved sensor bar, photographed on cream silk"
              width={1086}
              height={1448}
              priority
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <figcaption className="mt-4 text-center text-base text-stone">
            Matte silver bar · moss-green stones · made to be worn, not hidden
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
