import type React from "react"
import { LanguageProvider } from "../contexts/language-context"
import { notFound } from "next/navigation"

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

  if (lang !== "el" && lang !== "en") {
    notFound()
  }

  return (
    <LanguageProvider initialLang={lang}>
      {children}
    </LanguageProvider>
  )
}
