import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <Fragment id="about">
            <Card bg="dark" text="light">
                <Card.Body>
                    <Card.Title>About me</Card.Title>
                    <Card.Text>
                        I am currently a senior at UNC Chapel Hill, graduating in May 2021 with a Computer Science B.A. and a Cognitive Science minor.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default About;