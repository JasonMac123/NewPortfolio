"use client";

import Image from "next/image";
import JasonPhoto from "../public/images/JasonPhoto.jpg";

const Profile = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image src={JasonPhoto} alt="Profile picture of Jason" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
