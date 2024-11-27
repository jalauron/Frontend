import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
import { Navbar, Nav, Container } from 'react-bootstrap';

function TopNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);  // To handle the collapse state on mobile

  // Scroll to the top whenever the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  const getGradientForPage = (path) => {
    switch (path) {
      case '/':
        return 'linear-gradient(167deg, #082d33 30%, #0b6e74 90%, #0f8f98 100%, #6b9cba 100%, #2a4d63 100%)';
      case '/about':
        return 'linear-gradient(135deg, #1a1b36, #42164b, #622347, #a54055)';
      case '/education':
        return 'linear-gradient(137deg, #213239 10%, #616e6d 30%, #c77b63 50%, #ba2d15, #3f1c10)';
      case '/hobbies':
        return 'linear-gradient(135deg, #180018, #2a114b, #522959, #824d69)';
      case '/contact':
        return 'linear-gradient(167deg, #232f49 5%, #374256 47%, #b2192b 100%, #541b2e 100%)';
      default:
        return '#1a1b36'; // Default color if not on any specific page
    }
  };

  // Handle collapsing the navbar when a link is clicked
  const handleNavLinkClick = () => {
    if (window.innerWidth < 992) { // Only collapse on small screens (Bootstrap's default lg breakpoint)
      setIsOpen(false);  // Close the navbar
    }
  };

  return (
    <Navbar expand="lg" style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Container>
        {/* "My Personal Website" Text */}
        <Navbar.Brand href="/" style={{ color: '#000', fontSize: '1.5rem', fontWeight: '700' }}>
          My Personal Website
        </Navbar.Brand>

        {/* Hamburger button for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setIsOpen(!isOpen)} />

        <Navbar.Collapse id="navbar-nav" in={isOpen}>
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`btn ${location.pathname === '/' ? 'btn-primary active' : 'btn-light'}`}
              style={{
                background: location.pathname === '/' ? getGradientForPage('/') : 'transparent',
                color: location.pathname === '/' ? '#fff' : '#000',  // Change text to white when active
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                transition: 'background 0.3s ease, transform 0.2s ease, color 0.3s ease',
              }}
              onClick={handleNavLinkClick}  // Collapse navbar on click
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // On hover: slightly increase the size
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // On mouse leave: revert to normal size
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={`btn ${location.pathname === '/about' ? 'btn-secondary active' : 'btn-light'}`}
              style={{
                background: location.pathname === '/about' ? getGradientForPage('/about') : 'transparent',
                color: location.pathname === '/about' ? '#fff' : '#000',  // Change text to white when active
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                transition: 'background 0.3s ease, transform 0.2s ease, color 0.3s ease',
              }}
              onClick={handleNavLinkClick}  // Collapse navbar on click
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // On hover: slightly increase the size
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // On mouse leave: revert to normal size
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/education"
              className={`btn ${location.pathname === '/education' ? 'btn-success active' : 'btn-light'}`}
              style={{
                background: location.pathname === '/education' ? getGradientForPage('/education') : 'transparent',
                color: location.pathname === '/education' ? '#fff' : '#000',  // Change text to white when active
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                transition: 'background 0.3s ease, transform 0.2s ease, color 0.3s ease',
              }}
              onClick={handleNavLinkClick}  // Collapse navbar on click
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // On hover: slightly increase the size
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // On mouse leave: revert to normal size
            >
              Education
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/hobbies"
              className={`btn ${location.pathname === '/hobbies' ? 'btn-danger active' : 'btn-light'}`}
              style={{
                background: location.pathname === '/hobbies' ? getGradientForPage('/hobbies') : 'transparent',
                color: location.pathname === '/hobbies' ? '#fff' : '#000',  // Change text to white when active
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                transition: 'background 0.3s ease, transform 0.2s ease, color 0.3s ease',
              }}
              onClick={handleNavLinkClick}  // Collapse navbar on click
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // On hover: slightly increase the size
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // On mouse leave: revert to normal size
            >
              Hobbies
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={`btn ${location.pathname === '/contact' ? 'btn-warning active' : 'btn-light'}`}
              style={{
                background: location.pathname === '/contact' ? getGradientForPage('/contact') : 'transparent',
                color: location.pathname === '/contact' ? '#fff' : '#000',  // Change text to white when active
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                transition: 'background 0.3s ease, transform 0.2s ease, color 0.3s ease',
              }}
              onClick={handleNavLinkClick}  // Collapse navbar on click
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // On hover: slightly increase the size
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // On mouse leave: revert to normal size
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
