"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
  const pathname = usePathname()

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (pathname && consent === "all") {
      pageview(pathname)
    }
  }, [pathname])

  function pageview(url: string) {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "pageview",
        page: url,
      })
    }
  }

  // Only load GTM if consent is given
  if (typeof window !== "undefined" && localStorage.getItem("cookieConsent") === "essential") {
    return null
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  )
}
