import type React from "react"
import { LanguageProvider } from "../contexts/language-context"

export function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <LanguageProvider initialLang={lang}>
      {children}
    </LanguageProvider>
  )
}
