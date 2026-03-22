import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // If path already has language prefix, continue
  if (pathname.startsWith("/el") || pathname.startsWith("/en")) {
    return NextResponse.next()
  }

  // Redirect root to /el
  const url = request.nextUrl.clone()
  url.pathname = `/el${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
