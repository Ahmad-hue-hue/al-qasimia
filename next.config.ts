import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // bundle-barrel-imports / tree-shake heavy icon & 3D packages
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
