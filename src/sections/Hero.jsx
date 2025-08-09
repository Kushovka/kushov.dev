import React from "react";
import arrowDown from "/images/ArrowDown.svg";
import shape from "/images/Shape.svg";
import GradientSphere from "../components/GradientSphere";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroExperience from "../components/models/HeroModel/HeroExperience";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.from(".title1", {
      opacity: 0,
      x: -50,
      duration: 0.3,
      ease: "power2.InOut",
    });
    gsap.from(".title2", {
      opacity: 0,
      x: 50,
      duration: 0.3,
      ease: "power2.InOut",
    });
  });
  return (
    <section id="home" className=" h-dvh relative text-white-50 px-5">
      <GradientSphere
        sphere1Class={"gradient-sphere sphere-1"}
        sphere2Class={"gradient-sphere sphere-2"}
      />
      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="lg:my-25 md:mt-40 mt-20 title1">
            <p className="font-medium md:text-3xl text-base">
              👋 Hey, I’m Here
            </p>
            <h1 className="font-bold lg:text-9xl md:text-7xl sm:text-5xl text-3xl">KIRILL KUSHOV</h1>
            <h1 className="font-bold lg:text-9xl md:text-7xl sm:text-5xl text-3xl">FRONTEND</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 right-0 ">
            <div className="flex justify-between items-end">
              {/* arrow */}
              <a href="#projects">
                <div className="flex flex-col items-center md:gap-5 gap-3 bg-transparent cursor-pointer hover:bg-[#8A2BE2]/30 transition-colors duration-500 rounded-full px-4 py-4">
                  <p className="md:text-base text-xs">Explore</p>
                  <img
                    className="md:size-7 size-5 animate-bounce"
                    src={arrowDown}
                    alt="arrow"
                  />
                </div>
              </a>
              {/* shape + title */}
              <div className="flex flex-col items-end title2">
                <img src={shape} className="md:size-24 sm:size-20 size-14" alt="shape" />
                <h1 className="font-bold lg:text-9xl md:text-7xl sm:text-5xl text-3xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3d */}
      <div className="w-full h-full absolute inset-0 ">
        <HeroExperience />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-20" />
    </section>
  );
};

export default Hero;
