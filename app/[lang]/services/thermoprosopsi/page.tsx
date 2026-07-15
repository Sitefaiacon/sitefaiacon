import SiteLayout from "../../../components/site-layout"
import ThermoprosopsiPage from "../../../components/thermoprosopsi-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"
import { DEFAULT_SOCIAL_IMAGE, localizedAlternates, SITE_URL } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "External Thermal Insulation in Corfu"
      : "Θερμοπρόσοψη & Εξωτερική Θερμομόνωση στην Κέρκυρα",
    description: isEnglish
      ? "Complete external thermal insulation (ETICS/thermoprosopsi) solutions in Corfu. Energy upgrades, building envelope protection and aesthetic renewal for homes, villas and tourist properties."
      : "Ολοκληρωμένες λύσεις θερμοπρόσοψης και εξωτερικής θερμομόνωσης στην Κέρκυρα. Ενεργειακή αναβάθμιση, προστασία κελύφους και αισθητική ανανέωση για κατοικίες, βίλες και τουριστικά ακίνητα.",
    keywords: isEnglish
      ? [
          "external thermal insulation corfu",
          "ETICS corfu",
          "thermoprosopsi corfu",
          "energy upgrade corfu",
          "building insulation corfu",
          "energy saving corfu",
        ]
      : [
          "θερμοπρόσοψη Κέρκυρα",
          "εξωτερική θερμομόνωση",
          "ενεργειακή αναβάθμιση",
          "ETICS Κέρκυρα",
          "θερμομόνωση κτιρίου",
          "εξοικονόμηση ενέργειας",
        ],
    openGraph: {
      title: isEnglish
        ? "External Thermal Insulation (Thermoprosopsi) in Corfu"
        : "Θερμοπρόσοψη στην Κέρκυρα | Εξωτερική Θερμομόνωση",
      description: isEnglish
        ? "Energy upgrades and external thermal insulation for homes, villas and tourist properties in Corfu."
        : "Ενεργειακή αναβάθμιση και εξωτερική θερμομόνωση για κατοικίες, βίλες και τουριστικά ακίνητα στην Κέρκυρα.",
      url: `${SITE_URL}/${lang}/services/thermoprosopsi`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    alternates: localizedAlternates(lang, "services/thermoprosopsi"),
  }
}

export default async function ThermoprosopsiRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `${SITE_URL}/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `${SITE_URL}/${lang}` },
          {
            name: isEnglish ? "Thermoprosopsi" : "Θερμοπρόσοψη",
            url: `${SITE_URL}/${lang}/services/thermoprosopsi`,
          },
        ]}
      />
      <ThermoprosopsiPage />
    </SiteLayout>
  )
}
