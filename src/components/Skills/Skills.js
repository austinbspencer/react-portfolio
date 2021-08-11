import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { SkillBars } from "react-skills";
import { LeftSection } from "../Hero/HeroStyles";
import ProfileImage from "../ProfileImage/ProfileImage";
import { Div } from "./SkillsStyles";

const Skills = () => {
  const skills = [
    { name: "PYTHON", level: 85, color: "hsl(232.7,27.3%,23.7%)" },
    { name: "C++", level: 80, color: "hsl(232.7,27.3%,23.7%)" },
    { name: "JAVASCRIPT", level: 70, color: "hsl(232.7,27.3%,23.7%)" },
    { name: "JAVA", level: 65, color: "hsl(232.7,27.3%,23.7%)" },
    { name: "HTML/CSS", level: 60, color: "hsl(232.7,27.3%,23.7%)" },
    { name: "GO", level: 50, color: "hsl(232.7,27.3%,23.7%)" },
  ];

  return (
    <Section row nopadding id="skills">
      <LeftSection>
        <Div>
          <ProfileImage />
        </Div>
        <SectionText>
          My favorite programming languages that I ranked based on
          comfortability, experience, and skill.
        </SectionText>
        <SkillBars skills={skills} />
      </LeftSection>
    </Section>
  );
};

export default Skills;
