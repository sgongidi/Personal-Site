import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const axios = require("axios");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(email, message);
    axios({
      method: "post",
      baseURL: "http://localhost:5001/personal-site-fda9e/us-central1",
      // baseURL: "https://us-central1-personal-site-fda9e.cloudfunctions.net",
      url: "/sendEmail",
      data: {
        email: email,
        message: message,
      },
    }).then(res => alert(`Message sent! I'll get in touch with you soon at ${email}`))
      .catch(err => console.error(err));
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
        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
