import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment id="footer">
      <Card bg="dark" text="light"className="fixed-bottom">
        <Card.Body>
          <Container>
            <Card.Text>Created by Sai Gongidi. Copyright &copy; 2020</Card.Text>
          </Container>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Footer;
