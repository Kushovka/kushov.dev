import { Canvas } from "@react-three/fiber";
import React from "react";
import { Boy } from "./Boy";
import { OrbitControls } from "@react-three/drei";

const ContactExperience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 1, 2],
      }}
    >
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={4} color={"#1c34ff"} />
      <Boy scale={3.4} position={[0, -5.1, 0]} />
    </Canvas>
  );
};

export default ContactExperience;
