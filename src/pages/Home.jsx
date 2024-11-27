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
        src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/452217871_1744725593021997_5564417717404322641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAZhk3IciyobhuWrpr-tlGj2pLLlvB8D6PaksuW8HwPrCX0EI5ktfqMzTQcon4nLACRFPpuoh85kHl71nO2KiU&_nc_ohc=TEgHzDhUmOgQ7kNvgFQalY0&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=A5wHPkVPgGWPReMVGDMvthR&oh=00_AYD1GVISROfktQMg-2eOdZoYbHPuUIEsJuoUgRz2s-ZKXQ&oe=6744669F"
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
