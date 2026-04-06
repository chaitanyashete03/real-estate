import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
        pathname: "/**",
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
