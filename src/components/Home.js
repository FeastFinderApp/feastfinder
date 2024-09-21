import React from 'react';
import './Home.css'; // For custom styles, if needed
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      {/* Navbar Section */}
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">Feast</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="home">
        {/* Main Page Section */}
        <section className="main_page">
          <div className="main_page-content">
            <h1>Welcome to FeastFinder</h1>
            <p>Making food delivery easier and faster. Enjoy your favorite meals at the comfort of your home.</p>
            <a href="#get-started" className="main_page-btn">Get Started</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="service-item">
            <h3>Food Delivery</h3>
            <p>Order food from your favorite restaurants, and we'll deliver it fresh to your door.</p>
          </div>
          <div className="service-item">
            <h3>Easy Pickup</h3>
            <p>Prefer to pick up your order? We offer convenient, contactless pickup options.</p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="call-to-action" className="cta">
          <h2>Ready to Satisfy Your Cravings?</h2>
          <a href="#products" className="cta-btn">Browse Our Menu</a>
        </section>
      </div>
    </>
  );
}

export default Home;
