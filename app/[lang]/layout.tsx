import type React from "react"
import { LanguageProvider } from "../contexts/language-context"

export function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <LanguageProvider initialLang={lang}>
      {children}
    </LanguageProvider>
  )
}
