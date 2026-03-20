// Cache buster v4 - new middleware
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // If path already starts with /el or /en, continue
  if (pathname.match(/^\/(en|el)($|\/)/)) {
    return NextResponse.next()
  }

  // Redirect root to /el
  const url = request.nextUrl.clone()
  url.pathname = `/el${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
