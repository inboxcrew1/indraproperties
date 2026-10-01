/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
