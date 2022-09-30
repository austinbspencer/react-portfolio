import React from "react";
import { Header, List } from "semantic-ui-react";
import { SiPostgresql, SiRedis, SiMongodb, SiDbt } from "react-icons/si";

import { GiAcorn } from "react-icons/gi";

const Databases = () => {
  return (
    <List>
      <List.Item>
        <Header as="h3">Databases & Tools</Header>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiPostgresql size="1.2em" />
        </List.Icon>
        <List.Content>Postgresql</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiRedis size="1.2em" />
        </List.Icon>
        <List.Content>Redis</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiMongodb size="1.2em" />
        </List.Icon>
        <List.Content>MongoDB</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <SiDbt size="1.2em" />
        </List.Icon>
        <List.Content>DBT</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon>
          <GiAcorn size="1.2em" />
        </List.Icon>
        <List.Content>SQuirrel</List.Content>
      </List.Item>
    </List>
  );
};

export default Databases;
