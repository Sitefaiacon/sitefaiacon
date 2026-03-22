import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Supported languages
const supportedLanguages = ["el", "en"]
const defaultLanguage = "el"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // This will match files like favicon.ico, etc.
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a language prefix
  const pathnameHasLanguage = supportedLanguages.some(
    (language) => pathname.startsWith(`/${language}/`) || pathname === `/${language}`,
  )

  // If the path already has a language prefix, don't modify it
  if (pathnameHasLanguage) {
    return NextResponse.next()
  }

  // For all other paths, prefix with the default language
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLanguage}${pathname === "/" ? "" : pathname}`

  // Use 307 temporary redirect to preserve the HTTP method
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/|api/|favicon.ico|images/).*)",
  ],
}

