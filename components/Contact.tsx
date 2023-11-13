"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return <section id="contact" ref={ref}></section>;
};

export default Contact;
