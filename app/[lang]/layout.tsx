import type React from "react"
import { Outfit, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"
import { CookieConsent } from "../components/cookie-consent"
import { WebVitals } from "../components/web-vitals"
import GoogleAnalytics from "../components/google-analytics"
import { LanguageProvider } from "@/contexts/language-context"
import "../globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export async function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export const metadata: Metadata = {
  // ... (υπόλοιπα metadata όπως πριν)
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await props.params
  const { children } = props
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  return (
    <html lang={lang} className={`scroll-smooth ${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background antialiased font-sans">
        <LanguageProvider initialLang={lang}>
          {children}
          <WebVitals />
          <CookieConsent />
          <Toaster position="top-center" />
          <Analytics />
          {gaId && <GoogleAnalytics GA_MEASUREMENT_ID={gaId} />}
        </LanguageProvider>
      </body>
    </html>
  )
}
