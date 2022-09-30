import React from "react";
import { Header, List } from "semantic-ui-react";
import { FaJava, FaPython } from "react-icons/fa";
import { SiCplusplus, SiGoogle, SiJavascript, SiHtml5 } from "react-icons/si";

const Languages = () => {
  return (
    <List>
      <List.Item>
        <Header as="h3">Languages</Header>
      </List.Item>
      <List.Item>
        <List.Icon>
          <FaPython size="1.2em" />
        </List.Icon>
        <List.Content>Python</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiGoogle size="1.2em" />
        </List.Icon>
        <List.Content>Golang</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiCplusplus size="1.2em" />
        </List.Icon>
        <List.Content>C++</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <FaJava size="1.2em" />
        </List.Icon>
        <List.Content>Java</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiJavascript size="1.2em" />
        </List.Icon>
        <List.Content>JavaScript</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiHtml5 size="1.2em" />
        </List.Icon>
        <List.Content>HTML/CSS</List.Content>
      </List.Item>
    </List>
  );
};

export default Languages;
