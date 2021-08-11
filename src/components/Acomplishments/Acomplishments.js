import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 25, text: "Open Source Projects" },
  { number: 4500, text: "Github Commits" },
  { number: 3.3, text: "GPA" },
  // { number: 180, text: "College Credits 🙃" },
];

const Acomplishments = () => (
  <Section id="accomplishments">
    {/* <SectionDivider />
    <br /> */}
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
