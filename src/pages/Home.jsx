import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#fff',
        padding: '40px 20px',
        background: 'linear-gradient(167deg, #082d33 30%, #0b6e74 90%, #0f8f98 100%, #6b9cba 100%, #2a4d63 100%)',
        height: 'calc(100vh - 1px)', // Fix for potential scrolling
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevents scrolling
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Centered Round Photo with Hover Effect */}
      <img
        src="https://web.facebook.com/photo/?fbid=1744725596355330&set=a.120363328791573"
        alt="Profile"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          objectFit: 'cover', // Ensures the image fits within the circle
          marginBottom: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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

      {/* Welcome Message */}
      <div>
        <h1 style={{ fontSize: '2.5rem'}}>Hi! I'm Jai</h1>
        <h2>Welcome to My Website. </h2>
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
    </div>
  );
}

export default Home;
