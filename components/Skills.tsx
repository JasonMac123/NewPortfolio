"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

export const skillsData = {
  frontEnd: [
    "Javascript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Node.js",
    "Prisma",
  ],
  backEnd: [
    "Typescript",
    "Python",
    "Java",
    "SpringBoot",
    "Express",
    "Ruby",
    "Next.js",
  ],
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      id="skills"
      ref={ref}
      className="mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionTitle>Skills</SectionTitle>
      <div>
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl font-medium capitalize mb-8 text-center"
        >
          Front-end
        </motion.h3>
        <ul className="mb-8 flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.frontEnd.map((skill, i) => {
            return (
              <motion.li
                className="bg-white border border-black/[0.2] rounded-xl px-4 py-2"
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.05 * i,
                }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div>
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl font-medium capitalize mb-8 text-center"
        >
          Back-end
        </motion.h3>
        <ul className="mb-8 flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.backEnd.map((skill, i) => {
            return (
              <motion.li
                className="bg-white border border-black/[0.2] rounded-xl px-4 py-2"
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.05 * i,
                }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};

export default Skills;
