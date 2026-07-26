import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const localizedPaths = [
  "",
  "/cost-calculator",
  "/house-construction",
  "/listed-houses",
  "/pool-construction",
  "/antiparoxes-kerkira",
  "/our-projects",
  "/projects/kassiopi-villas",
  "/appointment",
  "/careers",
  "/services/villa-luxury-home-construction",
  "/services/hotel-construction-renovation",
  "/services/thermoprosopsi",
  "/services/vapsimata-elaiokromatismoi",
]

const englishOnlyPaths = [
  "/projects/house-renovation-corfu",
  "/projects/villa-renovation-corfu",
  "/projects/apartment-renovation-corfu",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-26")
  const localizedRoutes: MetadataRoute.Sitemap = localizedPaths.flatMap((path) => {
    const languages = {
      "el-GR": `${SITE_URL}/el${path}`,
      "en-US": `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/el${path}`,
    }

    return [
      {
        url: `${SITE_URL}/el${path}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: `${SITE_URL}/en${path}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 0.9 : 0.75,
        alternates: { languages },
      },
    ]
  })

  const englishRoutes: MetadataRoute.Sitemap = englishOnlyPaths.map((path) => ({
    url: `${SITE_URL}/en${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/renovations-corfu" ? 0.85 : 0.7,
  }))

  const renovationLanguages = {
    "el-GR": `${SITE_URL}/el/house-renovation`,
    "en-US": `${SITE_URL}/en/renovations-corfu`,
    "x-default": `${SITE_URL}/el/house-renovation`,
  }
  const renovationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/el/house-renovation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: renovationLanguages },
    },
    {
      url: `${SITE_URL}/en/renovations-corfu`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: renovationLanguages },
    },
  ]

  return [...localizedRoutes, ...renovationRoutes, ...englishRoutes]
}
