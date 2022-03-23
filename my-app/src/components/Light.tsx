import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[40, 10, 5]} intensity={0.2} castShadow />
      <directionalLight castShadow position={[10, 420, 100]} intensity={1.3} />
      <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
    </>
  );
};

export default Lights;
