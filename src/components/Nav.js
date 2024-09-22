import React from "react";
import { Container, Navbar } from 'react-bootstrap';

function Nav(){
    return(
      <Navbar className="navbar">
        <Container>
            <Navbar.Brand href="#home" className='highlight_text' style={{ fontSize: '2rem' }}>Feast Finder</Navbar.Brand>
        </Container>
        </Navbar>
    );
}

export default Nav;