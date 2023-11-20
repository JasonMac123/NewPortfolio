"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GiMicroscope } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "../SectionTitle";

import { motion } from "framer-motion";

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
    <motion.section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <SectionTitle>Experience</SectionTitle>
      <VerticalTimeline lineColor="" animate>
        {experienceData.map((item, i) => {
          return (
            <VerticalTimelineElement
              visible
              key={i}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              dateClassName="dateTimeline"
              icon={<item.icon />}
              iconStyle={{
                background: "rgb(144, 194, 228)",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-1 !font-normal text-gray-800">
                {item.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
