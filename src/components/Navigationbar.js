import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <Navbar variant="dark" expand ="sm" sticky="top" className="navbar">
            <Navbar.Brand href="/">Sai Gongidi</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="pills">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;