import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  CloseIcon,
  Icon,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>
          <FaTimes size="3rem" />
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href="#projects">
            <SidebarLink>Projects</SidebarLink>
          </Link>
          <Link href="#websites">
            <SidebarLink>Websites</SidebarLink>
          </Link>
          <Link href="#tech">
            <SidebarLink>Technologies</SidebarLink>
          </Link>
          <Link href="#about">
            <SidebarLink>About</SidebarLink>
          </Link>
        </SidebarMenu>
        <SidebarBtnWrap>
          <Link href="mailto:austin@austinbspencer.com">
            <SidebarRoute>Contact</SidebarRoute>
          </Link>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
