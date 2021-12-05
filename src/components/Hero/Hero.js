import React from "react";

import {
  SecondaryBtn,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import {
  FaDiscord,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import { SocialContainer } from "../Footer/FooterStyles";
import Link from "next/link";

const Hero = (props) => {
  let dropDownActive = true;
  const changeDropDown = () => {
    dropDownActive = !dropDownActive;
    console.log(dropDownActive);
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hello World! <br />
            – Austin
          </SectionTitle>
          <SectionText>
            Welcome to my portfolio built with React and Next.js!
          </SectionText>
          <SecondaryBtn
            onClick={() => (window.location = "/Austin_Resume.pdf")}
          >
            RESUME
          </SecondaryBtn>
          <SocialContainer>
            <SocialIcons
              href="https://github.com/austinbspencer"
              target="_blank"
            >
              <FaGithubSquare size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/austinbspencer/"
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
          </SocialContainer>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
