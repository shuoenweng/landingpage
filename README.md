# QiLyra landing page

Pre-launch marketing site for **QiLyra**, a jewelry-first, screen-free smart bracelet. The page collects waitlist emails and presents the product as premium jewelry: cycle tracking, awareness when a cycle drifts from its usual pattern, hydration reminders, and — second to those — personal safety for the people you choose.

## Product

A discreet wearable that looks like boutique jewelry:

- Matte silver curved sensor bar
- Translucent moss-green stone beads
- Silver spacers, onyx accent, lobster clasp

The homepage hero is a full-screen product film. A landscape clip plays on wide viewports, with the line of type in the empty space to the left of the bracelet. A portrait clip plays on narrow viewports, with type in the empty space above and below the bracelet. Both are muted, looped (ping-pong, so the seam is smooth), and replaced by a still poster when the visitor prefers reduced motion. Files live in [`public/video/`](public/video/). The still used for social previews remains [`public/assets/qilyra-hero.png`](public/assets/qilyra-hero.png).

Capabilities are described on [`/features`](app/features/page.tsx): cycle tracking, awareness when a cycle drifts from its usual pattern (not a diagnosis, and not a contraceptive), hydration reminders, then personal safety (location sharing with chosen people, and emergency auto-contact). Everyday notes cover jewelry design, battery, splash resistance, the companion app, and heart and movement kept with the wearer.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Waitlist POSTs to [`/api/waitlist`](app/api/waitlist/route.ts); Formspree is optional

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

The form validates client-side, then POSTs JSON to [`/api/waitlist`](app/api/waitlist/route.ts). That route reads the visitor country from Vercel’s `x-vercel-ip-country` header (ISO code such as `TW` or `US`) and forwards the payload — including `country` — to Formspree. Formspree will show a `country` field on each submission. Locally the header is usually missing, so `country` is stored as `unknown` and the submit still succeeds. The browser Geolocation API is not used.

Wire a real inbox with either variable (the API prefers the server-only name):

```bash
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/your-form-id
# or
WAITLIST_ENDPOINT=https://formspree.io/f/your-form-id
```

See [`.env.example`](.env.example). Copy it to `.env.local` (gitignored) and restart the dev server.

Until an endpoint is set, `submitWaitlist` in [`lib/waitlist.ts`](lib/waitlist.ts) keeps a **local demo record** in `localStorage` (including `country` from the API) so the UI can be reviewed without a form provider. **Do not commit API keys.**

Suggested providers: [Formspree](https://formspree.io/), [Getform](https://getform.io/), or [Basin](https://usebasin.com/).

## Deploy

The app is a standard Next.js site.

### Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (defaults are fine).
4. Add `NEXT_PUBLIC_WAITLIST_ENDPOINT` or server-only `WAITLIST_ENDPOINT` in project environment variables when you have a form provider.
5. Optionally set `NEXT_PUBLIC_SITE_URL` to a custom domain (for example `https://www.qilyra.com`). If it is omitted, empty, or not a valid absolute URL, Vercel builds use `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` automatically (https). Local builds use `http://localhost:3000`.
6. Deploy.

### Netlify

1. Add the site from the Git repository.
2. Build command: `npm run build`
3. Publish directory: `.next` (or use the official Next.js runtime / `@netlify/plugin-nextjs`).
4. Set `NEXT_PUBLIC_WAITLIST_ENDPOINT` or `WAITLIST_ENDPOINT` in site environment variables.

### Other Node hosts

```bash
npm install
npm run build
npm start
```

Serve on the port your host expects (`PORT` is read by Next.js).

## Languages

The site is bilingual: **English** and **Simplified Chinese**. Use the **EN | 中文** control in the header (visible on mobile). The choice is stored in `localStorage` (`qilyra-locale`) and restored on reload.

- Default: English
- First visit with no saved choice: Simplified Chinese if the browser language starts with `zh`, otherwise English
- Copy lives in [`lib/i18n/messages.ts`](lib/i18n/messages.ts). Keep the wordmark **QiLyra** untranslated.

## Accessibility notes

The layout is written for older visitors and family members:

- Large body type (18px+), high-contrast ink on cream
- Visible focus rings and a skip link
- Labels on every field; radio cards instead of a tiny dropdown
- 48px+ tap targets on primary actions
- `prefers-reduced-motion` honored
