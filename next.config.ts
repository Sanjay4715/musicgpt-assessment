import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lalals.s3.amazonaws.com",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
