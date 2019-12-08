import React from "react";

import { Container, Segment, List } from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Segment
        vertical
        style={{
          margin: "1em -10em -10em",
          background: "white",
          color: "black",
          marginTop: "5em",
          fontWeight: 600,
          textAlign: "center"
        }}
      >
        <Container textAlign="center">
          <List horizontal divided link size="small">
            <p>Project Laundry Team - Copyright @ 2019 </p>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
