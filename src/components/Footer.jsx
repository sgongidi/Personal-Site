import React from "react";
import { Card, Container } from "react-bootstrap";

const Footer = () => {
  return (
      <Card id="footer" bg="dark" text="light" className="fixed-bottom">
        <Card.Body>
          <Container>
            <Card.Text>Created by Sai Gongidi. &copy; 2021</Card.Text>
          </Container>
        </Card.Body>
      </Card>
  );
};

export default Footer;
