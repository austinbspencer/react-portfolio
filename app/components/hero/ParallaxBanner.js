import React from "react";
// import SquareButton from "@/components/button/SquareButton";
import styles from "@/styles/Hero.module.css";
// import { Grid, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import { Container } from "@mui/material";

const ParallaxBanner = ({ img, strength, padding, children }) => {
  return (
    <Parallax
      blur={0}
      bgImage={img.src}
      bgImgAlt="imgDescription"
      strength={strength || -200}
    >
      <Container
        sx={{ height: `calc(100vh - ${padding || 0}px)` }}
        disableGutters
      >
        <div className={styles.content}>{children}</div>
      </Container>
    </Parallax>
  );
};

export default ParallaxBanner;
