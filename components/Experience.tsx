"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GiMicroscope } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";
import React from "react";

const experienceData = [
  {
    title: "Lab assistant",
    company: "High North",
    description:
      "Graduated university and found a job as a lab assistant prepareing samples.",
    icon: GiMicroscope,
    date: "2022",
  },
  {
    title: "Web-Development",
    company: "Lighthouse labs",
    description:
      "Enrolled in lighthouse labs for web-development and grew my front-end and back-end skills",
    icon: BsCodeSlash,
    date: "2023",
  },
];

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref}>
      <SectionTitle>Experience</SectionTitle>
      <VerticalTimeline>
        <VerticalTimelineElement visible>
          <h3>Hello</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
