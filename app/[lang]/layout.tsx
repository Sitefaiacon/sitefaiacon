import type React from "react"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"
import { CookieConsent } from "../components/cookie-consent"
import { WebVitals } from "../components/web-vitals"
import GoogleAnalytics from "../components/google-analytics"
import { LanguageProvider } from "../contexts/language-context"
import "../globals.css"

// Απλοποιημένη ρύθμιση γραμματοσειράς
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export async function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export const metadata: Metadata = {
  // ... (υπόλοιπα metadata όπως πριν)
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  return (
    <html lang={lang} className={`scroll-smooth ${inter.className}`}>
      <body className="min-h-screen bg-background antialiased">
        <LanguageProvider initialLang={lang}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
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
