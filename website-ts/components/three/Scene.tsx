import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"

import styles from "/styles/components/three/Scene.module.scss";

// three.js
import Lights from "./Lights";

type Props = {
  Model: any;
  camera: any
};



const Scene = ({ Model, camera }: Props) => {

    return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: camera,
        }}
      >
        <Lights />
        <OrbitControls />
        <Suspense fallback={null}>
            {Model}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
