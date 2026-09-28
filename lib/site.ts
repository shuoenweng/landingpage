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

/** 1080p landscape. Laptops and the narrow Presence frame use this. */
export const HERO_LANDSCAPE: HeroFilm = {
  mp4: "/video/hero-landscape.mp4",
  webm: "/video/hero-landscape.webm",
  poster: "/video/hero-landscape.jpg",
  width: 1920,
  height: 1080,
};

/** Native 4K landscape. Wide screens only, so smaller laptops skip the download. */
export const HERO_LANDSCAPE_4K: HeroFilm = {
  mp4: "/video/hero-landscape-4k.mp4",
  webm: "/video/hero-landscape-4k.webm",
  poster: "/video/hero-landscape-4k.jpg",
  width: 3840,
  height: 2160,
};

export const HERO_PORTRAIT: HeroFilm = {
  mp4: "/video/hero-portrait.mp4",
  webm: "/video/hero-portrait.webm",
  poster: "/video/hero-portrait.jpg",
  width: 1440,
  height: 2560,
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
