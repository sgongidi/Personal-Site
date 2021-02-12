import React, { Fragment } from "react";
import { Card, Container, ListGroup, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ListGroupItem from "./ListGroupItem";

const comp_courses = {
  "COMP 283": [
    "Discrete Structures",
    "Introduces discrete structures (sets, tuples, relations, functions, graphs, trees) and the formal mathematics (logic, proof, induction) used to establish their properties and those of algorithms that work with them. Develops problem-solving skills through puzzles and applications central to computer science.",
  ],
  "COMP 411": [
    "Computer Organization",
    "Digital logic, circuit components. Data representation, computer architecture and implementation, assembly language programming.",
  ],
  "COMP 426": [
    "Modern Web Programming",
    "Developing applications for the World Wide Web including both client-side and server-side programming. Emphasis on Model-View-Controller architecture, AJAX, RESTful Web services, and database interaction.",
  ],
  "COMP 431": [
    "Internet Services & Protocols",
    "Application-level protocols HTTP, SMTP, FTP, transport protocols TCP and UDP, and the network-level protocol IP. Internet architecture, naming, addressing, routing, and DNS. Sockets programming. Physical-layer technologies. Ethernet, ATM, and wireless.",
  ],
  "COMP 435": [
    "Computer Security Concepts",
    "Introduction to topics in computer security including confidentiality, integrity, availability, authentication policies, basic cryptography and cryptographic protocols, ethics, and privacy.",
  ],
  "COMP 521": [
    "Files & Databases",
    "Placement of data on secondary storage. File organization. Database history, practice, major models, system structure and design.",
  ],
  "COMP 523": [
    "Software Engineering Lab",
    "Organization and scheduling of software engineering projects, structured programming, and design. Each team designs, codes, and debugs program components and synthesizes them into a tested, documented program product.",
  ],
};

const cog_courses = {
  "PSYCH 330": [
    "Intro to Cognitive Science",
    "An introduction to the interdisciplinary study of the mind, intelligent behavior, information processing, and communication in living organisms and computers.",
  ],
  "ANTH 143": [
    "Human Evolution & Adaptation",
    "Evolutionary and ecological approach to understanding the human species' past and contemporary human variation. Emphasis on evolutionary processes, biological adaptation, and biocultural interactions with diverse environments.",
  ],
  "NSCI 222": [
    "Learning",
    "Topics in Pavlovian and operant (instrumental) conditioning, learning theory, higher order cognitive learning, and application of those principles to mental-health related situations.",
  ],
  "COMP 455": [
    "Models of Languages & Computation",
    "Introduction to the theory of computation. Finite automata, regular languages, pushdown automata, context-free languages, and Turing machines. Undecidable problems.",
  ],
};

const Title = styled(Card.Title)`
  margin-top: 5vh;
`;

const Subtitle = styled(Card.Subtitle)`
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const Courses = () => {
  return (
    <Fragment>
      <Title>Courses</Title>
      <Container>
        <Row className="justify-content-center">
          <Col sm>
            <Subtitle>Computer Science</Subtitle>
            <ListGroup>
              {Object.keys(comp_courses).map((key) => (
                <ListGroupItem
                  key={key}
                  course={key}
                  name={comp_courses[key][0]}
                  desc={comp_courses[key][1]}
                />
              ))}
            </ListGroup>
          </Col>
          <Col sm>
            <Subtitle>Cognitive Science</Subtitle>
            <ListGroup>
              {Object.keys(cog_courses).map((key) => (
                <ListGroupItem
                  key={key}
                  course={key}
                  name={cog_courses[key][0]}
                  desc={cog_courses[key][1]}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Courses;
