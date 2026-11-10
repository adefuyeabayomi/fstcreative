/**
 * Canonical public site URL.
 *
 * Vercel/host env vars are often set to a bare domain (`example.com`) or a URL
 * with a path/trailing slash. Normalise everything to a valid origin so
 * `new URL(...)` never throws during `next build` (page-data collection).
 */
const PRODUCTION_FALLBACK = "https://fiveandsixtechnologies.com";

function normalise(raw: string | undefined): string | null {
  if (!raw) return null;

  let value = raw.trim();
  if (!value) return null;

  // Add a protocol when the env var is a bare domain.
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  try {
    const url = new URL(value);
    if (!url.hostname) return null;
    return `${url.protocol}//${url.host}`;
  } catch {
    return null;
  }
}

export function getSiteUrl(): string {
  const configured = normalise(process.env.NEXT_PUBLIC_SITE_URL);

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
