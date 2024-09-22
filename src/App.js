import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import SampleResto from './components/SampleResto';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin'; // Ensure this path is correct
import './components/Home.css';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">feastfinder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/sample" className={({ isActive }) => isActive ? 'active' : ''}>Sample</Nav.Link>
              <Nav.Link as={NavLink} to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</Nav.Link>
              <Nav.Link as={NavLink} to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sample" element={<SampleResto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
