import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";
import { Container, CardColumns } from "react-bootstrap";

const Projects = () => {
  return (
    <Fragment id="projects">
      <Container>
        <CardColumns>
          <ProjectCard
            title="UNC CS Resume Database"
            text="Created a CS-oriented resume database website on the cs.unc.edu
                domain that allows recruiters from department and hackathon
                sponsors to search and filter students’ resumes based on several
                attributes, including graduation year, programming languages,
                and frameworks"
            github="https://github.com/nikhil-vytla/unc-cs-resume-db"
            link="https://resumedatabase.cs.unc.edu"
          />
          <ProjectCard
            title="Personal Site"
            text="This website, which I use to showcase all of my work"
            github="https://github.com/sgongidi/Personal-Site"
          />
          <ProjectCard
            title="D&amp;D Bros. Trucking Company"
            text="Working in conjunction with the UNC Consult Your Community
            student organization to create a business website for a local
            trucking company"
            github="https://github.com/web-dev-carolina/CYCTrucking"
            link="https://danddbros.com"
          />
          <ProjectCard
            title="Waitr"
            text="Created a full stack web app for restaurants to queue incoming
            customers and notify them when a table is ready"
            github="https://github.com/sgongidi/waitr"
          />
          <ProjectCard
            title="Local Blockchain"
            text="A simple blockchain with proof of work system"
            github="https://github.com/sgongidi/Local-Blockchain"
          />
        </CardColumns>
      </Container>
    </Fragment>
  );
};

export default Projects;
