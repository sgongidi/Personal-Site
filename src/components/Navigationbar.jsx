import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigationbar = () => {
    // const [active, setActive] = useState("");

    // const handleSelect = (selected) => {
    //     setActive(selected);
    //     console.log(selected, active);
    // }

    return (
        <Navbar variant="dark" bg="dark" expand ="sm" sticky="top" style={{ "marginBottom": "5vh" }} className="navbar">
            <Navbar.Brand href="/">Sai Gongidi</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="pills" >
                    <Nav.Link href="/about" eventKey="about">About</Nav.Link>
                    <Nav.Link href="/projects" eventKey="projects">Projects</Nav.Link>
                    <Nav.Link href="/contact" eventKey="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;