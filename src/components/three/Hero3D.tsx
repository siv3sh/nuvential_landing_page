import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Wireframe } from '@react-three/drei';
import type { Group } from 'three';

function Orb() {
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x += delta * 0.05;

    const x = state.pointer.x * viewport.width * 0.15;
    const y = state.pointer.y * viewport.height * 0.15;
    groupRef.current.position.x += (x - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (y - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Inner glowing core */}
        <Icosahedron args={[1.2, 4]}>
          <MeshDistortMaterial
            color="#4F7CFF"
            emissive="#4F7CFF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.9}
          />
        </Icosahedron>

        {/* Outer wireframe shell */}
        <Icosahedron args={[1.6, 1]}>
          <Wireframe
            fillOpacity={0}
            stroke="#22D3EE"
            strokeOpacity={0.3}
            thickness={0.5}
          />
        </Icosahedron>

        {/* Small orbiting shapes */}
        <Icosahedron args={[0.15, 0]} position={[2, 0.5, 0]}>
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
        <Icosahedron args={[0.1, 0]} position={[-2, -0.3, 0.5]}>
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#A78BFA"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#4F7CFF" />
      <pointLight position={[-5, -5, 3]} intensity={0.5} color="#22D3EE" />
      <Orb />
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
