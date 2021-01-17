import React from "react";
import styled from "styled-components";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const StyledCard = styled(Card)`
  cursor: pointer;
  // &:hover {
  // }
`;

const ProjectCard = ({ title, text, github, link }) => {
  return (
    <StyledCard border="primary" bg="dark" text="light">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup>
          <Button
            variant="light"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github-square"
              style={{ "font-size": "1.5em" }}
            ></i>{" "}
            Github
          </Button>
          {link != null ? (
            <Button
              variant="light"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </Button>
          ) : null}
        </ButtonGroup>
      </Card.Footer>
    </StyledCard>
  );
};

export default ProjectCard;
