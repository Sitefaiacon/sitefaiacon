import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const defaultLocale = "el"
const locales = ["en", "el"]

// Add a matcher for all routes except for the ones that don't need locale
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|_vercel/insights|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}

export function middleware(request: NextRequest) {
  // Check if the path starts with Vercel Analytics paths and skip processing
  if (request.nextUrl.pathname.startsWith("/_vercel/insights")) {
    return NextResponse.next()
  }

  // Skip static files and API routes
  if (
    request.nextUrl.pathname.includes("/api/") ||
    request.nextUrl.pathname.includes("/_next/") ||
    request.nextUrl.pathname.includes("/favicon.ico") ||
    request.nextUrl.pathname.includes("/robots.txt") ||
    request.nextUrl.pathname.includes("/sitemap.xml")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname has a locale prefix
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
