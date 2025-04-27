// Font optimization utilities
export const fontDisplay = `
@font-face {
  font-family: 'CustomFont';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* This ensures text remains visible during font loading */
  src: local('CustomFont'), url('/fonts/custom-font.woff2') format('woff2');
}
`

// Function to preload critical fonts
export function preloadFonts() {
  if (typeof window === "undefined") return

  const fontUrls = ["/fonts/inter-var-latin.woff2"]

  fontUrls.forEach((url) => {
    const link = document.createElement("link")
    link.href = url
    link.rel = "preload"
    link.as = "font"
    link.type = "font/woff2"
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  })
}
