import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish 
      ? "Renovation Corfu | FaiaCon - House Renovation & Construction Services"
      : "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Υπολογιστής Κόστους Ανακαίνισης",
    description: isEnglish
      ? "Professional renovation Corfu services by FaiaCon. Expert house renovation, bathroom & kitchen remodeling, villa restoration in Corfu Greece. Free renovation cost calculator. 35+ years experience."
      : "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Δωρεάν υπολογιστής κόστους ανακαίνισης, κατασκευή σπιτιού, κατασκευή πισίνας, διατηρητέα κτίρια. 35+ χρόνια εμπειρίας.",
    keywords: isEnglish
      ? [
          "renovation Corfu",
          "renovation corfu greece",
          "house renovation Corfu",
          "home renovation Corfu",
          "bathroom renovation Corfu",
          "kitchen renovation Corfu",
          "villa renovation Corfu",
          "property renovation Corfu",
          "renovation cost calculator Corfu",
          "building contractor Corfu",
          "construction company Corfu",
          "pool construction Corfu",
          "listed building restoration Corfu",
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
        ? "Renovation Corfu | FaiaCon - Professional House Renovation Services"
        : "ΦαιάCon - Υπολογιστής Κόστους Ανακαίνισης | Κατασκευές Κέρκυρα",
      description: isEnglish
        ? "Expert renovation Corfu services. House renovation, bathroom remodeling, kitchen renovation, villa restoration. Free cost calculator. 35+ years experience in Corfu Greece."
        : "Υπολογίστε δωρεάν το κόστος ανακαίνισης. Κατασκευές, ανακαινίσεις, πισίνες στην Κέρκυρα.",
      url: `https://faiacon.gr/${lang}`,
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      images: isEnglish ? [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          width: 1200,
          height: 630,
          alt: "Renovation Corfu - FaiaCon Construction Company",
        },
      ] : undefined,
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
