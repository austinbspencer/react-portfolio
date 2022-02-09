import React from "react";
import {
  DiFirebase,
  DiReact,
  DiNodejsSmall,
  DiDocker,
  DiJenkins,
  DiLinux,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import FadeContainer from "../Transitions/FadeContainer";
import GrowContainer from "../Transitions/GrowContainer";
import SlideContainer from "../Transitions/SlideContainer";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <FadeContainer timeout={2500}>
      <SectionTitle main>Technologies</SectionTitle>
    </FadeContainer>
    <SlideContainer timeout={2500}>
      <SectionText>
        I've worked with a range of technologies in the tech world. Either in a
        professional space or on personal projects.
      </SectionText>
    </SlideContainer>
    <GrowContainer timeout={2500} threshold={0.5}>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Vue.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>SaaS</ListTitle>
            <ListParagraph>
              Experience with <br />
              Snowflake
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDocker size="3rem" />
          <ListContainer>
            <ListTitle>Containerization</ListTitle>
            <ListParagraph>
              Experience with <br />
              Docker and Kubernetes
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiJenkins size="3rem" />
          <ListContainer>
            <ListTitle>CI / CD</ListTitle>
            <ListParagraph>
              Experience with <br />
              Jenkins and GitHub Actions
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiLinux size="3rem" />
          <ListContainer>
            <ListTitle>Terminal</ListTitle>
            <ListParagraph>
              Experience with <br />
              Linux and Unix
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </GrowContainer>
  </Section>
);

export default Technologies;
