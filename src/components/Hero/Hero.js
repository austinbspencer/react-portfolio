import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        – Austin
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio built with React and Next.js!
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://git.austinbspencer.com/resume")
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
