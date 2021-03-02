import React, { useState } from "react";
import { Button, Form, Card, Container, Col } from "react-bootstrap";
import * as axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter your name");
    if (!email) return alert("Please enter your email");

    // console.log(name, email);
    axios({
      method: "post",
    //   baseURL: "http://localhost:5001/personal-site-fda9e/us-central1",
      baseURL: "https://us-central1-personal-site-fda9e.cloudfunctions.net",
      url: "/sendPlexSignup",
      data: {
        name: name,
        email: email,
      },
    })
      .then((res) =>
        alert(`Signup request sent!`)
      )
      .catch((err) => console.error(err));
  };

  return (
    <Container id="plex_signup_form">
      <Form onSubmit={submitForm}>
        <Form.Text as={Card.Title}>Signup for Plex</Form.Text>
        <Form.Group style={{ "marginLeft": "1vw" }}>
          <Form.Row>
            <Form.Group as={Col} sm="auto">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm="auto">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button id="submitSignup" variant="info" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignupForm;
