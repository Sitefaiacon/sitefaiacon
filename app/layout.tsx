import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import { CookieConsent } from "./components/cookie-consent"
import Script from "next/script"
import { WebVitals } from "./components/web-vitals"
import type { Metadata } from "next"
import GoogleAnalytics from "./components/google-analytics"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./contexts/language-context"

// Απλοποιημένη ρύθμιση γραμματοσειράς
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://faiacon.gr"),
  title: {
    default: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας | Κατασκευές & Ανακαινίσεις",
    template: "%s | ΦαιάCon Κέρκυρα",
  },
  description:
    "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Εξειδίκευση σε κατασκευές, ανακαινίσεις, διατηρητέα κτίρια και πισίνες. Άριστη ποιότητα & εμπειρία από το 1990.",
  keywords: [
    "κατασκευαστική εταιρεία κέρκυρα",
    "ανακαινίσεις κέρκυρα",
    "κατασκευή σπιτιού κέρκυρα",
    "ανακαίνιση σπιτιού κέρκυρα",
    "διατηρητέα κτίρια κέρκυρα",
    "κατασκευή πισίνας κέρκυρα",
  ],
  authors: [{ name: "ΦαιάCon" }],
  creator: "ΦαιάCon",
  publisher: "ΦαιάCon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας",
    description:
      "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Εξειδίκευση σε κατασκευές, ανακαινίσεις, διατηρητέα κτίρια και πισίνες.",
    url: "https://faiacon.gr",
    siteName: "ΦαιάCon",
    locale: "el_GR",
    type: "website",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "construction",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  return (
    <html lang="el" className={`scroll-smooth ${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <meta name="google" content="notranslate" />
        <Suspense fallback={null}>{gaId && <GoogleAnalytics GA_MEASUREMENT_ID={gaId} />}</Suspense>
      </head>
      <body className="min-h-screen bg-background antialiased">
        <WebVitals />
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <CookieConsent />
          <Toaster position="top-center" />
          <Analytics />
        </LanguageProvider>

        {/* Μετακίνηση των scripts στο τέλος του body για καλύτερο TBT */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'G-Y7K0K22ZD9');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-Y7K0K22ZD9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  )
}
