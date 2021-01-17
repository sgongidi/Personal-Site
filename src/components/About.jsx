import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <Card id="about" bg="dark" text="light">
            <Card.Body>
                <Card.Title>About me</Card.Title>
                <Card.Text>
                    I am currently a senior at UNC Chapel Hill, graduating in May 2021 with a Computer Science B.A. and a Cognitive Science minor.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;