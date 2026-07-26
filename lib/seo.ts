import type { Metadata } from "next"

export const SITE_URL = "https://www.faiacon.gr"

export const DEFAULT_SOCIAL_IMAGE = {
  url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg",
  width: 1600,
  height: 750,
  alt: "Faiacon construction and renovation services in Corfu",
}

export function localizedAlternates(lang: string, path = ""): Metadata["alternates"] {
  const normalizedPath = path ? `/${path.replace(/^\//, "")}` : ""

  return {
    canonical: `${SITE_URL}/${lang}${normalizedPath}`,
    languages: {
      "el-GR": `${SITE_URL}/el${normalizedPath}`,
      "en-US": `${SITE_URL}/en${normalizedPath}`,
      "x-default": `${SITE_URL}/el${normalizedPath}`,
    },
  }
}
