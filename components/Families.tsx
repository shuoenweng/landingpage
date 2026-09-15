const notes = [
  {
    audience: "For the wearer",
    title: "Stay yourself",
    body: "No pendant to tuck under a collar. No conversation about “the device.” Just a bracelet that belongs with the rest of your jewelry — and a little extra ease in the day.",
  },
  {
    audience: "For family",
    title: "Stay close, without hovering",
    body: "Fewer worry-driven check-ins. If something needs attention, you will know. If the afternoon is simply quiet, you can let it be quiet.",
  },
  {
    audience: "For both",
    title: "Privacy, chosen together",
    body: "You choose who is notified, and how. Liora is built so care does not have to feel like surveillance — for the person wearing it, or the people waiting to hear.",
  },
];

export function Families() {
  return (
    <section id="families" className="border-y border-sand bg-leaf/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
          For families
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Made for two kinds of love: the wish to be free, and the wish to know they are well.
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-stone">
          Adult children should not have to choose between respect and reassurance.
          Liora is a shared object — one gift, two kinds of rest.
        </p>
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <li
              key={note.title}
              className="rounded-[1.75rem] bg-ivory/90 p-7 shadow-sm ring-1 ring-sand sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                {note.audience}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                {note.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-stone">{note.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
