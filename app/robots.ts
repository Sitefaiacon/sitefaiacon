import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/scripts/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/scripts/"],
      },
    ],
    sitemap: "https://faiacon.gr/sitemap.xml",
    host: "https://faiacon.gr",
  }
}
