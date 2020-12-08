import React from 'react';
import { Card } from 'react-bootstrap';
// import '../css/about.css';

const About = () => {
    return (
        <div id="about">
            <Card>
                <Card.Body>
                    <Card.Title>About me</Card.Title>
                    <Card.Text>
                        I am currently a senior at UNC Chapel Hill, graduating in May 2021 with a Computer Science B.A. and a Cognitive Science minor.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;