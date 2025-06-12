import React from "react";
import GradientSphere from "../components/GradientSphere";
import Title from "../components/Title";
import ProjectsCarousel from "../components/ProjectsCarousel";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".title_3", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title_3",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.from(".proj", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".proj",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  });
  return (
    <section id="projects" className="w-full h-full flex-center relative">
      <GradientSphere
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className="w-full md:my-40 my-20 relative z-10">
        {/* title */}
        <div className="container mx-auto px-5 lg:px-10 title_3">
          <Title
            title={"My PROJECTS"}
            text={"Real-world examples of my frontend skills"}
            number={"03"}
          />
        </div>
        <div className="md:mt-20 mt-10 proj">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
