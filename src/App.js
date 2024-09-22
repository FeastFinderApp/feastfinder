import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'; // Import the Home component
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      {/* Other components like Footer can go here */}
    </div>
  );
}

export default App;