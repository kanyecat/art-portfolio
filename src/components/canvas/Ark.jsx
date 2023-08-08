import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Ark = () => {
const ark = useGLTF("../desktop_pc/wavy.gltf")
  return (
    <mesh>
        <hemisphereLight
        intensity={0.15}
        groundColor = "#4f84d1" />
        <pointLight intensity={0.2} />
        {/* <spotLight
            position={[30, 30, 15]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
        /> */}
        <primitive
            object = {ark.scene}
            scale={0.5}
            position={[0, 0, -1.5]}
        />
    </mesh>
  )
}

const ArkCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position: [20, 3, 5], fov: 25 }}
            gl={ {preserveDrawingBuffer: true} }
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI /2}
                minPolarAngle={Math.PI /2}
                autoRotate={true}
                />
                <Ark />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default ArkCanvas