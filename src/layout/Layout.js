import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
// import Header from '../components/Header/Header'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
