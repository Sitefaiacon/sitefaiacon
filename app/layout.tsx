import "./globals.css"
import { Outfit, Playfair_Display } from "next/font/google"
import type React from "react"
import Script from "next/script"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "ΦαιάCon - Τεχνική Κατασκευαστική Κέρκυρας",
  description: "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  return (
    <html lang="el" className={`scroll-smooth ${outfit.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"
          type="image/jpeg"
        />
        <link
          rel="shortcut icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"
          type="image/jpeg"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-Y7K0K22ZD9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          <Suspense>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
