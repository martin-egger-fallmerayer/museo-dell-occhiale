import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={.5} />
      {/* <directionalLight position={[40, 10, 5]} intensity={0.2} castShadow/> */}
      {/* <directionalLight
        castShadow
        position={[10, 420, 100]}
        intensity={0.5}
      /> */}
      <spotLight intensity={.3} position={[10, 15, 10]} angle={0.3} castShadow/>
    </>
  );
};

export default Lights;
