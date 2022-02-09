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
} from "../Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { websites } from "../../constants/constants";
import SlideContainer from "../Transitions/SlideContainer";
import FadeContainer from "../Transitions/FadeContainer";

const Websites = () => (
  <Section id="websites">
    <SectionDivider />
    <FadeContainer timeout={2500}>
      <SectionTitle main>Websites</SectionTitle>
    </FadeContainer>
    <GridContainer>
      {websites.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <SlideContainer key={id} timeout={2000} threshold={0.5}>
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
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

export default Websites;
