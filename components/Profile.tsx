"use client";

import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import JasonPhoto from "../public/images/JasonPhoto.jpg";

import { motion } from "framer-motion";
import { GrContact } from "react-icons/gr";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

const Profile = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
        >
          <Image
            src={JasonPhoto}
            alt="Profile picture of Jason"
            quality={90}
            width={400}
            height={400}
            priority={true}
            className="h-40 w-40 sm:h-60 sm:w-60 lg:w-80 lg:h-80 rounded-full border-[0.1rem] object-cover border-gray-400 shadow-lg"
          />
        </motion.div>
      </div>
      <ProfileDescription />
      <div>
        <Link
          href="#contact"
          className="bg-neutral-800 px-7 text-white py-3 flex items-center gap-2 rounded-full"
        >
          Contact Me <GrContact />
        </Link>
        <a
          href="resume.creddle.io/resume/4ubkmscygjr"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Online Resume Link
        </a>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
          Download Resume <AiOutlineDownload />
        </a>
        <a
          href="https://github.com/JasonMac123"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          <AiFillGithub />
        </a>
      </div>
    </section>
  );
};

export default Profile;
