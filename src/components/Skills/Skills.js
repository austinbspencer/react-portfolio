import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import SkillBar from "react-skillbars";

const Skills = () => {
  const skills = [
    { type: "PYTHON", level: 85 },
    { type: "C++", level: 80 },
    { type: "JAVASCRIPT", level: 70 },
    { type: "JAVA", level: 65 },
    { type: "HTML/CSS", level: 60 },
    { type: "GO", level: 50 },
  ];

  const colors = {
    bar: "hsl(232.7,27.3%,23.7%)",
    title: {
      text: "#fff",
      background: "#01BF71",
    },
  };

  return (
    <Section id="skills">
      <SectionTitle main>Languages</SectionTitle>
      <SkillBar skills={skills} colors={colors} />
    </Section>
  );
};

export default Skills;
