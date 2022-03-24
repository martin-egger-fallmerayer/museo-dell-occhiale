import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"

import styles from "/styles/components/three/Scene.module.scss";

// three.js
import Lights from "./Lights";

type Props = {
  Model: any;
};



const Scene = ({ Model }: Props) => {

    return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-0.25, .2, .3],
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
