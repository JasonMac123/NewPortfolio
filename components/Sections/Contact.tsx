"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

import sendMessage from "@/functions/sendMessage";

import { IoMdSend } from "react-icons/io";

import SectionTitle from "../SectionTitle";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="bg-[#e0edff] w-full py-8 px-12 scroll-mt-28 text-center"
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
      <div className="flex flex-col items-center justify-center">
        <form
          action={async (formData) => {
            const result = await sendMessage(formData);
            if (result === "Successful") {
              toast.success("Message sent");
            } else {
              toast.error("Something went wrong");
            }
          }}
          className="mt-10 flex flex-col w-[min(40rem,_95%)]"
        >
          <input
            type="email"
            name="email"
            required
            maxLength={500}
            className="h-14 px-4 rounded-lg border border-black/10"
            placeholder="Your email"
          />
          <textarea
            className="h-60 my-3 rounded-lg border border-black/10 p-4 resize-none"
            name="message"
            required
            maxLength={500}
            placeholder="Your message"
          ></textarea>
          <button
            type="submit"
            className="self-end group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#0077B6] text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-[#023E8A] hover:scale-110 active:scale-105"
          >
            Submit{" "}
            <IoMdSend className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
