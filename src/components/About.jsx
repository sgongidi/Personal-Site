import React from 'react';
import { Card/*, ListGroup*/ } from 'react-bootstrap';
// import ListGroupItem from "./ListGroupItem";

const About = () => {
    return (
        <Card id="about" bg="dark" text="light">
            <Card.Body>
                <Card.Title>About me</Card.Title>
                <Card.Text>
                    I am a senior at UNC Chapel Hill, graduating in May 2021 with a Bachelor of Arts in Computer Science and a Cognitive Science minor.
                </Card.Text>
                {/* <Card.Subtitle>Courses</Card.Subtitle><br />
                <ListGroup>
                    <ListGroupItem course="COMP 410" name="Data Structures" />
                    <ListGroupItem course="COMP 411" name="Computer Organization" />
                    <ListGroupItem course="COMP 426" name="Modern Web Programming" />
                    <ListGroupItem course="COMP 431" name="Internet Services &amp; Protocols" />
                    <ListGroupItem course="COMP 455" name="Models of Languages and Computation" />
                </ListGroup> */}
            </Card.Body>
        </Card>
    );
}

export default About;