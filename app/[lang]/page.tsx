import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish 
      ? "FaiaCon - Technical Construction Company Corfu | Renovation Cost Calculator"
      : "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Υπολογιστής Κόστους Ανακαίνισης",
    description: isEnglish
      ? "Leading construction company in Corfu. Free renovation cost calculator, house construction, pool building, listed buildings restoration. 35+ years of experience."
      : "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Δωρεάν υπολογιστής κόστους ανακαίνισης, κατασκευή σπιτιού, κατασκευή πισίνας, διατηρητέα κτίρια. 35+ χρόνια εμπειρίας.",
    keywords: isEnglish
      ? [
          "renovation cost calculator Corfu",
          "house construction Corfu",
          "renovation estimate",
          "pool construction Corfu",
          "FaiaCon",
        ]
      : [
          "υπολογιστής κόστους ανακαίνισης",
          "εκτίμηση κόστους ανακαίνισης",
          "κατασκευή σπιτιού Κέρκυρα",
          "ανακαίνιση σπιτιού Κέρκυρα",
          "κατασκευή πισίνας Κέρκυρα",
          "ΦαιάCon",
        ],
    openGraph: {
      title: isEnglish 
        ? "FaiaCon - Renovation Cost Calculator | Construction Corfu"
        : "ΦαιάCon - Υπολογιστής Κόστους Ανακαίνισης | Κατασκευές Κέρκυρα",
      description: isEnglish
        ? "Calculate your renovation cost for free. House construction, renovations, pools in Corfu."
        : "Υπολογίστε δωρεάν το κόστος ανακαίνισης. Κατασκευές, ανακαινίσεις, πισίνες στην Κέρκυρα.",
      url: `https://faiacon.gr/${lang}`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}`,
      languages: {
        "el-GR": "https://faiacon.gr/el",
        "en-US": "https://faiacon.gr/en",
      },
    },
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <HomePage lang={lang} />
    </SiteLayout>
  )
}
