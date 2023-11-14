"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact" ref={ref} className="mb-28 sm:mb-40 scroll-mt-28">
      <p>
        Please contact me at{" "}
        <a href="mailto:m.jason.2018@gmail.com" className="underline">
          my email
        </a>{" "}
        or through this form
      </p>
      <form action="POST">
        <input type="email" />
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <button type="submit">
          Submit <IoMdSend />
        </button>
      </form>
    </section>
  );
};

export default Contact;
