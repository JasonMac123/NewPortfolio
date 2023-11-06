"use client";

import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import JasonPhoto from "../public/images/JasonPhoto.jpg";

import { delay, motion } from "framer-motion";
import {
  AiFillContacts,
  AiFillGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import Link from "next/link";

const Profile = () => {
  return (
    <>
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
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group bg-neutral-800 px-7 text-white py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          >
            Contact Me{" "}
            <AiFillContacts
              color="white"
              className="group-hover:translate-x-1 group-hover:scale-110 transition"
            />
          </Link>
          <a
            href="http://resume.creddle.io/resume/4ubkmscygjr"
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:border hover:border-black"
          >
            Online Resume
          </a>
          <a
            href="/Jason-Mac-Resume-Nov2023.pdf"
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:border hover:border-black"
          >
            Download Resume{" "}
            <AiOutlineDownload
              size={20}
              className="group-hover:translate-y-1 transition"
            />
          </a>
          <a
            href="https://github.com/JasonMac123"
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:border hover:border-black"
          >
            <AiFillGithub size={30} />
          </a>
        </motion.div>
      </section>
      <hr className="my-28 border-dotted border-t-[5px] border-gray-400 w-40 sm:w-96" />
    </>
  );
};

export default Profile;
