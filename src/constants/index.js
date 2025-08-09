import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript, SiGreensock, SiVite, SiNuxtdotjs } from "react-icons/si";
import { TbBrandThreejs, TbBrandFramerMotion } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa6";
import { RiNextjsLine, RiVuejsFill, RiTailwindCssFill } from "react-icons/ri";

import proj1 from "/images/proj1.png";
import proj2 from "/images/proj2.png";
import proj3 from "/images/proj3.png";
import proj4 from "/images/proj4.png";
import proj5 from "/images/proj5.png";
import proj6 from "/images/proj6.png";
import proj7 from "/images/proj7.png";
import proj8 from "/images/proj8.png";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const bentoSocialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/kushovka",
    icon: FaTelegram,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kushovka",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kushovka",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/Kushovka",
    icon: FaGithub,
  },
];

const LogoCarousels = [
  {
    name: "html",
    image: FaHtml5,
    color: "group-hover:text-[#E34F26]",
  },
  {
    name: "css",
    image: FaCss3Alt,
    color: "group-hover:text-[#1572B6]",
  },
  {
    name: "tailwindcss",
    image: RiTailwindCssFill,
    color: "group-hover:text-[#38bdf8]",
  },
  {
    name: "javascript",
    image: FaJs,
    color: "group-hover:text-[#F7DF1E]",
  },
  {
    name: "react",
    image: FaReact,
    color: "group-hover:text-[#61DAFB]",
  },
  {
    name: "nextjs",
    image: RiNextjsLine,
    color: "group-hover:text-[#ffffff]",
  },
  {
    name: "nuxtjs",
    image: SiNuxtdotjs,
    color: "group-hover:text-[#00C58E]",
  },
  {
    name: "vue",
    image: RiVuejsFill,
    color: "group-hover:text-[#42B883]",
  },
  {
    name: "Vite",
    image: SiVite,
    color: "group-hover:text-[#646CFF]",
  },
  {
    name: "typescript",
    image: SiTypescript,
    color: "group-hover:text-[#3178C6]",
  },
  {
    name: "github",
    image: FaGithub,
    color: "group-hover:text-[#ffffff]",
  },
  {
    name: "threejs",
    image: TbBrandThreejs,
    color: "group-hover:text-[#ff3c00]",
  },
  {
    name: "Framer Motion",
    image: TbBrandFramerMotion,
    color: "group-hover:text-[#0055FF]",
  },
  {
    name: "GSAP",
    image: SiGreensock,
    color: "group-hover:text-[#88CE02]",
  },
  {
    name: "figma",
    image: FaFigma,
    color: "group-hover:text-[#F24E1E]",
  },
];

const slides = [
  {
    id: 1,
    text: "React + Tailwind CSS + axios",
    title: "Weather",
    img: proj1,
    href: "https://kushovka.github.io/Weather/",
    hrefGit: "https://github.com/Kushovka/Weather",
  },
  {
    id: 2,
    text: "NextJS + TypeScript + ThreeJS",
    title: "BusinessTown",
    img: proj6,
    href: "https://businesstownnextts.netlify.app/",
    hrefGit: "https://github.com/Kushovka/businessTown-next-ts",
  },
  {
    id: 3,
    text: "NuxtJS + TypeScript + Vue",
    title: "Requiem",
    img: proj7,
    href: "https://requiemm.netlify.app/",
    hrefGit: "https://github.com/Kushovka/requiem",
  },
  {
    id: 4,
    text: "NuxtJS + TypeScript + Vue",
    title: "CodeAid",
    img: proj8,
    href: "https://codeaidd.netlify.app/",
    hrefGit: "https://github.com/Kushovka/codeaid",
  },
  {
    id: 5,
    text: "React + Tailwind CSS",
    title: "Positivus",
    img: proj2,
    href: "https://kushovka.github.io/positivus/",
    hrefGit: "https://github.com/Kushovka/positivus",
  },
  {
    id: 6,
    text: "React + Tailwind CSS + GSAP",
    title: "CosmicPF",
    img: proj3,
    href: "https://kushovka.github.io/cosmic-portfolio/",
    hrefGit: "https://github.com/Kushovka/cosmic-portfolio",
  },
  {
    id: 7,
    text: "React + Tailwind CSS + GSAP + ThreeJS",
    title: "3D-PF",
    img: proj4,
    href: "https://kushovka.github.io/portfolio-3d/",
    hrefGit: "https://github.com/Kushovka/portfolio-3d",
  },
  {
    id: 8,
    text: "CSS + HTML + JS",
    title: "Movies.hd",
    img: proj5,
    href: "https://kushovka.github.io/movies.hd/",
    hrefGit: "https://github.com/Kushovka/movies.hd",
  },
];

const testimonials = [
  {
    name: "John Miller",
    pos: "Founder of ModernEdge Solutions",
    review:
      "David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.",
    imgPath: "",
  },
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: "",
  },
  {
    name: "Sarah Lopez",
    pos: "Entrepreneur and Small Business Owner",
    review:
      "Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.",
    imgPath: "",
  },
  {
    name: "David Chen",
    pos: "Project Manager at CreativeSphere Agency",
    review:
      "Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.",
    imgPath: "",
  },
];

const footerIconsList = [
  {
    name: "Telegram",
    href: "https://t.me/kushovka",
    icon: FaTelegram,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kushovka",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kushovka",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/Kushovka",
    icon: FaGithub,
  },
];

export {
  navItems,
  bentoSocialLinks,
  LogoCarousels,
  slides,
  testimonials,
  footerIconsList,
};
