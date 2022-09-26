import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Div,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import SlideContainer from "../Transitions/SlideContainer";
import FadeContainer from "../Transitions/FadeContainer";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <FadeContainer timeout={1500}>
      <SectionTitle main>Projects</SectionTitle>
    </FadeContainer>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <SlideContainer key={id} timeout={1500} threshold={0.5}>
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <Div>
                <TitleContent>Tech Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </Div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank" rel="nofollow">
                  Code
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank" rel="nofollow">
                  Source
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          </SlideContainer>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
