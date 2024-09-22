import React from "react";
import "./Home.css"; // For custom styles, if needed

const Home = () => {
  return (
    <div className="home">
      <section className="main_page">
        <div className="main_page-content">
          <h1>Make food delivery </h1>
          <h1 className="highlight_text">yours</h1>
          <p>
            Setting up your own delivery or on-site ordering <br></br>is no
            longer impossible or a hassle.
          </p>
          <a href="#get-started" className="main_page-btn">
            Get Started!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
