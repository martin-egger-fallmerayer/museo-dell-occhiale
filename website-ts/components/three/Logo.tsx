import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei"

import styles from "/styles/components/three/Logo.module.scss";

// three.js
import Lights from "./Lights";
import Model from "./Model"





const Scene = () => {

    const { scene } = useGLTF("/logo.glb", true);

    return (
        <div className={styles.scene}>
            <Canvas
                shadows={true}
                className={styles.canvas}
                camera={{
                position: [-0.175, 0.1, 0.25],
                }}
            >
                <Lights />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model path="/data/logo.glb" position={[0, 0, 0]}/>
                </Suspense>
            </Canvas>
        </div>
  );
};

export default Scene;
