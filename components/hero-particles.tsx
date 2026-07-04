"use client";

import dynamic from "next/dynamic";

const HeroParticlesInner = dynamic(
  () => import("./hero-particles-inner").then((m) => m.HeroParticlesInner),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
    ),
  },
);

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <HeroParticlesInner />
    </div>
  );
}
