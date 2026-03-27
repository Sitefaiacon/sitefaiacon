import "./globals.css"
import { Outfit, Playfair_Display, Oswald } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import { CookieConsent } from "./components/cookie-consent"
import { WebVitals } from "./components/web-vitals"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { LocalBusinessSchema, WebsiteSchema, RenovationCalculatorSchema, ServiceSchema, FAQSchema, ReviewSchema, OfferCatalogSchema, OrganizationSchema } from "./components/structured-data"

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

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://faiacon.gr"),
  title: {
    default: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Ανακαίνιση & Κατασκευή Σπιτιού",
    template: "%s | ΦαιάCon Κέρκυρα",
  },
  description: "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Υπολογιστής κόστους ανακαίνισης, εκτίμηση κόστους κατασκευής, ανακαίνιση σπιτιού, κατασκευή πισίνας. Δωρεάν εκτίμηση - 35+ χρόνια εμπειρίας.",
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
  authors: [{ name: "ΦαιάCon", url: "https://faiacon.gr" }],
  creator: "ΦαιάCon",
  publisher: "ΦαιάCon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://faiacon.gr",
    languages: {
      "el-GR": "https://faiacon.gr/el",
      "en-US": "https://faiacon.gr/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: "en_US",
    url: "https://faiacon.gr",
    siteName: "ΦαιάCon - Τεχνική Κατασκευαστική",
    title: "ΦαιάCon - Υπολογιστής Κόστους Ανακαίνισης | Κατασκευές Κέρκυρα",
    description: "Υπολογίστε δωρεάν το κόστος ανακαίνισης του σπιτιού σας. Εκτίμηση κόστους κατασκευής, ανακαίνιση μπάνιου, κουζίνας, αλλαγή κουφωμάτων. 35+ χρόνια εμπειρίας στην Κέρκυρα.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
        width: 1200,
        height: 630,
        alt: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ΦαιάCon - Υπολογιστής Κόστους Ανακαίνισης",
    description: "Δωρεάν εκτίμηση κόστους ανακαίνισης σπιτιού. Κατασκευές & Ανακαινίσεις στην Κέρκυρα.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "construction",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`scroll-smooth ${outfit.variable} ${playfair.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="icon"
          href="/logo-faiacon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/logo-faiacon.png"
        />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <RenovationCalculatorSchema />
        <ServiceSchema />
        <FAQSchema />
        <ReviewSchema />
        <OfferCatalogSchema />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
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
