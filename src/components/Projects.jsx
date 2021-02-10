import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, CardColumns } from "react-bootstrap";

const Projects = () => {
  return (
    <Container id="projects">
      <CardColumns style={{ "marginBottom": "15vh" }}>
        {/* <ProjectCard 
          title=""
          tools=""
          text=""
          github=""
          link=""
        /> */}
        <ProjectCard
          title="UNC CS Resumé Database"
          tools="HTML, CSS, Javascript, React.JS, Firebase, Node.JS, Bootstrap"
          text="The UNC Computer Science Department created the UNC Summer of Code 
          2020 program to provide a remote internship-like experience for students 
          who have experienced difficulty securing a summer internship as a result 
          of the COVID-19 pandemic. Students' resumés are available to recruiters 
          from department sponsors via PDF and Handshake, however they need to manually 
          search through these lists for potential candidates. In order to solve this 
          problem, we created a dynamic CS-oriented resumé database website on the 
          cs.unc.edu domain that allows recruiters to filter through students based on
          criteria such as graduation year and programming languages. Additionally, 
          recruiters can organize students into lists to save qualified candidates and 
          export these lists."
          github="https://github.com/nikhil-vytla/unc-cs-resume-db"
          link="https://resumedatabase.cs.unc.edu"
        />
        <ProjectCard 
          title="Web Dev Carolina Website"
          tools="MEAN Stack, Firebase"
          text="The main website for Web Dev Carolina. Used to showcase the
          club's work and connect with new members and clients. "
          github="https://github.com/web-dev-carolina/club-site"
          link="https://webdevcarolina.com/"
        />
        <ProjectCard
          title="D&amp;D Bros. Trucking Co. Website"
          tools="React.JS, CSS, Firebase, Node.JS, Bootstrap"
          text="Web Dev Carolina has worked remotely with 
          Consult Your Community UNC (CYC UNC) to create a Progressive 
          Web App for a local veteran- and black-owned trucking company 
          in order to establish an online presence."
          github="https://github.com/web-dev-carolina/CYCTrucking"
          link="https://danddbros.com"
        />
        <ProjectCard
          title="Personal Site"
          tools="Typescript, React.JS, CSS, Firebase, Node.JS, Bootstrap"
          text="A Progressive Web App that I use to showcase my work and 
          link to my online profiles."
          github="https://github.com/sgongidi/Personal-Site"
        />
        <ProjectCard
          title="Local Blockchain"
          tools="Python"
          text="A simple Blockchain with proof of work system to show how 
          Blockchain-based cryptocurrencies like Bitcoin work."
          github="https://github.com/sgongidi/Local-Blockchain"
        />
        <ProjectCard
          title="Study Buddy"
          tools="React"
          text="Semester long group project for COMP 523- Software Engineering Lab. 
          Study buddy aims to remove the early semester awkwardness 
          that comes along with searching for study partners. This Web App 
          will allow students to enter their class schedule to match them 
          with other potential students. From there, users can create a profile 
          and take a short survey to narrow down the list of potential partners 
          so that they can find the right match."
          github="https://github.com/sgongidi/"
          link="https://tarheels.live/523teamc/"
        />
        <ProjectCard
          title="Waitr"
          tools="HTML, CSS, Node.JS, Bulma"
          text="Final project for COMP 426- Modern Web Programming. Created a 
          full stack web app for restaurants to queue incoming customers and 
          notify them when a table is ready"
          github="https://github.com/sgongidi/waitr"
        />
      </CardColumns>
    </Container>
  );
};

export default Projects;
