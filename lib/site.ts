export const CONTACT_EMAIL = "hello@qilyra.com";
export const PRODUCT_IMAGE = "/assets/qilyra-hero.png";
export const PRODUCT_IMAGE_WIDTH = 2160;
export const PRODUCT_IMAGE_HEIGHT = 2700;
export const WAITLIST_STORAGE_KEY = "qilyra-waitlist";

export type HeroFilm = {
  mp4: string;
  webm: string;
  poster: string;
  width: number;
  height: number;
};

export const HERO_LANDSCAPE: HeroFilm = {
  mp4: "/video/hero-landscape.mp4",
  webm: "/video/hero-landscape.webm",
  poster: "/video/hero-landscape.jpg",
  width: 1280,
  height: 728,
};

export const HERO_PORTRAIT: HeroFilm = {
  mp4: "/video/hero-portrait.mp4",
  webm: "/video/hero-portrait.webm",
  poster: "/video/hero-portrait.jpg",
  width: 728,
  height: 1280,
};

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
