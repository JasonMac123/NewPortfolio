"use client";

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
    <section id="skills" ref={ref}>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <h3 className="text-xl font-medium capitalize mb-8 text-center">
          Front-end
        </h3>
        <ul>
          {skillsData.frontEnd.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium capitalize mb-8 text-center">
          {" "}
          Back-end
        </h3>
        <ul>
          {skillsData.backEnd.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
