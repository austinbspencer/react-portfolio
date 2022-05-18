import { Container, Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={1}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={6} sm={4} md={3} xl={2}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
