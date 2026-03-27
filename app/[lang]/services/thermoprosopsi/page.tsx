import SiteLayout from "../../../components/site-layout"
import ThermoprosopsiPage from "../../../components/thermoprosopsi-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export const metadata: Metadata = {
  title: "Θερμοπρόσοψη στην Κέρκυρα | Εξωτερική Θερμομόνωση | ΦαιάCon",
  description:
    "Ολοκληρωμένες λύσεις θερμοπρόσοψης και εξωτερικής θερμομόνωσης στην Κέρκυρα. Ενεργειακή αναβάθμιση, προστασία κελύφους και αισθητική ανανέωση για κατοικίες, βίλες και τουριστικά ακίνητα.",
  keywords: [
    "θερμοπρόσοψη Κέρκυρα",
    "εξωτερική θερμομόνωση",
    "ενεργειακή αναβάθμιση",
    "ETICS Κέρκυρα",
    "θερμομόνωση κτιρίου",
    "εξοικονόμηση ενέργειας",
  ],
}

export default async function ThermoprosopsiRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `https://faiacon.gr/${lang}/services` },
          {
            name: isEnglish ? "Thermoprosopsi" : "Θερμοπρόσοψη",
            url: `https://faiacon.gr/${lang}/services/thermoprosopsi`,
          },
        ]}
      />
      <ThermoprosopsiPage />
    </SiteLayout>
  )
}
