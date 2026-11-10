import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/",
          "/chat",
          "/login",
          "/signup",
          "/forgot-password",
          "/reset-password",
          "/auth-guard",
          "/api/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
