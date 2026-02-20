/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimise for Vercel deployment
  output: 'standalone',
  // Compress responses
  compress: true,
  // Production source maps off for smaller bundle
  productionBrowserSourceMaps: false,
  images: {
    // Add external domains here if you use remote images in future
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
