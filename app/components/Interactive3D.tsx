"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

type Kind = "glass" | "gold" | "navy";

type SlabProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number, number];
  kind: Kind;
  tilt: number;
  speed: number;
};

function Material({ kind }: { kind: Kind }) {
  if (kind === "glass") {
    return (
      <meshPhysicalMaterial
        color="#bcd9f5"
        transmission={1}
        thickness={1.2}
        ior={1.5}
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={1.6}
      />
    );
  }
  if (kind === "gold") {
    return (
      <meshPhysicalMaterial
        color="#d9a95b"
        metalness={1}
        roughness={0.2}
        clearcoat={0.6}
        envMapIntensity={1.5}
      />
    );
  }
  return (
    <meshPhysicalMaterial
      color="#0a1626"
      metalness={0.9}
      roughness={0.12}
      envMapIntensity={1.4}
    />
  );
}

function Slab({ position, rotation, size, kind, tilt, speed }: SlabProps) {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.damp(
      ref.current.rotation.x,
      rotation[0] - pointer.y * 0.5 * tilt,
      4,
      delta
    );
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      rotation[1] + pointer.x * 0.6 * tilt,
      4,
      delta
    );
  });

  return (
    <Float speed={speed} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={ref} position={position} rotation={rotation}>
        <RoundedBox args={size} radius={0.16} smoothness={6} bevelSegments={4}>
          <Material kind={kind} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.3,
      3,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -pointer.y * 0.2,
      3,
      delta
    );
  });

  return (
    <group ref={group}>
      <Slab kind="glass" size={[2.2, 2.2, 0.3]} position={[-0.2, 0, 0]} rotation={[0.35, -0.5, 0.15]} tilt={1} speed={1.2} />
      <Slab kind="gold" size={[1.7, 1.7, 0.28]} position={[1.9, 1.5, -1.2]} rotation={[-0.5, 0.5, 0.4]} tilt={-1.3} speed={1.6} />
      <Slab kind="glass" size={[1.9, 1.9, 0.3]} position={[1.7, -1.6, -0.3]} rotation={[0.3, -0.7, 0.1]} tilt={-0.8} speed={1.4} />
      <Slab kind="navy" size={[1.4, 1.4, 0.26]} position={[-2.3, 1.6, -1.5]} rotation={[0.2, 0.8, -0.3]} tilt={1.4} speed={1.8} />
      <Slab kind="gold" size={[1.1, 1.1, 0.22]} position={[-2.1, -1.7, -0.8]} rotation={[0.8, -0.3, 0.5]} tilt={-1} speed={2} />
    </group>
  );
}

export default function Interactive3D() {
  return (
    <div className="interactive-3d">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.15} />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[-4, 2, 3]} scale={[4, 6, 1]} color="#cfe8ff" />
          <Lightformer form="rect" intensity={3} position={[4, 1, 2]} scale={[2, 6, 1]} color="#ffe2ad" />
          <Lightformer form="rect" intensity={2} position={[0, 5, -2]} scale={[6, 1.5, 1]} color="#8fc4f2" />
          <Lightformer form="rect" intensity={1.5} position={[0, -4, 3]} scale={[8, 1, 1]} color="#ffffff" />
        </Environment>
        <Scene />
      </Canvas>
    </div>
  );
}