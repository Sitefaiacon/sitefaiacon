import SiteLayout from "../../../components/site-layout"
import VapsimatаElaiokromatismoiPage from "../../../components/vapsimata-elaiokromatismoi-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../../components/structured-data"

export const metadata: Metadata = {
  title: "Βαψίματα & Ελαιοχρωματισμοί στην Κέρκυρα | ΦαιάCon",
  description:
    "Επαγγελματικά βαψίματα και ελαιοχρωματισμοί εσωτερικών και εξωτερικών χώρων στην Κέρκυρα. Ποιοτικό φινίρισμα, σωστή προετοιμασία και αξιόπιστη εκτέλεση για κατοικίες, βίλες και τουριστικά ακίνητα.",
  keywords: [
    "βαψίματα Κέρκυρα",
    "ελαιοχρωματισμοί",
    "εσωτερικά βαψίματα",
    "εξωτερικά βαψίματα",
    "βαφή κτιρίου Κέρκυρα",
    "ελαιοχρωματισμοί βιλών",
  ],
}

export default async function VapsimatаRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Services" : "Υπηρεσίες", url: `https://faiacon.gr/${lang}/services` },
          {
            name: isEnglish ? "Painting & Decorating" : "Βαψίματα & Ελαιοχρωματισμοί",
            url: `https://faiacon.gr/${lang}/services/vapsimata-elaiokromatismoi`,
          },
        ]}
      />
      <VapsimatаElaiokromatismoiPage />
    </SiteLayout>
  )
}
