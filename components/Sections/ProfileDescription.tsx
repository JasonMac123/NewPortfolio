"use client";

import { motion } from "framer-motion";

const ProfileDescription = () => {
  return (
    <motion.p
      className="font-medium mb-10 mt-4 px-4 text-xl sm:text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold">
        Hey I&lsquo;m Jason, a full-stack developer
      </span>{" "}
      marking my journery into web development. My expertise is in{" "}
      <span className="font-bold">typescript, javascript, react, </span> next,
      and
      <span className="italic"> building web applications</span>.
    </motion.p>
  );
};

export default ProfileDescription;
