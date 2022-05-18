import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  if (!visible) return null;

  return (
    <IconButton
      sx={{ position: "fixed", bottom: "10vh", right: "5vw" }}
      onClick={() => scroll.scrollToTop()}
      size="large"
      color="secondary"
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTop;
