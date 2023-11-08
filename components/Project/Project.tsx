"use client";

import Image from "next/image";
import { projectData } from "./ProjectList";

type ProjectProps = (typeof projectData)[number];

const Project = ({ title, description, tags, image }: ProjectProps) => {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, i) => {
          return (
            <li
              className="bg-black/[0.7] px-3 py-2 text-[0.5rem] uppercase tracking-wider text-white rounded-3xl"
              key={i}
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <Image src={image} alt={"Project Photo"} className="absolute" />
    </section>
  );
};

export default Project;
