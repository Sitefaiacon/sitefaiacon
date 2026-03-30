import SiteLayout from "../components/site-layout"
import HomePage from "../components/home-page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish 
      ? "Renovation Corfu | #1 House Renovation Company in Corfu Greece - FaiaCon"
      : "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Υπολογιστής Κόστους Ανακαίνισης",
    description: isEnglish
      ? "Looking for renovation Corfu? FaiaCon is the leading renovation company in Corfu Greece with 35+ years experience. Expert house renovation, villa restoration, bathroom & kitchen remodeling. Free estimates for all renovation projects in Corfu."
      : "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Δωρεάν υπολογιστής κόστους ανακαίνισης, κατασκευή σπιτιού, κατασκευή πισίνας, διατηρητέα κτίρια. 35+ χρόνια εμπειρίας.",
    keywords: isEnglish
      ? [
          "renovation corfu",
          "renovation in corfu",
          "corfu renovation",
          "renovation corfu greece",
          "house renovation corfu",
          "villa renovation corfu",
          "property renovation corfu",
          "home renovation corfu",
          "bathroom renovation corfu",
          "kitchen renovation corfu",
          "renovation company corfu",
          "building contractor corfu",
          "renovation services corfu",
          "corfu property renovation",
          "renovation cost corfu",
          "FaiaCon corfu",
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
        ? "Renovation Corfu | Best Renovation Company in Corfu Greece"
        : "ΦαιάCon - Υπολογιστής Κόστους Ανακαίνισης | Κατασκευές Κέρκυρα",
      description: isEnglish
        ? "Renovation Corfu experts. FaiaCon offers professional house renovation, villa restoration, bathroom and kitchen remodeling across Corfu island. Free estimates. 35+ years experience."
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
