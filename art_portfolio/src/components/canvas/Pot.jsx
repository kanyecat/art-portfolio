import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Pot = () => {
const pot = useGLTF("../desktop_pc/krtr_pot.gltf")
  return (
    <mesh>
        <hemisphereLight
        intensity={1.5}
        groundColor = "black" />
        <pointLight intensity={0.4} />
        <spotLight
            position={[30, 30, 15]}
            angle={0.12}
            penumbra={1}
            intensity={3}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object = {pot.scene}
            scale={0.08}
            position={[0, 0, -1.5]}
        />
    </mesh>
  )
}

const PotCanvas = () => {
    return (
        <Canvas
            frameLoop='demand'
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
                <Pot />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default PotCanvas