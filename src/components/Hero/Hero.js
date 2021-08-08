import React from "react";

import {
  SecondaryBtn,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  let dropDownActive = true;
  const changeDropDown = () => {
    dropDownActive = !dropDownActive;
    console.log(dropDownActive);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello World! <br />
          – Austin
        </SectionTitle>
        <SectionText>
          Welcome to my portfolio built with React and Next.js!
        </SectionText>
        <SecondaryBtn onClick={() => (window.location = "/Austin_Resume.pdf")}>
          RESUME
        </SecondaryBtn>
      </LeftSection>
    </Section>
  );
};

export default Hero;
