"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const COUNT = 120;

function pseudo(i: number, salt = 0) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const particlePositions = new Float32Array(COUNT * 3);
const particleSpeeds = new Float32Array(COUNT);

for (let i = 0; i < COUNT; i++) {
  const angle = (i / COUNT) * Math.PI * 2;
  const radius = 1.5 + pseudo(i, 1) * 2.5;
  particlePositions[i * 3] = Math.cos(angle) * radius;
  particlePositions[i * 3 + 1] = (pseudo(i, 2) - 0.5) * 3;
  particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
  particleSpeeds[i] = 0.002 + pseudo(i, 3) * 0.004;
}

function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.04;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += particleSpeeds[i];
      if (arr[i * 3 + 1] > 2) arr[i * 3 + 1] = -2;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#D4AF37"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function HeroParticlesInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <Particles />
    </Canvas>
  );
}
