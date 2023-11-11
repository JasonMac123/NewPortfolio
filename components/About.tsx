"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SectionTitle from "./SectionTitle";
import { UseActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";

const About = () => {
  const { setActiveSection } = UseActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      className="mb-28 max-w-[50rem] text-center leading-6 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      id="about"
      ref={ref}
    >
      <SectionTitle>About Me</SectionTitle>
      <p className="mb-3 sm:text-md md:text-xl">
        I graduated with a degree in{" "}
        <span className="font-medium">Chemistry</span>, after spending a year in
        the industry. I decided to pursue programming. I{" "}
        <span className="font-medium">
          learned and developed my skills in full-stack web developing
        </span>{" "}
        after enrolling in Lighthouse Labs. The reason why I pursued programming
        was that{" "}
        <span className="italic">
          I loved the creative aspect of turning my ideas into software or
          websites
        </span>{" "}
        and the puzzle/problem solving side of programming. My core web
        development skills is{" "}
        <span className="font-bold">
          React, typescript, javascript, HTML, and CSS
        </span>
        . I am familiar with <span className="font-medium">Java and .NET</span>.
      </p>
      <p className="sm:text-md md:text-xl">
        I am always looking to learn and develop my skills, but if I&apos;m not
        coding then you can probably find me playing volleyball or at a sports
        game.
      </p>
    </motion.section>
  );
};

export default About;
