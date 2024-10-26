import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import FAQSupport from "./components/FAQSupport";
import SampleResto from "./components/SampleResto";
import Login from "./components/Login";
import NotFound from "./components/404NotFound"; // Ensure this is a default export
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import "./components/Home.css";
import "./components/GlobalStyle.css"

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar bg="transparent" expand="lg" className="navbar-transparent">
          <Container>
            <Navbar.Brand as={Link} to="/">
              feastfinder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/sample"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sample
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/faq"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  FAQSupport
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQSupport />} />
          <Route path="/sample" element={<SampleResto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
