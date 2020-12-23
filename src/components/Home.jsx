import React, { Fragment } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const Home = () => {
  return (
    <Fragment id="home">
      <Card bg="dark" text="light">
        <Card.Body>
          <Card.Title>Welcome to my personal website!</Card.Title>
          <Card.Text>
            This site is currently in progress. Come back soon to see the
            finished website.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            <Button
              variant="primary"
              href="https://github.com/sgongidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" style={{"font-size": "1.5em"}}></i> Github Profile
            </Button>
            <Button
              variant="primary"
              href="https://www.linkedin.com/in/sai-gongidi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" style={{"font-size": "1.5em"}}></i> LinkedIn Profile
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default Home;
