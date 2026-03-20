// Cache buster v4 - forced rebuild
import type React from "react"
import type { Metadata } from "next"
import { LanguageProvider } from "../contexts/language-context"

export async function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export const metadata: Metadata = {
  title: {
    default: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Κατασκευές & Ανακαινίσεις",
    template: "%s | ΦαιάCon Κέρκυρα",
  },
  description:
    "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Εξειδίκευση σε κατασκευές, ανακαινίσεις, διατηρητέα κτίρια και πισίνες.",
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
