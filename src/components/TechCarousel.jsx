import React from "react";
import { LogoCarousels } from "../constants";
import clsx from "clsx";

const TechCarousel = () => {
  return (
    <div className="overflow-hidden h-52 relative">
      {/* left shadow */}
      <div className="absolute left-0 top-0 h-full w-34 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      {/* right shadow */}
      <div className="absolute right-0 top-0 h-full w-34 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      {/* carousel */}
      <div className="marquee-box md:gap-12 gap-5">
        {LogoCarousels.concat(LogoCarousels).map((logo) => {
          const IconImg = logo.image;
          return (
            <div
              key={logo.name}
              className="bg-black-300 flex-center md:w-32 md:h-32 w-20 h-20 gradient-border hover:-translate-y-3 transition-all duration-300 marquee-item flex-none group cursor-pointer"
            >
              <IconImg
                size={60}
                className={clsx(
                  " text-white/30 transition-all duration-300 group-hover:scale-120 ",
                  logo.color
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCarousel;
