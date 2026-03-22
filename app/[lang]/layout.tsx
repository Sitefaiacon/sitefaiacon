// CACHE BUSTER V6 - FORCED REBUILD
import type React from "react"
import { LanguageProvider } from "../contexts/language-context"

export async function generateStaticParams() {
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
