"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref}>
      <SectionTitle>Experience</SectionTitle>
      <VerticalTimeline>
        <VerticalTimelineElement />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
