import React from 'react';
import '../css/Navigationbar.css'
import { HashLink as HLink } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <Navbar sticky="top" className="navbar">
            <Navbar.Brand className="mr-auto logo-nav">Sai Gongidi</Navbar.Brand>
            <Nav className="mx-auto">
                <Nav.Link as={HLink} to="/#home">Home</Nav.Link>
                <Nav.Link as={HLink} to="/#about">About</Nav.Link>
                <Nav.Link as={HLink} to="/#projects">Projects</Nav.Link>
                <Nav.Link as={HLink} to="/#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigationbar;