import React, { createRef } from "react";
import { Grid, Menu, Sticky } from "semantic-ui-react";
import { Anchor } from "antd";
import _ from "lodash";
import Background from "./content/background/Background";
import ExperienceHandler from "./content/experience/ExperienceHandler";
import Skills from "./content/skills/Skills";
import Projects from "./content/projects/Projects";
import { useRouter } from "next/router";

const StickyContent = () => {
  const [activeItem, setActiveItem] = React.useState("background");
  const router = useRouter();

  const handleItemClick = (e, { name }) => {
    if (activeItem !== name) {
      setActiveItem(name);
      router.push("#" + name);
    }
  };

  const contextRef = createRef();
  return (
    <div ref={contextRef} style={{ minHeight: "100vh" }}>
      <Grid>
        <Grid.Column width={3}>
          <Sticky context={contextRef} offset={50}>
            <Anchor offsetTop={50}>
              <Anchor.Link href="#background" title="Background" />
              <Anchor.Link href="#skills" title="Skills" />
              <Anchor.Link href="#experience" title="Experience" />
              <Anchor.Link href="#projects" title="Projects">
                <Anchor.Link href="#top-projects" title="Featured" />
                <Anchor.Link href="#other-projects" title="Notable" />
              </Anchor.Link>
            </Anchor>
          </Sticky>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          <Background />
          <div style={{ marginBottom: "15vh" }} />
          <Skills />
          <div style={{ marginBottom: "15vh" }} />
          <ExperienceHandler />
          <div style={{ marginBottom: "15vh" }} />
          <Projects />
          <div style={{ marginBottom: "15vh" }} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default StickyContent;
