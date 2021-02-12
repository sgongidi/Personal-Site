import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const StyledCard = styled(Card)`
  cursor: pointer;
  // &:hover {
  //   .subtitle {
      
  //   }
  // }
`;

const ProjectCard = ({ title, tools, text, github, link }) => {
  const [toggle, toggleText] = useState(false);
  const onClick = () => toggleText(!toggle);
  return (
    <StyledCard bg="dark" text="light" onClick={onClick}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        { toggle ? <Card.Text>{text}</Card.Text> : null }
        <Card.Subtitle>Languages and Frameworks:</Card.Subtitle>
        <Card.Text>{tools}</Card.Text>
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
              style={{ "fontSize": "1.5em" }}
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
