import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import PlexForm from "./PlexForm";
import SignupForm from "./SignupForm";

const Plex = () => {
  return (
    <Container>
      <Card id="contact" bg="dark" text="light" style={{"marginBottom": "10vh"}}>
        <Card.Body>
          <Button
            style={{ "marginBottom": "2vh", "marginLeft": "4vw" }}
            variant="warning"
            href="https://app.plex.tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Plex
          </Button>
          <Row>
            <Col md>
              <PlexForm />
            </Col>
            <Col md>
              <SignupForm />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Plex;
