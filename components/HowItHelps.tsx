const benefits = [
  {
    title: "If something happens, you are not alone",
    body: "Should a fall or a sudden stillness occur, Liora can quietly let the people you choose know. No panic button on display. No siren on your wrist. Just a calm signal, sent with care.",
  },
  {
    title: "Wellbeing, kept private",
    body: "Optional daily check-ins help those who love you feel at ease — without turning your life into a dashboard. You decide what is shared, and with whom.",
  },
  {
    title: "Made for the day you already live",
    body: "Light on the wrist, easy to fasten, comfortable from morning tea to evening reading. It is meant to become ordinary — the best kind of companion.",
  },
  {
    title: "Independence, with company nearby",
    body: "You keep your rhythm. Family keeps their peace of mind. Liora is designed so both can be true at once, without anyone feeling watched.",
  },
];

export function HowItHelps() {
  return (
    <section id="how-it-helps" className="border-t border-sand bg-cream/70">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
          How it helps
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Safety that leaves your dignity intact.
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          Liora is not an alarm you have to explain. It is a quiet layer of care —
          for walks, for time alone, for the ordinary days that still matter.
        </p>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="rounded-[1.75rem] border border-sand bg-ivory p-7 shadow-sm sm:p-9"
            >
              <p className="font-serif text-4xl font-semibold text-moss/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-[1.7rem]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
