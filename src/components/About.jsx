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
          I am a senior at UNC Chapel Hill, graduating in May 2021 with a
          Bachelor of Arts in Computer Science and Cognitive Science minor. I am 
          actively seeking a post-graduation career in software engineering.
        </Card.Text>
        <Experience />
        <Courses />
      </Card.Body>
    </Card>
  );
};

export default About;