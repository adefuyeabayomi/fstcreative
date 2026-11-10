/**
 * Canonical public site URL.
 *
 * Prefers NEXT_PUBLIC_SITE_URL, but never emits localhost URLs in a production
 * build (`.env.local` is loaded during builds too, which would otherwise leak
 * `http://localhost:3000` into sitemap.xml and Open Graph tags).
 */
const PRODUCTION_FALLBACK = "https://fiveandsixtechnologies.com";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

  if (configured) {
    const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(configured);
    if (!(process.env.NODE_ENV === "production" && isLocal)) {
      return configured;
    }
  }

  return process.env.NODE_ENV === "production"
    ? PRODUCTION_FALLBACK
    : "http://localhost:3000";
}
