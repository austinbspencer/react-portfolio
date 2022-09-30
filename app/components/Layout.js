import React from "react";
import { Container } from "semantic-ui-react";

const Layout = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Layout;
