export function PreloadResources() {
  return (
    <>
      {/* Preload κρίσιμων εικόνων */}
      <link rel="preload" href="/images/hero-background.jpg" as="image" type="image/jpeg" />

      {/* Preconnect για εξωτερικά domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}
