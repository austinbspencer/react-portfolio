import * as React from "react";

import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";
import { useInView } from "react-intersection-observer";

const GrowContainer = ({ children, timeout, threshold }) => {
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
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: timeout || 1000 } : {})}
          container={containerRef.current}
        >
          <Box>{children}</Box>
        </Grow>
      </Box>
    </Container>
  );
};

export default GrowContainer;
