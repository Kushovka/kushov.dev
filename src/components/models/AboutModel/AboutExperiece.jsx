import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Cat } from "./Cat";
import { BMO } from "./Bmo";

const AboutExperiece = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <BMO scale={0.5} position={[0, -2.5, -0.5]} rotation={[0, 0.5, 0]} />
    </Canvas>
  );
};

export default AboutExperiece;
