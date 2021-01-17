import React from "react";
import { Card } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Card id="contact" bg="dark" text="light">
      <Card.Body>
        <Card.Title>Contact me!</Card.Title>
        <Card.Text>Email: me@saigongidi.com</Card.Text>
        <Card.Text>I'm interested in freelance web development opportunities. Use the form below to tell me about your idea and I'll get in touch as soon as possible!</Card.Text>
        <ContactForm />
      </Card.Body>
    </Card>
  );
};

export default Contact;
