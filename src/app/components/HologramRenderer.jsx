"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HologramModel = ({ modelPath, quantumLevel }) => {
  const gltf = useGLTF(modelPath);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={meshRef}
      scale={quantumLevel * 0.5}
      position={[0, 0, 0]}
    >
      <meshPhysicalMaterial
        color={new THREE.Color(0.2, 1, 0.8)}
        emissive={new THREE.Color(0.1, 0.5, 0.4)}
        roughness={0.3}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </primitive>
  );
};

const HologramRenderer = ({ modelPath, quantumLevel, className }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ff" />
        <Suspense fallback={null}>
          <HologramModel modelPath={modelPath} quantumLevel={quantumLevel} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
      </Canvas>
    </div>
  );
};

export default HologramRenderer;