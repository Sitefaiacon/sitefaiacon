import SiteLayout from "../../components/site-layout"
import PoolConstructionPage from "../../components/pool-construction-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Pool Construction Corfu | Swimming Pool Builder & Installation"
      : "Κατασκευή Πισίνας Κέρκυρα | Πισίνες Μπετόν & Liner - ΦαιάCon",
    description: isEnglish
      ? "Professional pool construction in Corfu Greece. Concrete pools, liner pools, fiberglass. Modern chemical-free systems. Part of our renovation Corfu services. Free estimate."
      : "Κατασκευή πισίνας στην Κέρκυρα. Πισίνες μπετόν, liner, πολυεστερικές. Σύγχρονα συστήματα χωρίς χημικά. Υπολογισμός κόστους πισίνας. Δωρεάν εκτίμηση.",
    keywords: isEnglish
      ? [
          "pool construction Corfu",
          "swimming pool builder Corfu",
          "pool installation Corfu Greece",
          "concrete pool Corfu",
          "liner pool Corfu",
          "villa pool Corfu",
          "renovation Corfu",
          "FaiaCon pools",
        ]
      : [
          "κατασκευή πισίνας Κέρκυρα",
          "κόστος πισίνας",
          "πισίνα μπετόν Κέρκυρα",
          "πισίνα liner",
          "πισίνα πολυεστερική",
          "κατασκευή πισίνας τιμή",
          "πισίνες Κέρκυρα",
        ],
    openGraph: {
      title: isEnglish
        ? "Pool Construction Corfu | FaiaCon Swimming Pool Builder"
        : "Κατασκευή Πισίνας Κέρκυρα - ΦαιάCon",
      description: isEnglish
        ? "Luxury pool construction in Corfu Greece. Concrete, liner, fiberglass pools with modern systems."
        : "Κατασκευή πολυτελών πισινών στην Κέρκυρα. Μπετόν, liner, πολυεστερικές. Σύγχρονα συστήματα.",
      url: `https://faiacon.gr/${lang}/pool-construction`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/pool-construction`,
      languages: {
        "el-GR": "https://faiacon.gr/el/pool-construction",
        "en-US": "https://faiacon.gr/en/pool-construction",
      },
    },
  }
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
