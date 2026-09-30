import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Wireframe } from '@react-three/drei';
import type { Group } from 'three';

function Orb({ compact }: { compact: boolean }) {
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
        <Icosahedron args={[1.2, compact ? 3 : 4]}>
          <MeshDistortMaterial
            color="#6366F1"
            emissive="#4F46E5"
            emissiveIntensity={0.25}
            roughness={0.25}
            metalness={0.35}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.95}
          />
        </Icosahedron>

        {/* Outer wireframe shell */}
        <Icosahedron args={[1.6, 1]}>
          <Wireframe
            fillOpacity={0}
            stroke="#6366F1"
            strokeOpacity={0.55}
            thickness={0.5}
          />
        </Icosahedron>

        {/* Small orbiting shapes */}
        <Icosahedron args={[0.15, 0]} position={[2, 0.5, 0]}>
          <meshStandardMaterial
            color="#14B8A6"
            emissive="#0D9488"
            emissiveIntensity={0.4}
          />
        </Icosahedron>
        <Icosahedron args={[0.1, 0]} position={[-2, -0.3, 0.5]}>
          <meshStandardMaterial
            color="#F2705B"
            emissive="#F2705B"
            emissiveIntensity={0.4}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

function Scene({ compact }: { compact: boolean }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} color="#FFFFFF" />
      <pointLight position={[5, 5, 5]} intensity={1} color="#A5B4FC" />
      <pointLight position={[-5, -5, 3]} intensity={0.8} color="#5EEAD4" />
      <Orb compact={compact} />
    </>
  );
}

interface Hero3DProps {
  compact?: boolean;
  active?: boolean;
}

export function Hero3D({ compact = false, active = true }: Hero3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, compact ? 5.2 : 5], fov: 45 }}
      dpr={compact ? [1, 1.5] : [1, 2]}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: compact ? 'low-power' : 'default' }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Scene compact={compact} />
      </Suspense>
    </Canvas>
  );
}
