import config from "../config";
import React from "react";
import {
  Container,
  Divider,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment vertical style={{ marginTop: "5em" }}>
      <Container textAlign="center">
        <Divider section />
        <Image centered size="mini" src="/logo.png" />
        <List horizontal link size="large">
          <List.Item as="a" href={`mailto:${config.email}`}>
            <Icon circular name="mail" />
          </List.Item>
          <List.Item
            as="a"
            href={config.link.github}
            target="_blank"
            rel="nofollow noopener"
          >
            <Icon circular name="github" />
          </List.Item>
          <List.Item
            as="a"
            href={config.link.linkedin}
            target="_blank"
            rel="nofollow noopener"
          >
            <Icon circular name="linkedin" />
          </List.Item>
          <List.Item
            as="a"
            href={config.link.discord}
            target="_blank"
            rel="nofollow noopener"
          >
            <Icon circular name="discord" />
          </List.Item>
        </List>
        <br />
        <p>&copy; Austin – {new Date().getFullYear()}</p>
      </Container>
    </Segment>
  );
};

export default Footer;
