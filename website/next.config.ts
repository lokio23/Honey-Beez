import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Honey-Beez",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
