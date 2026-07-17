import "./globals.css"
// Bilingual type system with native Greek and Latin glyphs
import { Noto_Sans, Noto_Serif, Oswald } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import { CookieConsent } from "./components/cookie-consent"
import { WebVitals } from "./components/web-vitals"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { LocalBusinessSchema, WebsiteSchema, RenovationCalculatorSchema, ServiceSchema } from "./components/structured-data"
import GoogleAnalytics from "./components/google-analytics"
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/seo"

const notoSans = Noto_Sans({
  subsets: ["greek", "latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const notoSerif = Noto_Serif({
  subsets: ["greek", "latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // No maximumScale/userScalable restriction: allow pinch-zoom for accessibility (WCAG 1.4.4)
  themeColor: "#0f172a",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ΦαιάCon | Κατασκευές & Ανακαινίσεις στην Κέρκυρα",
    template: "%s | ΦαιάCon",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/faiacon-logo-round.jpg", type: "image/jpeg", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/faiacon-logo-round.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      { rel: "mask-icon", url: "/images/faiacon-logo-round.jpg" },
    ],
  },
  manifest: "/manifest.json",
  description: "Κατασκευές και ανακαινίσεις στην Κέρκυρα για κατοικίες, βίλες και ξενοδοχεία. Τοπική εμπειρία από το 1990 και δωρεάν αρχική εκτίμηση έργου.",
  keywords: [
    "υπολογισμός κόστους ανακαίνισης",
    "εκτίμηση κόστους ανακαίνισης",
    "κόστος ανακαίνισης σπιτιού",
    "ανακαίνιση σπιτιού Κέρκυρα",
    "κατασκευή σπιτιού Κέρκυρα",
    "τεχνική εταιρεία Κέρκυρα",
    "κατασκευαστική εταιρεία Κέρκυρα",
    "κόστος κατασκευής σπιτιού",
    "ανακαίνιση μπάνιου κόστος",
    "ανακαίνιση κουζίνας κόστος",
    "κατασκευή πισίνας Κέρκυρα",
    "διατηρητέα κτίρια Κέρκυρα",
    "θερμοπρόσοψη κόστος",
    "αλλαγή κουφωμάτων κόστος",
    "FaiaCon",
    "ΦαιάCon"
  ],
  authors: [{ name: "ΦαιάCon", url: SITE_URL }],
  creator: "ΦαιάCon",
  publisher: "ΦαιάCon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: "en_US",
    url: `${SITE_URL}/el`,
    siteName: "ΦαιάCon",
    title: "ΦαιάCon | Κατασκευές & Ανακαινίσεις στην Κέρκυρα",
    description: "Κατασκευές και ανακαινίσεις στην Κέρκυρα για κατοικίες, βίλες, ξενοδοχεία και πισίνες.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "ΦαιάCon | Κατασκευές & Ανακαινίσεις στην Κέρκυρα",
    description: "Τοπική τεχνική εμπειρία στην Κέρκυρα από το 1990.",
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  category: "construction",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`scroll-smooth ${notoSans.variable} ${notoSerif.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/faiacon-logo-round.jpg" type="image/jpeg" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/faiacon-logo-round.jpg" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <RenovationCalculatorSchema />
        <ServiceSchema />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-Y7K0K222D9" />
        <WebVitals />
        {children}
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
