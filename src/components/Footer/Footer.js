import React from "react";
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  FaDiscord,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:309-824-3163">309-824-3163</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:austin@austinbspencer.com">
            austin@austinbspencer.com
          </LinkItem>
        </LinkColumn>
        {/* <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem href="https://discordapp.com/users/647084271743401994/">
            austinbspencer#1764
          </LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Get in touch with me!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/austinbspencer">
            <FaGithubSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/austin-spencer-b56a25177/">
            <FaLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discordapp.com/users/647084271743401994/">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/austinspencer/">
            <FaInstagramSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/austinbspencer/">
            <FaTwitterSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
