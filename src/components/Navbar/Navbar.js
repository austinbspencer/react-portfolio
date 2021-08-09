import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Span,
} from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/">
            <NavLogo>
              <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
            </NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars size="3rem" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href="#projects">
                <NavLinks>Project</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#websites">
                <NavLinks>Websites</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#tech">
                <NavLinks>Technologies</NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#about">
                <NavLinks>About</NavLinks>
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              onClick={() =>
                (window.location = "mailto:austin@austinbspencer.com")
              }
            >
              Contact
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
