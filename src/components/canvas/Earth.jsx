import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import { RenderTarget } from 'three';


const Earth = () => {
  const earth = useGLTF('./earth/scene.gltf', true);
  // const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={1}
        position-y={0}
        rotation-y={0}
      />
      <ambientLight intensity={1} />
      <hemisphereLight intensity={1} />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        // near: 0.1,
        // far: 200,
        // position: [-4, 3, 6]
      }}
    // style={{'position':'absolute'}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas