import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@phosphor-icons/react",
      "@react-three/fiber",
      "@react-three/drei",
      "three",
    ],
  },
};

export default nextConfig;
