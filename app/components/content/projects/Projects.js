import React from "react";
import { Segment, Header, Divider } from "semantic-ui-react";
import topProjects from "@/constants/top_projects.json" assert { type: "json" };
import Project from "./Project";
import OtherProjects from "./OtherProjects";

const Projects = () => {
  return (
    <React.Fragment>
      <Segment raised id="projects">
        <Header
          as="h1"
          textAlign="center"
          style={{ marginBottom: 0, paddingBottom: 0 }}
        >
          Projects
        </Header>
        <Header
          sub
          color="grey"
          textAlign="center"
          style={{ marginBottom: "1em", marginTop: "5px" }}
        >
          A collection of my development work
        </Header>
        <Header
          textAlign="center"
          style={{ marginBottom: "2em" }}
          id="top-projects"
        >
          Top Projects
        </Header>
        {topProjects.map((proj, idx) => (
          <Project key={idx} withDivider proj={proj} />
        ))}
        <Divider />
        <Header
          textAlign="center"
          style={{ marginBottom: "2em" }}
          id="other-projects"
        >
          Other Notable Projects
        </Header>
        <OtherProjects />
      </Segment>
    </React.Fragment>
  );
};

export default Projects;
