import React from "react";
import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black py-10">
        <div className="flex items-center md:gap-12 gap-7">
          {footerIconsList.map((item, index) => {
            const FooterIcons = item.icon;
            return (
              <div
                key={index}
                className="cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <a href={item.href}>
                  <FooterIcons className="md:size-10 size-8 hover:text-white transition-colors duration-300" />
                </a>
              </div>
            );
          })}
        </div>
        <p className="font-light md:text-lg text-sm">
          {new Date().getFullYear()} &#169; All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
