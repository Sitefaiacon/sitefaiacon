/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cleanDistDir: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
  },
}

module.exports = nextConfig
