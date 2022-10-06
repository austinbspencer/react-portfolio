import React from "react";
import { Container, Embed, Header } from "semantic-ui-react";

const unsubscribe = () => {
  return (
    <Container>
      <Header as="h3" style={{ marginTop: "3em" }}>
        Click to unsubscribe...
      </Header>
      <Embed
        id="dQw4w9WgXcQ"
        placeholder="https://i.imgur.com/1nCZI1Z.gif"
        source="youtube"
      />
    </Container>
  );
};

export default unsubscribe;
