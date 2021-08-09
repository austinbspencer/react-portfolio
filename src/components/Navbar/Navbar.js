import Link from "next/link";
import React from "react";
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
  return (
    <>
      <Nav>
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
            <Link href="mailto:austin@austinbspencer.com">
              <NavBtnLink>Contact</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
