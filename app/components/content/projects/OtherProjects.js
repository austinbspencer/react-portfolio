import React from "react";
import { Grid, Pagination } from "semantic-ui-react";
import projects from "@/constants/projects.json" assert { type: "json" };
import Project from "./Project";

const OtherProjects = () => {
  const [activePage, setActivePage] = React.useState(1);

  const handlePaginationChange = (e, { activePage }) =>
    setActivePage(activePage);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Pagination
          activePage={activePage}
          boundaryRange={1}
          onPageChange={handlePaginationChange}
          size="small"
          siblingRange={1}
          totalPages={projects.length}
        />
      </Grid.Column>

      <Grid.Column>
        <Project proj={projects[activePage - 1]} />
      </Grid.Column>
    </Grid>
  );
};

export default OtherProjects;
