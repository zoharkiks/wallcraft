/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gradient.page',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
