import Image from "next/image";

const details = [
  {
    name: "The bar",
    detail:
      "A matte silver curve that holds the sensing quietly. Soft to the eye, not a gadget housing.",
  },
  {
    name: "The stones",
    detail:
      "Translucent moss-green beads with natural inclusions — like garden light held in glass.",
  },
  {
    name: "The finish",
    detail:
      "Polished silver spacers, a single onyx accent, and a classic lobster clasp with an extender.",
  },
];

export function Jewelry() {
  return (
    <section id="jewelry" className="bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 overflow-hidden rounded-[2rem] bg-cream ring-1 ring-sand lg:order-1">
          <Image
            src="/assets/liora-bracelet.jpg"
            alt="Close view of the Liora bracelet resting on draped cream silk"
            width={1086}
            height={1448}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 520px, 90vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
            Designed as jewelry
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            If it looks like a medical device, we have not succeeded.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-stone">
            Liora is composed like a boutique piece: stones you would find in a
            jeweler&apos;s tray, a silver line with presence, and no screen competing
            for attention. Wear it with a watch, a wedding band, or nothing else at all.
          </p>
          <ul className="mt-10 grid gap-6">
            {details.map((item) => (
              <li key={item.name} className="border-t border-sand pt-5">
                <h3 className="font-serif text-2xl font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-lg leading-relaxed text-stone">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
