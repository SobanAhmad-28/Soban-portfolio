import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: Replace with your actual domain
    sitemap: "https://your-domain.vercel.app/sitemap.xml",
  };
}
