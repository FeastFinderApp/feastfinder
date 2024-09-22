import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <Navbar className="navbar">
        <Container>
            <Navbar.Brand href="#home"><img src="assets/img/ff_logo.png" height="30rem" alt="FeastFinder"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="about">About</Nav.Link>
                <Nav.Link as={Link} to="sample">Sample</Nav.Link>
                <Nav.Link as={Link} to="login">Login</Nav.Link>
                <Nav.Link as={Link} to="admin">Admin</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;