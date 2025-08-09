import React from "react";
import GradientSphere from "../components/GradientSphere";
import Title from "../components/Title";

import Abst from "/images/Abstraction.svg";
import ArrowRight from "/images/ArrowUpRight.svg";
import AboutExperiece from "../components/models/AboutModel/AboutExperiece";
import { bentoSocialLinks } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      x: -50,
      duration: 4,
      ease: "power2.Out",
      scrollTrigger: {
        trigger: "#card",
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
    });
    gsap.from(".block1", {
      opacity: 0,
      y: 100,
      duration: 4,
      ease: "power2.Out",
      scrollTrigger: {
        trigger: ".block1",
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
    });
    gsap.from(".block2", {
      opacity: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".block1",
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
    });
    gsap.from(".title_1", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title_1",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.from(".socials", {
      opacity: 0,
      x: 100,
      stagger: 0.3,
      duration: 2.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".socials",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section id="about" className="flex-center relative px-5 lg:px-10">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-20" />
      <GradientSphere
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <div className="title_1">
          <Title
            title={"About Me"}
            text={"Passionate Creator, Lifelong Learner."}
            number={"01"}
          />
        </div>

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            {/* block 1 */}
            <div className="md:col-span-7 col-span-12 row-span-5 block1">
              <div className="bg-black-300 rounded-2xl p-7 w-full">
                <div>
                  <img src={Abst} className="md:w-60 w-30 flower" alt="" />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Kirill Kushov
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I’m a frontend developer with a design background, focused
                    on building clean, responsive interfaces using React. I care
                    about user experience, visual clarity, and bringing ideas to
                    life with modern tools.
                  </p>
                </div>
              </div>
            </div>
            {/* block 2 (3d) */}
            <div className="md:col-span-5 col-span-12 row-span-5 block2">
              <div className="bg-transparent border border-amber-300 rounded-xl w-full md:h-full h-60 hover:cursor-grab ">
                <div className="w-full h-full">
                  <AboutExperiece />
                </div>
              </div>
            </div>
            {/* wed card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full">
                <div className="flex flex-col h-full justify-center gap-2 text">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    3D & Frontend
                  </h1>
                  <p className="lg:text-2xl md:text-xl max-w-150">
                    Creative interfaces powered by React and Three.js —
                    interactive, immersive, and optimized for performance.
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7 w-full">
                <div className="flex flex-col h-full justify-center gap-2 text">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Frontend & UI
                  </h1>
                  <p className="md:text-2xl md:max-w-96">
                    Clean code, pixel-perfect UI, and dynamic interactions.
                  </p>
                </div>
              </div>
            </div>
            {/* motivation card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 md:py-16 lg:py-10 w-full h-full">
                <div className="flex flex-col justify-between h-full text">
                  <h1 className="gradient-title lg:text-5xl md:text-4xl text-3xl font-bold">
                    BUILD
                  </h1>
                  <h1 className="gradient-title lg:text-5xl md:text-4xl text-3xl font-bold">
                    CREATE
                  </h1>
                  <h1 className="gradient-title lg:text-5xl md:text-4xl text-3xl font-bold">
                    PUSH
                  </h1>
                </div>
              </div>
            </div>
            {/* socials */}
            {bentoSocialLinks.map((item) => {
              const IconImg = item.icon;
              return (
                <div
                  key={item.name}
                  className="md:col-span-4 col-span-12 row-span-2 socials"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <a href={item.href}>
                      <div className="flex justify-between items-center h-full">
                        <div className="flex items-center md:gap-5">
                          <IconImg
                            size={50}
                            className="group-hover:text-white transition-colors duration-300"
                          />
                          <h1 className="gradient-title lg:text-3xl md:text-2xl text-xl md:m-0 ms-5 font-medium">
                            {item.name}
                          </h1>
                        </div>
                        <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
                          <img
                            src={ArrowRight}
                            alt=""
                            className="lg:scale-100 scale-50"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
