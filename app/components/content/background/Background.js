import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const Background = () => {
  return (
    <Segment raised id="background">
      <Header as="h1" textAlign="center" style={{ marginBottom: "1em" }}>
        Background
      </Header>
      <Container text>
        <p>
          I am currently a Data Engineer at USAA performing ELT with modern
          tools and programming. I work alongside some amazing people and also
          work closely with the Business to ensure we are delivering the correct
          and expected data. I graduated in May of 2019 with a bachelor's degree
          in Computer Science from the Fultun School of Engineering at Arizona
          State University.
        </p>
        <br />
        <p>
          I consider my skill set to be rather well-rounded. I try to
          consistently be learning new tools and skills in the world of IT. I
          have built several full-stack applications which have allowed me to
          gain an incredible amount of knowledge across the board.
        </p>
        <br />
        <p>
          Whenever I'm not on my computer, I enjoy playing sports, snowboarding,
          hanging out with friends, and walking my dog.
        </p>
      </Container>
    </Segment>
  );
};

export default Background;
