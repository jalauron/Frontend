import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './TopNav'; 

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <TopNav />
        <Routes>
        <Route path="/" component={<Home />} />
          <Route path="/Home" component={<Home />} />
          <Route path="/About" component={<About />} />
          <Route path="/Education" component={<Education />} />
          <Route path="/Hobbies" component={<Hobbies />} />
          <Route path="/Contact" component={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;