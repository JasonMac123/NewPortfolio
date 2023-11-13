"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section id="Skills" ref={ref}>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <h3 className="text-xl font-medium capitalize mb-8 text-center">
          Front-end
        </h3>
      </div>
      <div>
        <h3 className="text-xl font-medium capitalize mb-8 text-center">
          {" "}
          Back-end
        </h3>
      </div>
    </section>
  );
};

export default Skills;
