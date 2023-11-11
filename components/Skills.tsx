"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
    </section>
  );
};

export default Skills;
