import React from "react";
import Image from "next/image";
// import profilePic from "../../../public/images/1.png";

const ProfileImage = () => {
  return (
    <Image
      src="/images/profile.png"
      width="3000"
      height="3000"
      alt="Austin"
    ></Image>
  );
};

export default ProfileImage;
