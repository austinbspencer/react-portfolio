import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import { useInView } from "react-intersection-observer";

const SlideContainer = ({ children, timeout, direction, threshold }) => {
  const [checked, setChecked] = React.useState(false);
  const [containerRef, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true,
  });

  if (inView) {
    if (!checked) {
      setChecked(true);
    }
  }

  return (
    <Container disableGutters ref={containerRef}>
      <Box>
        <Slide
          direction={direction || "up"}
          in={checked}
          {...(checked ? { timeout: timeout || 1000 } : {})}
          container={containerRef.current}
        >
          <Box>{children}</Box>
        </Slide>
      </Box>
    </Container>
  );
};

export default SlideContainer;
