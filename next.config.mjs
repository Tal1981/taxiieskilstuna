/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'monitor.fraudblocker.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

