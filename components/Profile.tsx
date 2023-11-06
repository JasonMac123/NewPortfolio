"use client";

import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import JasonPhoto from "../public/images/JasonPhoto.jpg";

import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section>
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
    </section>
  );
};

export default Profile;
