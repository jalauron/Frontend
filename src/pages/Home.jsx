import React from 'react';
import { Link } from 'react-router-dom';
import ako2 from './ako2.png';  // Import the new image

function Home() {
  return (
    <div
      style={{ 
        textAlign: 'center',
        color: '#fff',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #180018, #2a114b, #522959, #824d69)',
        height: 'calc(100vh - 1px)', // Fix for potential scrolling
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevents scrolling
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Welcome Message */}
      <div>
        <h1 style={{ fontSize: '2.5rem' }}>Hi! I'm Jai</h1>
        <h2>Welcome to My Website.</h2>
        <p>
          This is the main content area. Use the navigation bar to explore different sections.
        </p>
      </div>

      {/* Get in Touch Button */}
      <Link
        to="/contact"
        style={{
          marginTop: '20px',
          textDecoration: 'none',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: '600',
          padding: '10px 20px',
          borderRadius: '25px',
          background: 'linear-gradient(267deg, #970d1a, #4e204d)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        }}
      >
        Get in Touch
      </Link>

      {/* Centered Photo Below the Text */}
      <img
        src={ako2}  // Use the newly imported image here
        alt="Profile"
        style={{
          width: '80%',  // Make the image width responsive based on the screen size
          maxWidth: '600px',  // Max width for larger screens
          height: 'auto',  // Maintain aspect ratio
          objectFit: 'cover', // Ensures the image fits correctly
          marginTop: '30px',  // Adds space between text and image
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          filter: 'contrast(1.2) brightness(1.1)', // Enhances contrast and brightness
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}

export default Home;
