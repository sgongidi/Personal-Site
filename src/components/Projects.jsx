import React from "react";
import { Carousel, Button, ButtonGroup } from "react-bootstrap";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <Carousel>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/250"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>UNC CS Resume Database</h3>
            <p>
              Created a CS-oriented resumé database website on the cs.unc.edu
              domain that allows recruiters from department and hackathon
              sponsors to search and filter students’ resumés based on several
              attributes, including graduation year, programming languages, and
              frameworks
            </p>
            <ButtonGroup>
              <Button
                variant="dark"
                href="https://resumedatabase.cs.unc.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Button>
              <Button
                variant="dark"
                href="https://github.com/nikhil-vytla/unc-cs-resume-db"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
            </ButtonGroup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/250"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>D&amp;D Bros. Trucking Company</h3>
            <h4>Project Leader</h4>
            <p>
              Working in conjunction with the UNC Consult Your Community student
              organization to create a business website for a local trucking
              company
            </p>
            <ButtonGroup>
              <Button
                variant="dark"
                href="https://danddbros.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Button>
              <Button
                variant="dark"
                href="https://github.com/web-dev-carolina/CYCTrucking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
            </ButtonGroup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/250"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Waitr</h3>
            <p>
              Created a full stack web app for restaurants to queue incoming
              customers and notify them when a table is ready
            </p>
            <Button
              variant="dark"
              href="https://github.com/sgongidi/waitr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/250"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Local Blockchain</h3>
            <p>A simple blockchain with proof of work system</p>
            <Button
              variant="dark"
              href="https://github.com/sgongidi/Local-Blockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
