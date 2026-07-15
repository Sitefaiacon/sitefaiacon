import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const localizedPaths = [
  "",
  "/cost-calculator",
  "/house-renovation",
  "/house-construction",
  "/listed-houses",
  "/pool-construction",
  "/antiparoxes-kerkira",
  "/our-projects",
  "/appointment",
  "/careers",
  "/services/villa-luxury-home-construction",
  "/services/hotel-construction-renovation",
  "/services/thermoprosopsi",
  "/services/vapsimata-elaiokromatismoi",
]

const englishOnlyPaths = [
  "/renovations-corfu",
  "/projects/house-renovation-corfu",
  "/projects/villa-renovation-corfu",
  "/projects/apartment-renovation-corfu",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes: MetadataRoute.Sitemap = localizedPaths.flatMap((path) => {
    const languages = {
      "el-GR": `${SITE_URL}/el${path}`,
      "en-US": `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/el${path}`,
    }

    return [
      {
        url: `${SITE_URL}/el${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: `${SITE_URL}/en${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 0.9 : 0.75,
        alternates: { languages },
      },
    ]
  })

  const englishRoutes: MetadataRoute.Sitemap = englishOnlyPaths.map((path) => ({
    url: `${SITE_URL}/en${path}`,
    changeFrequency: "monthly",
    priority: path === "/renovations-corfu" ? 0.85 : 0.7,
  }))

  return [...localizedRoutes, ...englishRoutes]
}
