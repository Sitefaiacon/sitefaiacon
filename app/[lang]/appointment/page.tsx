import SiteLayout from "../../components/site-layout"
import AppointmentPage from "../../components/appointment-page"
import { use } from "react"

export default function Appointment({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params)
  return (
    <SiteLayout>
      <AppointmentPage lang={lang} />
    </SiteLayout>
  )
}

