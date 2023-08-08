import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Chair = () => {
const chair = useGLTF("../desktop_pc/rockingChair.gltf")
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
            object = {chair.scene}
            scale={0.05}
            position={[0, 0, -1.5]}
        />
    </mesh>
  )
}

const ChairCanvas = () => {
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
                <Chair />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default ChairCanvas