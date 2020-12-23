import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{width: "20vw"}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1" style={{width: "50vw"}}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Send me a message!"/>
        </Form.Group>
        <Button variant="primary" type="submit" disabled>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
