
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const PoimandresModel = () => {
  const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} position={[ 0, 2, 0 ]} />
    </>
  );
};