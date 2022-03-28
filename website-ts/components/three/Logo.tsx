import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei"

import styles from "/styles/components/three/Logo.module.scss";

// three.js
import Lights from "./Lights";
import Model from "./Model"





const Scene = () => {

    

    return (
        <Canvas
            shadows={true}
            className={styles.canvas}
            camera={{
            position: [0, 0.5, 0.75],
            }}
        >
            <Lights />
            <OrbitControls />
            <Suspense fallback={null}>
                <Model path="/data/logo.glb" position={[0, .35, .5]}/>
            </Suspense>
        </Canvas>
    )
};

export default Scene;
