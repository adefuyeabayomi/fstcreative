import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

/**
 * Static sitemap for the public marketing site.
 * Generated at /sitemap.xml during `next build` (and on demand in dev).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog/visual-design-elements", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/visual-design-principles", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/color-theory", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/typography", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/figma-intro", changeFrequency: "monthly", priority: 0.7 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/bootcamps", changeFrequency: "monthly", priority: 0.7 },
    { path: "/quotation-request", changeFrequency: "monthly", priority: 0.5 },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
