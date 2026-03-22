import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["el", "en"]
const defaultLocale = "el"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to default locale if no locale is present and pathname is not static
  if (pathname === "/" || (!pathname.includes(".") && !pathname.startsWith("/api"))) {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
}
