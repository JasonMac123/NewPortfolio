"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact" ref={ref}>
      <p>
        Please contact me at{" "}
        <a href="mailto:m.jason.2018@gmail.com" className="underline">
          my email
        </a>{" "}
        or through this form
      </p>
    </section>
  );
};

export default Contact;
