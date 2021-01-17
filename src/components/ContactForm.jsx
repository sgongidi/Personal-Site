import React, { useState } from "react";
import app from "../firebase";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const myfunction = app.functions().httpsCallable("helloWorld");
    myfunction({ email: email, message: message })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <Container id="contact_form">
      <Form onSubmit={submitForm}>
        <Form.Group controlId="formBasicEmail" style={{ width: "20vw" }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          style={{ width: "50vw" }}
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Send me a message!"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button disabled variant="light" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
