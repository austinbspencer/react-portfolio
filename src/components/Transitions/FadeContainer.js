import * as React from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";
import { useInView } from "react-intersection-observer";

const FadeContainer = ({ children, timeout, threshold }) => {
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
        <Fade
          in={checked}
          {...(checked ? { timeout: timeout || 2000 } : {})}
          container={containerRef.current}
        >
          <Box>{children}</Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default FadeContainer;
