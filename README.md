# Liora landing page

Pre-launch marketing site for **Liora**, a jewelry-first smart bracelet for older adults and their families. The page collects waitlist emails and presents the product as premium jewelry with warm, dignity-preserving safety messaging.

> **Brand name is a placeholder.** “Liora” can be replaced before launch — update copy in `app/`, `components/`, and this README.

## Product

A discreet wearable that looks like boutique jewelry, not a medical device:

- Matte silver curved sensor bar
- Translucent moss-green stone beads
- Silver spacers, onyx accent, lobster clasp

Hero photography lives at [`public/assets/liora-bracelet.jpg`](public/assets/liora-bracelet.jpg).

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- No backend required for v1

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Waitlist form

The form validates email client-side and shows a success state. Wiring a real inbox is one environment variable:

```bash
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/your-form-id
```

See [`.env.example`](.env.example). Copy it to `.env.local` (gitignored) and restart the dev server.

Until that variable is set, `submitWaitlist` in [`lib/waitlist.ts`](lib/waitlist.ts) keeps a **local demo record** in `localStorage` so the UI can be reviewed without a backend. **Do not commit API keys.**

Suggested providers: [Formspree](https://formspree.io/), [Getform](https://getform.io/), [Basin](https://usebasin.com/), or a Next.js Route Handler plus [Resend](https://resend.com/).

## Deploy

The app is a standard Next.js site.

### Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (defaults are fine).
4. Add `NEXT_PUBLIC_WAITLIST_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` in project environment variables when you have a form provider and a live domain.
5. Deploy.

### Netlify

1. Add the site from the Git repository.
2. Build command: `npm run build`
3. Publish directory: `.next` (or use the official Next.js runtime / `@netlify/plugin-nextjs`).
4. Set `NEXT_PUBLIC_WAITLIST_ENDPOINT` in site environment variables.

### Other Node hosts

```bash
npm install
npm run build
npm start
```

Serve on the port your host expects (`PORT` is read by Next.js).

## Accessibility notes

The layout is written for older visitors and family members:

- Large body type (18px+), high-contrast ink on cream
- Visible focus rings and a skip link
- Labels on every field; radio cards instead of a tiny dropdown
- 48px+ tap targets on primary actions
- `prefers-reduced-motion` honored

## Replace the brand

Search the repo for `Liora`, `wearliora`, and `liora` after you choose a final name. Keep the cream / moss / silver palette unless brand guidelines change.
