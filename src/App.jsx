import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './pages/Home';

function App() {
  return (
    <div className="app">
      {/* Full-Width Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" className="ms-3">
          My Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 56px)', // Full height minus the navbar height
          textAlign: 'center',
        }}
      >
        {/* Centered Round Photo */}
        <img
          src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/452217871_1744725593021997_5564417717404322641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAZhk3IciyobhuWrpr-tlGj2pLLlvB8D6PaksuW8HwPrCX0EI5ktfqMzTQcon4nLACRFPpuoh85kHl71nO2KiU&_nc_ohc=TEgHzDhUmOgQ7kNvgFQalY0&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=A5wHPkVPgGWPReMVGDMvthR&oh=00_AYD1GVISROfktQMg-2eOdZoYbHPuUIEsJuoUgRz2s-ZKXQ&oe=6744669F"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover', // Ensures the image fits within the circle
            border: '4px solid white', // Optional: Adds a border around the photo
            marginBottom: '20px', // Space between the photo and text
          }}
        />

        {/* Welcome Message */}
        <div>
          <h1>Hi! Welcome to My Website</h1>
          <p>
            This is the main content area. Use the navigation bar to explore different sections.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
