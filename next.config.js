/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/', destination: '/el', permanent: true },
      { source: '/appointment', destination: '/el/appointment', permanent: true },
      { source: '/business-card', destination: '/el', permanent: true },
      { source: '/house-construction', destination: '/el/house-construction', permanent: true },
      { source: '/house-renovation', destination: '/el/house-renovation', permanent: true },
      { source: '/listed-houses', destination: '/el/listed-houses', permanent: true },
      { source: '/pool-construction', destination: '/el/pool-construction', permanent: true },
      { source: '/projects', destination: '/el/our-projects', permanent: true },
    ]
  },
  async headers() {
    const securityHeaders = [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://translate.google.com https://translate.googleapis.com; style-src 'self' 'unsafe-inline' https://translate.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://translate.googleapis.com https://vitals.vercel-insights.com; frame-src https://www.googletagmanager.com; upgrade-insecure-requests",
      },
    ]

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
