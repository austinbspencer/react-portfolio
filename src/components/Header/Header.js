import Link from "next/link";
import React from "react";

import {
  FaDiscord,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#websites">
          <NavLink>Websites</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/austinbspencer" target="_blank">
        <FaGithubSquare size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/austin-spencer-b56a25177/"
        target="_blank"
      >
        <FaLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://discordapp.com/users/647084271743401994/"
        target="_blank"
      >
        <FaDiscord size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/austinspencer/"
        target="_blank"
      >
        <FaInstagramSquare size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.twitter.com/austinbspencer/"
        target="_blank"
      >
        <FaTwitterSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
