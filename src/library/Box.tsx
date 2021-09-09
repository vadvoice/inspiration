import React, { useState, useRef } from 'react';
import { MeshProps, useFrame, MeshBasicMaterialProps, useLoader } from '@react-three/fiber';

export const Box: React.FC<MeshProps> = (props) => {
  const mesh = useRef<MeshBasicMaterialProps>(null!)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      userData={{ hello: 'world' }}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}