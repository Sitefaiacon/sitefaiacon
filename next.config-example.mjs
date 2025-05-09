/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential settings only
  reactStrictMode: true,
  
  // Add the ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Add the TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Update the images configuration
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  
  // Remove experimental features unless absolutely needed
  experimental: {
    // Only keep what you're actively using
  }
}

export default nextConfig
