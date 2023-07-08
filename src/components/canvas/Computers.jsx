import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./amongus/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />

      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale = {isMobile ? 0.007 : 0.007}
        position = {isMobile ? [0,-3,-2.2]:[0, -3.25, -1.5]}
        rotation = {[-1, 1.5, 1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
const [ isMobile, setIsMobile] = useState(false);

useEffect(() => {

  // Add listener for changes to the screen size
  const mediaQuery = window.matchMedia('(max-width: 500px)');

  // set initial value of isMobile state var
  setIsMobile(mediaQuery.matches);

  // define a callback function to handle changes to the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }

  // add callback func as a listener for changes to the media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  // remove listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }
}, [])

  return(
    <Canvas
      frameloop='demand'
      shadows
      camera = {{position: [20,30,20], fov: 25}}
      gl = {{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom = {false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          
        />
        <Computers isMobile={isMobile} />

      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas;