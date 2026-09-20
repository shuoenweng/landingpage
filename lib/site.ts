export const CONTACT_EMAIL = "hello@qilyra.com";
export const PRODUCT_IMAGE = "/assets/qilyra-bracelet.jpg";
export const WAITLIST_STORAGE_KEY = "qilyra-waitlist";

export const LIFESTYLE_MOMENTS = [
  {
    id: "writing",
    src: "/assets/lifestyle-writing.png",
    width: 1122,
    height: 1402,
    tone: "light",
    objectPosition: "68% 42%",
  },
  {
    id: "commute",
    src: "/assets/lifestyle-commute.png",
    width: 1122,
    height: 1402,
    tone: "dark",
    objectPosition: "32% 52%",
  },
  {
    id: "window",
    src: "/assets/lifestyle-window.png",
    width: 1122,
    height: 1402,
    tone: "dark",
    objectPosition: "48% 38%",
  },
  {
    id: "curtain",
    src: "/assets/lifestyle-curtain.png",
    width: 1122,
    height: 1402,
    tone: "light",
    objectPosition: "48% 40%",
  },
  {
    id: "garden",
    src: "/assets/lifestyle-garden.png",
    width: 1122,
    height: 1402,
    tone: "light",
    objectPosition: "58% 42%",
  },
] as const;

export type LifestyleMomentId = (typeof LIFESTYLE_MOMENTS)[number]["id"];

const DEFAULT_SITE_URL = "http://localhost:3000";

function parseAbsoluteUrl(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  try {
    const url = new URL(trimmed);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.toString();
    }
  } catch {
    // Blank, relative, or otherwise invalid — try the next source.
  }
  return undefined;
}

/** Vercel system env vars are hostnames without a scheme. */
function parseVercelHost(host: string | undefined): string | undefined {
  const trimmed = host?.trim();
  if (!trimmed) return undefined;
  return parseAbsoluteUrl(`https://${trimmed}`);
}

/**
 * Canonical site origin for metadata (Open Graph, etc.).
 * Prefers a valid `NEXT_PUBLIC_SITE_URL`, then Vercel production/deployment
 * hosts, then localhost so empty env vars cannot crash `next build`.
 */
export function getSiteUrl(): string {
  return (
    parseAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    parseVercelHost(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    parseVercelHost(process.env.VERCEL_URL) ??
    new URL(DEFAULT_SITE_URL).toString()
  );
}
