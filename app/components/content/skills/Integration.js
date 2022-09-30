import React from "react";
import { FaDocker, FaGithub } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { Header, List } from "semantic-ui-react";

const Integration = () => {
  return (
    <List>
      <List.Item>
        <Header as="h3">CI/CD</Header>
      </List.Item>
      <List.Item>
        <List.Icon>
          <FaDocker size="1.2em" />
        </List.Icon>
        <List.Content>Docker</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiKubernetes size="1.2em" />
        </List.Icon>
        <List.Content>Kubernetes</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <FaGithub size="1.2em" />
        </List.Icon>
        <List.Content>Github Actions</List.Content>
      </List.Item>
    </List>
  );
};

export default Integration;
