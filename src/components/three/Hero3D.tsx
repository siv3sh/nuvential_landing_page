import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Wireframe, Torus, Octahedron } from '@react-three/drei';
import type { Group } from 'three';

function Orb() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;

      const x = state.pointer.x * viewport.width * 0.12;
      const y = state.pointer.y * viewport.height * 0.12;
      groupRef.current.position.x += (x - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (y - groupRef.current.position.y) * 0.04;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x = Math.PI / 2.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
        {/* Inner glowing distorted core */}
        <Icosahedron args={[1.1, 6]}>
          <MeshDistortMaterial
            color="#4F7CFF"
            emissive="#4F7CFF"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.9}
            distort={0.25}
            speed={1.5}
            transparent
            opacity={0.92}
          />
        </Icosahedron>

        {/* Mid wireframe shell */}
        <Icosahedron args={[1.5, 2]}>
          <Wireframe
            fillOpacity={0}
            stroke="#22D3EE"
            strokeOpacity={0.25}
            thickness={0.4}
          />
        </Icosahedron>

        {/* Outer wireframe shell */}
        <Icosahedron args={[1.85, 1]}>
          <Wireframe
            fillOpacity={0}
            stroke="#4F7CFF"
            strokeOpacity={0.12}
            thickness={0.3}
          />
        </Icosahedron>

        {/* Torus ring */}
        <group ref={ringRef}>
          <Torus args={[2.3, 0.015, 8, 80]}>
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={0.6}
              transparent
              opacity={0.4}
            />
          </Torus>
        </group>

        {/* Orbiting shapes */}
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <Octahedron args={[0.13, 0]} position={[2.1, 0.6, 0.3]}>
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={0.7}
            />
          </Octahedron>
        </Float>
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.4}>
          <Octahedron args={[0.1, 0]} position={[-2.2, -0.4, 0.6]}>
            <meshStandardMaterial
              color="#A78BFA"
              emissive="#A78BFA"
              emissiveIntensity={0.7}
            />
          </Octahedron>
        </Float>
        <Float speed={1.8} rotationIntensity={1} floatIntensity={0.6}>
          <Icosahedron args={[0.08, 0]} position={[1.5, -1.2, -0.5]}>
            <meshStandardMaterial
              color="#4F7CFF"
              emissive="#4F7CFF"
              emissiveIntensity={0.6}
            />
          </Icosahedron>
        </Float>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 6]} intensity={1.2} color="#4F7CFF" />
      <pointLight position={[-6, -4, 3]} intensity={0.6} color="#22D3EE" />
      <pointLight position={[0, 0, 4]} intensity={0.4} color="#A78BFA" />
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
