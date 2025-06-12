import React from "react";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import ContactExperience from "../components/models/ContactModel/ContactExperience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".form_contact", {
      opacity: 0,
      x: -100,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".form_contact",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.from(".title_4", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title_4",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.from(".contact_model", {
      opacity: 0,
      x: 100,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact_model",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  });
  return (
    <section id="contact" className="flex-center relative px-5 lg:px-10">
      <div className="w-full h-full container my-20 mt-0">
        <div className="title_4">
          <Title
            title={"Contact Me"}
            text={"I'm just a message away — let’s talk"}
            number={"04"}
          />
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12 form_contact">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="w-full h-full md:m-0 -mt-32 hover:cursor-grab contact_model">
                <ContactExperience />
              
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
