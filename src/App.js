import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'; // Import the Home component
import Nav from './components/Nav';
import About from './components/About';
import SampleResto from './components/SampleResto';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sample" element={<SampleResto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<LoginAdmin />} />
        </Routes>
      {/* Other components like Footer can go here */}
      </Router>
      
  );
}

export default App;