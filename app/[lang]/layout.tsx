import "../globals.css"
import { Noto_Sans, Noto_Serif, Oswald } from "next/font/google"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"
import { LanguageProvider } from "../contexts/language-context"
import { CookieConsent } from "../components/cookie-consent"
import GoogleAnalytics from "../components/google-analytics"
import { LocalBusinessSchema, WebsiteSchema } from "../components/structured-data"
import { WebVitals } from "../components/web-vitals"
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
  viewportFit: "cover",
  themeColor: "#1e3771",
}

export function generateStaticParams() {
  return [{ lang: "el" }, { lang: "en" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isEnglish = lang === "en"
  const title = isEnglish
    ? "Faiacon | Construction & Renovations in Corfu"
    : "ΦαιάCon | Κατασκευές & Ανακαινίσεις στην Κέρκυρα"
  const description = isEnglish
    ? "Construction and renovation services for homes, villas, hotels and pools across Corfu, with local expertise since 1990."
    : "Κατασκευές και ανακαινίσεις στην Κέρκυρα για κατοικίες, βίλες, ξενοδοχεία και πισίνες, με τοπική εμπειρία από το 1990."

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: isEnglish ? "%s | Faiacon" : "%s | ΦαιάCon",
    },
    description,
    authors: [{ name: "Faiacon", url: SITE_URL }],
    creator: "Faiacon",
    publisher: "Faiacon",
    applicationName: "ΦαιάCon",
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "ΦαιάCon",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/logo-faiacon.png", type: "image/png", sizes: "192x192" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: isEnglish ? "en_US" : "el_GR",
      alternateLocale: isEnglish ? "el_GR" : "en_US",
      url: `${SITE_URL}/${lang}`,
      siteName: "Faiacon",
      title,
      description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
      : {}),
    category: "construction",
  }
}

export default async function RootLanguageLayout({
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
    <html
      lang={lang}
      className={`scroll-smooth ${notoSans.variable} ${notoSerif.variable} ${oswald.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <LocalBusinessSchema lang={lang} />
        <WebsiteSchema lang={lang} />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <LanguageProvider initialLang={lang}>
          {children}
          <GoogleAnalytics GA_MEASUREMENT_ID="G-Y7K0K222D9" />
          <WebVitals />
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
