import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // Skip files with extensions (images, etc)
  ) {
    return NextResponse.next()
  }

  // If path already starts with /el or /en, don't modify it
  if (pathname.match(/^\/(en|el)($|\/)/)) {
    return NextResponse.next()
  }

  // For all other paths, prefix with /el (default language)
  const url = request.nextUrl.clone()
  url.pathname = `/el${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Only match paths that don't have file extensions and aren't internal
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
