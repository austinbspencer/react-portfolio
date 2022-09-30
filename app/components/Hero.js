import config from "../config";
import React from "react";
import { Container, Grid, Header, Icon, Image, List } from "semantic-ui-react";

const Hero = () => {
  return (
    <Container className="hero">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h1">Hello World!</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "15vh" }} columns={2}>
          <Grid.Column computer={8} tablet={12} mobile={16}>
            <Header as="h1" style={{ fontWeight: 400 }}>
              I am <b style={{ fontWeight: 900 }}>Austin Spencer</b>, a
              full-time data engineer with a passion for programming and problem
              solving :)
            </Header>
          </Grid.Column>
          <Grid.Column only="computer">
            <Image src="/logo-alt.png" size="small" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "15vh" }} columns={1}>
          <Grid.Column computer={8} tablet={12} mobile={16}>
            <List horizontal>
              <List.Item>
                <Header as="h5" color="grey">
                  Reach Out
                </Header>
              </List.Item>
              <List.Item as="a" href={`mailto:${config.email}`}>
                <Icon.Group size="huge">
                  <Icon loading size="big" name="circle notch" />
                  <Icon name="mail" />
                </Icon.Group>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Hero;
