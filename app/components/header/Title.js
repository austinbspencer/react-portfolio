import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title, id }) => {
  return (
    <Typography variant="h3" component="div" id={id}>
      {title}
    </Typography>
  );
};

export default Title;
