import React from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import { SkillBars } from "react-skills";
import FadeContainer from "../Transitions/FadeContainer";
// import { LeftSection } from "../Hero/HeroStyles";
// import ProfileImage from "../ProfileImage/ProfileImage";
// import { Div } from "./SkillsStyles";
// import { Div as Div2 } from "../ProfileImage/ProfileImageStyles";

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
    <>
      {/* <Div>
        <Section id="skills">
          <ProfileImage />
          <SectionText>
            My favorite programming languages that I ranked based on
            comfortability, experience, and skill.
          </SectionText>
          <SkillBars skills={skills} />
        </Section>
      </Div>
      <Div2>
        <Section row nopadding id="skills">
          <LeftSection>
            <SectionText>
              My favorite programming languages that I ranked based on
              comfortability, experience, and skill.
            </SectionText>
            <SkillBars skills={skills} />
          </LeftSection>
        </Section>
      </Div2> */}
      <FadeContainer timeout={2500} threshold={0.5}>
        <Section id="skills">
          <SectionText>
            My favorite programming languages that I ranked based on
            comfortability, experience, and skill.
          </SectionText>
          <SkillBars skills={skills} />
        </Section>
      </FadeContainer>
    </>
  );
};

export default Skills;
