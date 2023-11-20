"use client";

import Image from "next/image";
import { projectData } from "./ProjectList";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

type ProjectProps = (typeof projectData)[number];

const Project = ({ title, description, tags, image, link }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const redirectToProject = () => {
    router.push(link);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });
  const upScaleScroll = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const upScaleOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: upScaleScroll,
        opacity: upScaleOpacity,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[42rem] cursor-pointer rounded-lg border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 group-even:pl-8 transition"
        onClick={redirectToProject}
      >
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full group-even:ml-[21rem]">
          <h3 className="text-2xl font-semibold text-[#0077b6]">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => {
              return (
                <li
                  className="bg-[#0077b6]/[0.7] px-3 py-2 text-[0.5rem] uppercase tracking-wider text-black rounded-3xl"
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
          className="absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-even:-right-[initial] group-even:-left-40 h-full object-cover group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
      </section>
    </motion.div>
  );
};

export default Project;
