"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-[min(95%, 38rem)]"
    >
      <p className="text-gray-700">
        Please contact me at{" "}
        <a href="mailto:m.jason.2018@gmail.com" className="underline">
          my email
        </a>{" "}
        or through this form
      </p>
      <form action="POST" className="mt-10">
        <input
          type="email"
          className="h-14 rounded-lg border border-black/10"
        />
        <textarea className="h-52 my-3 rounded-lg border border-black/10"></textarea>
        <button type="submit">
          Submit <IoMdSend />
        </button>
      </form>
    </section>
  );
};

export default Contact;
