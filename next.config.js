// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply these headers to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevent clickjacking by allowing only same-origin content to be framed
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME type sniffing
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Enable XSS filtering
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
