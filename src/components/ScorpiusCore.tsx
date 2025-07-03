"use client";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { shaderMaterial } from "@react-three/drei";
import { useScrollSync } from "./useScrollSync";
import { useCinematicCamera } from "./useCinematicCamera";

// Noise GLSL for advanced shader effects
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.y;
  vec4 y = y_ *ns.x + ns.y;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}
float fbm(vec3 x) {
  float v = 0.0;
  float a = 0.5;
  vec3 shift = vec3(100);
  for (int i = 0; i < 5; ++i) {
    v += a * snoise(x);
    x = x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}
`;

// Bloom-petal shader for organic, flowing energy effects
const PetalMaterial = shaderMaterial(
  { uTime: 0, uPulse: 0, uMouse: [0, 0] },
  // vertex shader
  `
    varying vec3 vNormal;
    varying vec3 vPos;
    uniform float uTime;
    uniform float uPulse;
    uniform vec2 uMouse;
    ${noiseGLSL}
    void main() {
      vNormal = normal;
      vPos = position;

      // Organic petal-like displacement
      float n1 = fbm(normal * 3.0 + uTime * 0.2);
      float n2 = snoise(position * 2.0 + uTime * 0.5);

      // Mouse interaction creates blooming effect
      float mouseDist = length((position.xy/2.0) - uMouse);
      float bloom = smoothstep(0.8, 0.2, mouseDist) * 0.5;

      // Petal-like expansion based on scroll
      float petal = sin(atan(position.x, position.z) * 6.0 + uTime) * 0.1;
      float displacement = (n1 * 0.2 + n2 * 0.15) + bloom + petal * uPulse;

      vec3 newPos = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `,
  // fragment shader
  `
    varying vec3 vNormal;
    varying vec3 vPos;
    uniform float uTime;
    uniform float uPulse;
    uniform vec2 uMouse;
    ${noiseGLSL}
    void main() {
      // Fresnel for edge glow
      float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.,0.,1.)), 1.8);

      // Organic noise patterns
      float noise1 = fbm(vPos * 2.5 + uTime * 0.3);
      float noise2 = snoise(vPos * 4.0 + uTime * 0.6);

      // Mouse interaction creates localized blooms
      float mouseDist = length((vPos.xy/2.0) - uMouse);
      float mouseBloom = smoothstep(0.6, 0.0, mouseDist) * 0.8;

      // Petal color shifts - from cyan to white to pink
      vec3 baseColor = mix(vec3(0.0, 0.9, 1.0), vec3(0.8, 1.0, 1.0), noise1);
      vec3 petalColor = mix(baseColor, vec3(1.0, 0.8, 1.0), fresnel * 0.3);

      // Energy intensity with bloom effect
      float energy = fresnel * (0.6 + 0.4 * noise1) + mouseBloom + noise2 * 0.2;
      energy += uPulse * 0.3;

      gl_FragColor = vec4(petalColor, energy * 0.7 + 0.2);
    }
  `,
);
extend({ PetalMaterial });

// Inner wireframe with high-detail edges
function InnerWireframe() {
  const ref = useRef<THREE.LineSegments>(null!);
  const [geometry, setGeometry] = useState<THREE.EdgesGeometry>();

  useEffect(() => {
    const geo = new THREE.SphereGeometry(2.2, 64, 64);
    const edges = new THREE.EdgesGeometry(geo, 1);
    setGeometry(edges);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!geometry) return null;

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#00fff7" linewidth={1} toneMapped={false} />
    </lineSegments>
  );
}

// Petal bloom component with organic shader
function PetalBloom({
  scroll,
  mouse,
}: {
  scroll: number;
  mouse: [number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as any;
      material.uTime = state.clock.elapsedTime;
      material.uPulse = scroll;
      material.uMouse = mouse;
      meshRef.current.rotation.y += 0.004 + scroll * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={1.18}>
        <sphereGeometry args={[2.2, 128, 128]} />
        {/* @ts-ignore */}
        <petalMaterial transparent />
      </mesh>
      <InnerWireframe />
    </group>
  );
}

// Outer wireframe sphere
function WireframeSphere({ scroll }: { scroll: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005 + scroll * 0.04;
    meshRef.current.position.x = Math.sin(scroll * Math.PI * 2) * 0.2;
    meshRef.current.position.y = Math.cos(scroll * Math.PI * 2) * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial wireframe color="#00fff7" transparent opacity={0.8} />
    </mesh>
  );
}

// Scene component with cinematic camera
function Scene({ scroll, mouse }: { scroll: number; mouse: [number, number] }) {
  useCinematicCamera(scroll, 0.12);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 12]} intensity={2} color="#00fff7" />
      <pointLight position={[6, 6, 6]} intensity={1} color="#008b8b" />

      <PetalBloom scroll={scroll} mouse={mouse} />
      <WireframeSphere scroll={scroll} />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.8}
          intensity={2.2}
        />
      </EffectComposer>
    </>
  );
}

export default function ScorpiusCore() {
  const scroll = useScrollSync();
  const [mouse, setMouse] = useState<[number, number]>([0, 0]);

  // Pointer interaction for shader blooming
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse([
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ]);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 25 }}>
      <Scene scroll={scroll} mouse={mouse} />
    </Canvas>
  );
}
