/** @type {import('next').NextConfig} */
// CACHE BUSTER V6 - TIMESTAMP 1711234567890
const nextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "v0.blob.com"],
    unoptimized: false,
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
  },
}

module.exports = nextConfig
