import React from "react";
import { Card } from "react-bootstrap";
import Courses from "./Courses";
import Experience from "./Experience";

const About = () => {
  return (
    <Card id="about" bg="dark" text="light" style={{ marginBottom: "15vh" }}>
      <Card.Body>
        <Card.Title>About me</Card.Title>
        <Card.Text>
          I recently graduated from UNC Chapel Hill with a
          Bachelor of Arts in Computer Science and Cognitive Science minor. 
        </Card.Text>
        <Experience />
        <Courses />
      </Card.Body>
    </Card>
  );
};

export default About;