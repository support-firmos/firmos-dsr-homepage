/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/(.*)', // Apply these headers to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Remove or set as needed based on your requirements
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' https://hebbkx1anhila5yf.public.blob.vercel-storage.com;
              frame-src 'self' https://www.youtube.com https://player.vimeo.com; // Allows YouTube and Vimeo if needed
            `
              .replace(/\n/g, '')
              .trim(), // Removing newlines for compactness
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com', // Your image domain
        pathname: '/**', // Adjust the path if necessary
      },
    ],
  },
};

module.exports = nextConfig;
