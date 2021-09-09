import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei'
import { Box } from './library';
import { PoimandresModel } from './models';

// styles
import './App.sass'

const Light = () => {
  return <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
  </>
}

const SceneHelpers = () => {
  return <>
    <gridHelper />
    <OrbitControls />
  </>
}

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{
          position: [5, 5, 5],
        }}
      >
        <Suspense fallback={null}>
          <SceneHelpers />
          <Light />
          <Box position={[-1, 1, 0]} />
          <Box position={[1, 1, 0]} />
          <Environment files={['zeus_ft.jpg', 'zeus_bk.jpg', 'zeus_up.jpg', 'zeus_dn.jpg', 'zeus_rt.jpg', 'zeus_lf.jpg']} path="/zeus/" background />
          <SceneHelpers />
          <PoimandresModel />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
