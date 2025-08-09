import React, { useEffect, useState } from "react";
import { slides } from "../constants";

import ArrowRight from "/images/ArrowUpRight.svg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
    });
    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 1}) img`,
      { scale: 2 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh] overflow-hidden">
        <div className="absolute w-full left-[20vw] top-0">
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden"
              >
                <img
                  src={slide.img}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300/60 px-5">
                  <div className="flex h-full justify-between items-center ">
                    <div className="flex-center gap-2 text-white">
                      <p className="md:text-xl text-lg text-[#a7a7a7]">{index + 1}.</p>
                      <a
                        href={slide.hrefGit}
                        className="md:text-xl text-lg flex-center gap-3 group"
                        text-lg
                      >
                        <p className="text-[#a7a7a7] group-hover:text-white transition-all duration-300">
                          {slide.title}
                        </p>
                        <FaGithub className="w-[24px] h-[24px] text-[#a7a7a7]/50 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                      </a>
                    </div>
                    <div className="xl:flex hidden items-center justify-center  -mr-[90px]">
                      <p className="text-[#a7a7a7]/50 md:text-xl text-sm">
                        {slide.text}
                      </p>
                    </div>
                    <a href={slide.href}>
                      <div className="flex-center gap-5 hover:text-white group transition-colors duration-300">
                        <div className="hidden sm:flex">
                          <p className=" md:text-xl text-sm">Preview Project</p>
                        </div>
                        <div className="flex items-center justify-end group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                          <img
                            className="md:size-10 size-7"
                            src={ArrowRight}
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-white-50 flex justify-center gap-5">
        <div
          onClick={prevSlide}
          className="cursor-pointer hover:text-blue-50 transition-colors duration-300"
        >
          <MdOutlineKeyboardArrowLeft size={50} />
        </div>
        <div
          onClick={nextSlide}
          className="cursor-pointer hover:text-blue-50 transition-colors duration-300"
        >
          <MdOutlineKeyboardArrowRight size={50} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
