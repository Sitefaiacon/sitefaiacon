import SiteLayout from "../../components/site-layout"
import PoolConstructionPage from "../../components/pool-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Κατασκευή Πισίνας Κέρκυρα | Πισίνες Μπετόν & Liner - ΦαιάCon",
  description: "Κατασκευή πισίνας στην Κέρκυρα. Πισίνες μπετόν, liner, πολυεστερικές. Σύγχρονα συστήματα χωρίς χημικά. Υπολογισμός κόστους πισίνας. Δωρεάν εκτίμηση.",
  keywords: [
    "κατασκευή πισίνας Κέρκυρα",
    "κόστος πισίνας",
    "πισίνα μπετόν Κέρκυρα",
    "πισίνα liner",
    "πισίνα πολυεστερική",
    "κατασκευή πισίνας τιμή",
    "πισίνες Κέρκυρα",
  ],
  openGraph: {
    title: "Κατασκευή Πισίνας Κέρκυρα - ΦαιάCon",
    description: "Κατασκευή πολυτελών πισινών στην Κέρκυρα. Μπετόν, liner, πολυεστερικές. Σύγχρονα συστήματα.",
    url: "https://faiacon.gr/el/pool-construction",
    type: "website",
  },
  alternates: {
    canonical: "https://faiacon.gr/el/pool-construction",
    languages: {
      "el-GR": "https://faiacon.gr/el/pool-construction",
      "en-US": "https://faiacon.gr/en/pool-construction",
    },
  },
}

export default async function PoolConstruction({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Pool Construction" : "Κατασκευή Πισίνας", url: `https://faiacon.gr/${lang}/pool-construction` },
        ]} 
      />
      <PoolConstructionPage lang={lang} />
    </SiteLayout>
  )
}
