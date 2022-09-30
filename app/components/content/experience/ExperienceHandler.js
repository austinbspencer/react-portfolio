import React from "react";
import { Segment, List, Header } from "semantic-ui-react";
import { Timeline } from "antd";
import experience from "@/constants/experience.json" assert { type: "json" };

const ExperienceHandler = () => {
  return (
    <Segment raised id="experience">
      <Header as="h1" textAlign="center" style={{ marginBottom: "1em" }}>
        Relevant Experience
      </Header>
      <Timeline mode="right">
        {experience.map((job, idx) => (
          <Timeline.Item key={idx} label={job.timeframe}>
            <List>
              <List.Item>
                {/* <List.Item.Meta
                title={<a href="https://ant.design">{job.company}</a>}
                description={job.title}
              /> */}
                <List.Content>
                  <List.Header>{job.company}</List.Header>
                  <List.Description>{job.title}</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </Segment>
  );
};

export default ExperienceHandler;
