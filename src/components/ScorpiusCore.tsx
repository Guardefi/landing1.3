"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { useScrollSync } from "./useScrollSync";
import { useCinematicCamera } from "./useCinematicCamera";
import EnhancedSphere from "./EnhancedSphere";

function Scene({ scroll, mouse }: { scroll: number; mouse: [number, number] }) {
  // Use the cinematic camera system with rotation and scene tilt
  useCinematicCamera(scroll, 0.12);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00fff7" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#008b8b" />
      <EnhancedSphere scroll={scroll} mouse={mouse} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          intensity={3}
        />
        <DepthOfField
          focusDistance={0.015 + 0.02 * scroll}
          focalLength={0.05}
          bokehScale={3 + 2 * scroll}
          height={700}
        />
      </EffectComposer>
    </>
  );
}

export default function ScorpiusCore() {
  const scroll = useScrollSync();
  const [mouse, setMouse] = useState<[number, number]>([0, 0]);

  // Mouse interaction for energy shader
  useEffect(() => {
    function onPointerMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse([x, y]);
    }
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 2, 12], fov: 40 }}>
      <Scene scroll={scroll} mouse={mouse} />
    </Canvas>
  );
}
