import React from "react";
import Title from "../components/Title";
import TechCarousel from "../components/TechCarousel";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.from(".title_2", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title_2",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.from(".tech", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tech",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  });
  return (
    <div className="w-full h-full">
      <div>
        {/* title */}
        <div className="container mx-auto px-5 lg:px-10 title_2">
          <Title
            title={"TECH STACK"}
            text={"The stack that powers my development workflow"}
            number={"02"}
          />
        </div>
        {/*  */}
        <div className="md:mt-20 mt-10 relative tech">
          <TechCarousel />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
