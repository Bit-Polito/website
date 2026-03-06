/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // avoid ESLint errors causing build failures
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so',
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;