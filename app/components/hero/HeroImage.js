import React from "react";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

const HeroImage = ({ img, padding, children }) => {
  return (
    <div
      style={{
        position: "relative",
        // width: "100vw",
        height: `calc(100vh - ${padding || 0}px)`,
      }}
      className={styles.container}
    >
      <Image
        alt="main image"
        src={img}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        quality="100"
        priority
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default HeroImage;
