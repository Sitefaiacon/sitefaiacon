// CACHE BUSTER V6 - FORCED REBUILD
import "./globals.css"
import { Outfit, Playfair_Display } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import { CookieConsent } from "./components/cookie-consent"
import { WebVitals } from "./components/web-vitals"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./contexts/language-context"

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://faiacon.gr"),
  title: {
    default: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας",
    template: "%s | ΦαιάCon Κέρκυρα",
  },
  description: "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`scroll-smooth ${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <WebVitals />
        <LanguageProvider>
          {children}
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
          <Toaster position="top-center" />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
