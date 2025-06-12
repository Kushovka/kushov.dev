import React, { useEffect, useState } from "react";
import { navItems } from "../constants";
import clsx from "clsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={clsx(
        "md:fixed right-0 z-40 max-w-7xl w-full px-4 left-1/2 -translate-x-1/2  transition-all duration-300",
        isScrolled
          ? "py-2 mt-2 bg-black-300/50 backdrop-blur-md rounded-3xl shadow-xs"
          : "py-5"
      )}
    >
      <div className="w-full flex-center z-50 top-0 left-0 md:p-0 px-5">
        <div className="container md:my-5 my-2 flex items-center justify-center">
          <div className="md:flex items-center gap-15 hidden">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
                  after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                  hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                <a className="text-white text-lg" href={item.href}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
