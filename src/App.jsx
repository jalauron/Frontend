import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './TopNav'; 

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

// You can add this as part of router setup if needed, or check for build config
const routerConfig = {
  future: {
    v7_relativeSplatPath: true, // This may be a custom setting, not standard in react-router
  },
};

function App() {
  return (
    <div>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
