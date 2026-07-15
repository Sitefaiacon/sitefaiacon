import { permanentRedirect } from "next/navigation"

export default async function Portfolio({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  permanentRedirect(`/${lang}/our-projects`)
}
