import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next()
  }

  // If path already starts with /el or /en, don't modify it
  if (pathname.startsWith("/el") || pathname.startsWith("/en")) {
    return NextResponse.next()
  }

  // For all other paths, prefix with /el (default language)
  const url = request.nextUrl.clone()
  url.pathname = `/el${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Match all paths except static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
}
