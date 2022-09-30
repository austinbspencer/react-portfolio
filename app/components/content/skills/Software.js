import React from "react";
import { Header, List } from "semantic-ui-react";
import { SiLinux, SiSnowflake, SiPostman } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const Software = () => {
  return (
    <List>
      <List.Item>
        <Header as="h3">Software</Header>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiSnowflake size="1.2em" />
        </List.Icon>
        <List.Content>Snowflake</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiLinux size="1.2em" />
        </List.Icon>
        <List.Content>Unix & Linux</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiPostman size="1.2em" />
        </List.Icon>
        <List.Content>Postman</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <FaGit size="1.2em" />
        </List.Icon>
        <List.Content>Git & Github</List.Content>
      </List.Item>
    </List>
  );
};

export default Software;
