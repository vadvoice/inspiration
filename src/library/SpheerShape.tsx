import React from 'react';
import { MeshProps } from '@react-three/fiber';

export const SpheerShape: React.FC<MeshProps> = (props) => {
  return (
    <mesh
      {...props}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color={'hotpink'} />
    </mesh>
  )
}