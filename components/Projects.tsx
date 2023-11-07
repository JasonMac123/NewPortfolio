"use client";

import SectionTitle from "./SectionTitle";
import AniSharePhoto from "../public/images/AniShare.jpg";
import AnimalPalPhoto from "../public/images/AnimalPal.jpg";
import LookOfJapanPhoto from "../public/images/LookOfJapan.jpg";

const projectData = [
  {
    title: "Animal-Pals",
    description:
      "A web-application where users to rent their houses to take care of other people pets, or find a house to house their pet while on a vacation.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    image: AnimalPalPhoto,
  },
  {
    title: "Look of Japan",
    description:
      "A E-commerce site where users can find souvernirs from all over Asia from countries like Japan, China, Korea, and order them.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Axios"],
    image: LookOfJapanPhoto,
  },
  {
    title: "AniShare",
    description:
      "A social media website where anime users can discuss, post images, and talk about anime. Users can follow other users, like posts, and comment.",
    tags: ["React", "Next.js", "MySql", "Tailwind", "Prisma", "Planetscape"],
    image: AniSharePhoto,
  },
];

const Projects = () => {
  return (
    <section>
      <SectionTitle>My Projects</SectionTitle>
    </section>
  );
};

export default Projects;
