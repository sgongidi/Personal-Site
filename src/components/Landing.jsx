import React from 'react';
import Navigationbar from './Navigationbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
// import '../css/Landing.css';

const Landing = () => {

    return(
        <Container fluid>
            <Navigationbar />
            <Row>
                <Col>
                    <Home />
                </Col>
            </Row>
            <Row>
                <Col>
                    <About />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Projects />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Contact />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );

}

export default Landing;