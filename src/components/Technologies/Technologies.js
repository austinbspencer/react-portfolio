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
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the tech world. Either in a
      professional space or on personal projects.
    </SectionText>
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
  </Section>
);

export default Technologies;
