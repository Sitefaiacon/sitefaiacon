import SiteLayout from "../../components/site-layout"
import AppointmentPage from "../../components/appointment-page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    title: isEnglish
      ? "Book a Consultation | Faiacon Renovations Corfu"
      : "Κλείστε Ραντεβού | ΦαιάCon - Ανακαίνιση",
    description: isEnglish
      ? "Book a free consultation with Faiacon to discuss your property renovation, construction, or improvement needs in Corfu. Local expertise, professional guidance."
      : "Κλείστε ένα δωρεάν ραντεβού με την ΦαιάCon για να συζητήσετε τα έργα ανακαίνισης ή κατασκευής του ακινήτου σας στην Κέρκυρα.",
    openGraph: {
      title: isEnglish
        ? "Book Your Free Consultation | Faiacon Corfu"
        : "Κλείστε Ραντεβού | ΦαιάCon",
      description: isEnglish
        ? "Schedule a free consultation to discuss your renovation project in Corfu with professional local experts."
        : "Δωρεάν ραντεβού για να συζητήσετε το έργο ανακαίνισης σας με επαγγελματίες.",
      url: `https://faiacon.gr/${lang}/appointment`,
      type: "website",
    },
    alternates: {
      canonical: `https://faiacon.gr/${lang}/appointment`,
      languages: {
        "el-GR": "https://faiacon.gr/el/appointment",
        "en-US": "https://faiacon.gr/en/appointment",
      },
    },
  }
}

export default async function Appointment({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <AppointmentPage lang={lang} />
    </SiteLayout>
  )
}
