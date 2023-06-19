import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ec6b1e" flatShading attach="material" />
        <Decal map={decal} position={[0,0,1.2]} rotation={[2*Math.PI, 0, 6.25]} scale={1} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas frameloop="always" gl={{preserveDrawingBuffer: true}} dpr={[1, 2]}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas