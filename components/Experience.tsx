"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref}>
      <SectionTitle>Experience</SectionTitle>
    </section>
  );
};

export default Experience;
