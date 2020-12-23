import React, { Fragment } from "react";
import {
  Container,
  Card,
  Button,
  ButtonGroup,
  CardColumns,
} from "react-bootstrap";

const Projects = () => {
  return (
    <Fragment id="projects">
      <Container>
        <CardColumns>
          <Card border="primary" bg="dark" text="light">
            <Card.Body>
              <Card.Title>UNC CS Resume Database</Card.Title>
              <Card.Text>
                Created a CS-oriented resume database website on the cs.unc.edu
                domain that allows recruiters from department and hackathon
                sponsors to search and filter students’ resumes based on several
                attributes, including graduation year, programming languages,
                and frameworks
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button
                  variant="light"
                  href="https://resumedatabase.cs.unc.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Button>
                <Button
                  variant="light"
                  href="https://github.com/web-dev-carolina/CYCTrucking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>Personal Site</Card.Title>
              <Card.Text>
                This website, which I use to showcase all of my work
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="light"
                href="https://github.com/sgongidi/Personal-Site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
            </Card.Footer>
          </Card>
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>D&amp;D Bros. Trucking Company</Card.Title>
              <Card.Text>
                Working in conjunction with the UNC Consult Your Community
                student organization to create a business website for a local
                trucking company
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button
                  variant="light"
                  href="https://danddbros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Button>
                <Button
                  variant="light"
                  href="https://github.com/web-dev-carolina/CYCTrucking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>Waitr</Card.Title>
              <Card.Text>
                Created a full stack web app for restaurants to queue incoming
                customers and notify them when a table is ready
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                {/* <Button
                  variant="light"
                  href="https://danddbros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Button> */}
                <Button
                  variant="light"
                  href="https://github.com/sgongidi/waitr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>

          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>Local Blockchain</Card.Title>
              <Card.Text>
                A simple blockchain with proof of work system
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                {/* <Button
                  variant="light"
                  href="https://danddbros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Button> */}
                <Button
                  variant="light"
                  href="https://github.com/sgongidi/waitr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </CardColumns>
      </Container>
    </Fragment>
  );
};

export default Projects;
