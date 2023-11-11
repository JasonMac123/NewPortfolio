"use client";

import SectionTitle from "../SectionTitle";
import AniSharePhoto from "/public/images/AniShare.jpg";
import AnimalPalPhoto from "/public/images/AnimalPal.jpg";
import LookOfJapanPhoto from "/public/images/LookOfJapan.jpg";
import Project from "./Project";

import { UseActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const projectData = [
  {
    title: "Animal-Pals",
    description:
      "A web-application where users to rent their houses to take care of other people pets, or find a house to house their pet while on a vacation.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    image: AnimalPalPhoto,
    link: "https://github.com/JasonMac123/Animal-Pals",
  },
  {
    title: "Look of Japan",
    description:
      "A E-commerce site where users can find souvernirs from all over Asia from countries like Japan, China, Korea, and order them.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Axios"],
    image: LookOfJapanPhoto,
    link: "https://github.com/JasonMac123/market-place",
  },
  {
    title: "AniShare",
    description:
      "A social media website where anime users can discuss, post images, and talk about anime. Users can follow other users, like posts, and comment.",
    tags: ["React", "Next.js", "MySql", "Tailwind", "Prisma", "Planetscape"],
    image: AniSharePhoto,
    link: "https://github.com/JasonMac123/AniShare",
  },
];

const ProjectList = () => {
  const { setActiveSection, lastClickTime } = UseActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("Project");
    }
  }, [inView, setActiveSection, lastClickTime]);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionTitle>My Projects</SectionTitle>
      <div>
        {projectData.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
