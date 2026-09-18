export const CONTACT_EMAIL = "hello@qilyra.com";
export const PRODUCT_IMAGE = "/assets/qilyra-bracelet.jpg";
export const WAITLIST_STORAGE_KEY = "qilyra-waitlist";

export const DESIGN_COLORWAYS = [
  {
    id: "ice",
    src: "/assets/design-ice.png",
    nameEn: "Ice",
    nameZh: "冰晶",
    width: 1243,
    height: 1265,
  },
  {
    id: "rose",
    src: "/assets/design-rose.png",
    nameEn: "Rose",
    nameZh: "玫瑰",
    width: 1243,
    height: 1265,
  },
  {
    id: "citrine",
    src: "/assets/design-citrine.png",
    nameEn: "Citrine",
    nameZh: "黄晶",
    width: 1243,
    height: 1265,
  },
  {
    id: "onyx",
    src: "/assets/design-onyx.png",
    nameEn: "Onyx",
    nameZh: "墨玉",
    width: 1243,
    height: 1265,
  },
] as const;

export type DesignColorwayId = (typeof DESIGN_COLORWAYS)[number]["id"];

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
