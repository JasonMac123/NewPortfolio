"use client";

import Image from "next/image";
import JasonPhoto from "../public/images/JasonPhoto.jpg";

const Profile = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={JasonPhoto}
            alt="Profile picture of Jason"
            quality={90}
            width={400}
            height={400}
            priority={true}
            className="h-80 w-80 rounded-full border-[0.1rem] object-cover border-gray-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
