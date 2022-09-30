import React from "react";
import { Divider, Header, Icon, Image, List } from "semantic-ui-react";

const Project = ({ proj, withDivider }) => {
  return (
    <React.Fragment>
      {withDivider && <Divider />}
      <Image src={proj.image} floated="left" size="small" />
      <Header as="h3">{proj.title}</Header>
      <p>{proj.description}</p>
      <List bulleted horizontal>
        {proj.stack.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
      <br />
      <List horizontal link size="large">
        {proj.links.map((link, idx) => (
          <List.Item
            key={idx}
            as="a"
            href={link.href}
            target="_blank"
            rel="nofollow noopener"
          >
            <Icon circular name={link.icon} />
          </List.Item>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Project;
