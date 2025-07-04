import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Βεβαιωθείτε ότι το middleware χειρίζεται σωστά τα paths του Vercel Analytics
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Vercel Analytics paths completely
  if (pathname.startsWith("/_vercel/insights")) {
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

// Update the matcher configuration to exclude Vercel Analytics paths
export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    // Skip all static files (images, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
