import { SiteLayout } from "../../components/site-layout"
import AppointmentPage from "../../components/appointment-page"

export default function Appointment({ params: { lang } }: { params: { lang: string } }) {
  return (
    <SiteLayout>
      <AppointmentPage lang={lang} />
    </SiteLayout>
  )
}
