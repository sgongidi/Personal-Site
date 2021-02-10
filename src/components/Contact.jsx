import React from "react";
import { Card } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Card id="contact" bg="dark" text="light" style={{ "marginBottom": "15vh" }}>
      <Card.Body>
        <Card.Title>Contact me!</Card.Title>
        <Card.Text>Email: hire@saigongidi.com</Card.Text>
        <Card.Text>I'm interested in Software Engineering positions and freelance web development opportunities. Use the form below to get in touch with me</Card.Text>
        <ContactForm />
      </Card.Body>
    </Card>
  );
};

export default Contact;
