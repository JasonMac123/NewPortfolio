"use client";

import Image from "next/image";
import { projectData } from "./ProjectList";

type ProjectProps = (typeof projectData)[number];

const Project = ({ title, description, tags, image }: ProjectProps) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, i) => {
          return <li key={i}>{tag}</li>;
        })}
      </ul>
      <Image src={image} alt={"Project Photo"} />
    </section>
  );
};

export default Project;
