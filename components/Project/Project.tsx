"use client";

import Image from "next/image";
import { projectData } from "./ProjectList";

type ProjectProps = (typeof projectData)[number];

const Project = ({ title, description, tags, image }: ProjectProps) => {
  return (
    <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
      <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full group-even:ml-[21rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
      </div>
      <Image
        src={image}
        alt={"Project Photo"}
        className="absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-even:-right-[initial] group-even:-left-40 h-full object-cover"
      />
    </section>
  );
};

export default Project;
