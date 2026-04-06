"use client";
/**
 * ThreeBackground.tsx
 * Antigravity floating particles scene using Three.js + R3F
 * Responds to mouse movement for the "floating in space" effect
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Individual Floating Orb ────────────────────────────────────────────────
function FloatingOrb({
  position,
  color,
  speed,
  distort,
  radius,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  radius: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y = initialY + Math.sin(t * speed) * 0.4;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.z = t * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed * 2}
        roughness={0.1}
        metalness={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

// ─── Particle Field ──────────────────────────────────────────────────────────
function ParticleField({ count = 300 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#C6A43F"), // gold
      new THREE.Color("#2AA9B4"), // accent
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#1a3a8f"), // blue
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Mouse‑Reactive Camera Rig ───────────────────────────────────────────────
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 1.0 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Scene ───────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#C6A43F" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2AA9B4" />

      <ParticleField count={350} />

      <FloatingOrb
        position={[-4, 1, -3]}
        color="#0A2472"
        speed={0.4}
        distort={0.5}
        radius={0.9}
      />
      <FloatingOrb
        position={[4.5, -1.5, -4]}
        color="#C6A43F"
        speed={0.3}
        distort={0.6}
        radius={0.7}
      />
      <FloatingOrb
        position={[0, 2.5, -5]}
        color="#2AA9B4"
        speed={0.5}
        distort={0.4}
        radius={0.5}
      />
      <FloatingOrb
        position={[-2.5, -2, -2]}
        color="#1a3a8f"
        speed={0.35}
        distort={0.45}
        radius={0.6}
      />
      <FloatingOrb
        position={[3, 3, -6]}
        color="#C6A43F"
        speed={0.25}
        distort={0.3}
        radius={0.4}
      />

      <CameraRig />
    </>
  );
}

// ─── Exported Component ───────────────────────────────────────────────────────
export default function ThreeBackground() {
  return (
    <div className="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
