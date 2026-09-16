export const CONTACT_EMAIL = "hello@qilyra.com";
export const PRODUCT_IMAGE = "/assets/qilyra-bracelet.jpg";
export const WAITLIST_STORAGE_KEY = "qilyra-waitlist";

const DEFAULT_SITE_URL = "http://localhost:3000";

/**
 * Canonical site origin for metadata (Open Graph, etc.).
 * Blank/whitespace `NEXT_PUBLIC_SITE_URL` is treated as unset — `??` would not.
 */
export function getSiteUrl(): string {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  try {
    return new URL(candidate).toString();
  } catch {
    return DEFAULT_SITE_URL;
  }
}
