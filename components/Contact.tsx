"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

import { IoMdSend } from "react-icons/io";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-[min(95%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
    >
      <SectionTitle>Contact Me</SectionTitle>
      <p className="text-gray-700 -mt-4">
        Please contact me at{" "}
        <a href="mailto:m.jason.2018@gmail.com" className="underline">
          my email
        </a>{" "}
        or through this form
      </p>
      <form action="POST" className="mt-10 flex flex-col px-4">
        <input
          type="email"
          className="h-14 rounded-lg border border-black/10"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 resize-none"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105"
        >
          Submit{" "}
          <IoMdSend className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;