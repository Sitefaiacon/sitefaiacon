import SiteLayout from "../../components/site-layout"
import ListedHousesPage from "../../components/listed-houses-page"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "../../components/structured-data"

export const metadata: Metadata = {
  title: "Διατηρητέα Κτίρια Κέρκυρα | Αναστήλωση & Αποκατάσταση - ΦαιάCon",
  description: "Αποκατάσταση και αναστήλωση διατηρητέων κτιρίων στην Κέρκυρα. Εξειδικευμένες τεχνικές, σεβασμός στην αρχιτεκτονική κληρονομιά. 35+ χρόνια εμπειρίας.",
  keywords: [
    "διατηρητέα κτίρια Κέρκυρα",
    "αναστήλωση διατηρητέων",
    "αποκατάσταση παλιών κτιρίων",
    "παραδοσιακά κτίρια Κέρκυρα",
    "ιστορικά κτίρια Κέρκυρα",
    "αρχιτεκτονική κληρονομιά",
  ],
  openGraph: {
    title: "Διατηρητέα Κτίρια Κέρκυρα - ΦαιάCon",
    description: "Εξειδικευμένη αποκατάσταση διατηρητέων κτιρίων στην Κέρκυρα. Σεβασμός στην παράδοση.",
    url: "https://faiacon.gr/el/listed-houses",
    type: "website",
  },
  alternates: {
    canonical: "https://faiacon.gr/el/listed-houses",
    languages: {
      "el-GR": "https://faiacon.gr/el/listed-houses",
      "en-US": "https://faiacon.gr/en/listed-houses",
    },
  },
}

export default async function ListedHouses({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"
  
  return (
    <SiteLayout>
      <BreadcrumbSchema 
        items={[
          { name: isEnglish ? "Home" : "Αρχική", url: `https://faiacon.gr/${lang}` },
          { name: isEnglish ? "Listed Buildings" : "Διατηρητέα Κτίρια", url: `https://faiacon.gr/${lang}/listed-houses` },
        ]} 
      />
      <ListedHousesPage lang={lang} />
    </SiteLayout>
  )
}
