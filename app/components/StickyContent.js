import React, { createRef } from "react";
import { Grid, Menu, Sticky } from "semantic-ui-react";
import { Anchor } from "antd";
import _ from "lodash";
import Background from "./content/background/Background";
import ExperienceHandler from "./content/experience/ExperienceHandler";
import Skills from "./content/skills/Skills";
import Projects from "./content/projects/Projects";
import Resume from "./content/resume/Resume";

const StickyContent = () => {
  const contextRef = createRef();

  return (
    <div ref={contextRef} style={{ minHeight: "100vh" }}>
      <Grid>
        <Grid.Column className="tablet computer only" width={3}>
          <Sticky context={contextRef} offset={50}>
            <Anchor offsetTop={50}>
              <Anchor.Link href="#background" title="Background" />
              <Anchor.Link href="#skills" title="Skills" />
              <Anchor.Link href="#experience" title="Experience" />
              <Anchor.Link href="#projects" title="Projects">
                <Anchor.Link href="#top-projects" title="Featured" />
                <Anchor.Link href="#other-projects" title="Notable" />
              </Anchor.Link>
              <Anchor.Link href="#resume" title="Resume" />
            </Anchor>
          </Sticky>
        </Grid.Column>

        <Grid.Column
          stretched
          className="sixteen wide mobile thirteen wide tablet thirteen wide computer column"
        >
          <Background />
          <div style={{ marginBottom: "15vh" }} />
          <Skills />
          <div style={{ marginBottom: "15vh" }} />
          <ExperienceHandler />
          <div style={{ marginBottom: "15vh" }} />
          <Projects />
          <div style={{ marginBottom: "15vh" }} />
          <Resume />
          <div style={{ marginBottom: "15vh" }} />
        </Grid.Column>

        {/* <Grid.Column stretched className="mobile only" width={16}>
          <Background />
          <div style={{ marginBottom: "15vh" }} />
          <Skills />
          <div style={{ marginBottom: "15vh" }} />
          <ExperienceHandler />
          <div style={{ marginBottom: "15vh" }} />
          <Projects />
          <div style={{ marginBottom: "15vh" }} />
          <Resume />
          <div style={{ marginBottom: "15vh" }} />
        </Grid.Column> */}
      </Grid>
    </div>
  );
};

export default StickyContent;
