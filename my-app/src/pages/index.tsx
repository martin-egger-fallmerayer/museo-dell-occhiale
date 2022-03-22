import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from 'drei'
import Lights from "@/components/Light";
import Model from "@/components/Model";


const App = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 100] }}>
        <Lights />
        <Model />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
