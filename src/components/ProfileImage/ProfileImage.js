import React from "react";
// import { Div } from "./ProfileImageStyles";
// import Image from "next/image";
// import profilePic from "../../../public/images/1.png";

const ProfileImage = () => {
  return (
    <img
      className={"width-height--100p"}
      src={require("../../../public/images/profile.png?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840&format=webp")}
      alt="Austin"
    ></img>
  );
};

export default ProfileImage;
