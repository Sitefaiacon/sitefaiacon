import { SiteLayout } from "../../components/site-layout"
import AppointmentPage from "../../components/appointment-page"

export default async function Appointment({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <SiteLayout>
      <AppointmentPage lang={lang} />
    </SiteLayout>
  )
}
