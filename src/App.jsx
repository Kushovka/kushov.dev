import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
