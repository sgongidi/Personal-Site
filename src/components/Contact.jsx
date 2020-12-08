import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import '../css/Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <Card>
                <Card.Body>
                    <Card.Title>Contact me!</Card.Title>
                    <Card.Text>
                        contact@saigongidi.com
                    </Card.Text>
                    <ButtonGroup>
                        <Button variant="dark" href="https://github.com/sgongidi" target="_blank" rel="noopener noreferrer">Github Profile</Button>
                        <Button variant="dark" href="https://www.linkedin.com/in/sai-gongidi/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Contact;