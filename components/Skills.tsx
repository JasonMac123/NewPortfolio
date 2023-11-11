"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <h3>Front-end</h3>
      </div>
      <div>
        <h3> Back-end</h3>
      </div>
    </section>
  );
};

export default Skills;
