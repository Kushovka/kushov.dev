import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { BoyHero } from "./BoyHero";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#8a2be2"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"} />

      <Sparkles
        count={200}
        size={2}
        speed={0.5}
        color={"pink"}
        scale={[10, 10, 2]}
      />
      <group>
        <BoyHero scale={9} position={[0, -15.5, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
