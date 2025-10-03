import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all https
      },
      {
        protocol: "http",
        hostname: "localhost", // allow http://localhost
        port: "3000", // optional, but recommended
      },
    ],
  },
};

export default nextConfig;
