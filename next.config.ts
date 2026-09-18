import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media-assets.swiggy.com",
      },
      {
        protocol: "https",
        hostname: "www.zomato.com",
      },
    ],
  },
};

export default nextConfig;
