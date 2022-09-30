import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import Databases from "./Databases";
import Integration from "./Integration";
import Languages from "./Languages";
import Software from "./Software";

const Skills = () => {
  return (
    <Segment raised id="skills">
      <Header as="h1" textAlign="center" style={{ marginBottom: "1em" }}>
        Skills
      </Header>
      <Grid doubling columns={4}>
        <Grid.Column>
          <Languages />
        </Grid.Column>
        <Grid.Column>
          <Integration />
        </Grid.Column>
        <Grid.Column>
          <Databases />
        </Grid.Column>
        <Grid.Column>
          <Software />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Skills;
