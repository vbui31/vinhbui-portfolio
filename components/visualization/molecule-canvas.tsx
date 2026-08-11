"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function MoleculeNodes() {
  const groupRef = useRef<THREE.Group | null>(null);

  const points = useMemo(
    () =>
      Array.from({ length: 32 }, () => [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 6
      ]) as [number, number, number][],
    []
  );

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.2;
      groupRef.current.rotation.x = -mouse.y * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#FDD023" emissive="#FDD023" emissiveIntensity={0.45} />
        </mesh>
      ))}
      {points.slice(0, 18).map((point, index) => (
        <Line
          key={`line-${index}`}
          points={[point, points[(index * 3 + 5) % points.length]]}
          color="#FDD023"
          opacity={0.2}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export function MoleculeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} intensity={1} color="#FDD023" />
      <MoleculeNodes />
    </Canvas>
  );
}
