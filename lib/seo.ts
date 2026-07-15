import type { Metadata } from "next"

export const SITE_URL = "https://www.faiacon.gr"

export const DEFAULT_SOCIAL_IMAGE = {
  url: `${SITE_URL}/images/petrinI-vila-kerkira.jpg`,
  width: 616,
  height: 448,
  alt: "Πέτρινη βίλα στην Κέρκυρα από τη ΦαιάCon",
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
