import React from 'react';
import { IoLogoFacebook, IoLogoGithub, IoMail, IoCall, IoLogoInstagram } from 'react-icons/io5'; // Include Instagram icon

function Contact() {
  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #180018, #2a114b, #522959, #824d69)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '50px',
      }}
    >
      <h1
        style={{
          fontSize: '3em',
          marginBottom: '20px',
          fontFamily: '"Roboto", sans-serif',
          fontWeight: '900',
          letterSpacing: '2px',
          background: 'linear-gradient(90deg, #d9b2ad, #fee3d8)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Connect With Me
      </h1>
      <p
        style={{
          fontSize: '2em',
          marginBottom: '30px',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '300',
          letterSpacing: '1px',
          background: 'linear-gradient(90deg, #d9b2ad, #fee3d8)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Contact Info
      </p>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {/* Email */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoMail
            style={{
              marginRight: '15px',
              color: '#d93025',
              fontSize: '1.5em',
              transition: 'transform 0.3s ease', 
            }}
          />
          <a
            href="mailto:jalauron@gbox.ncf.edu.ph"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease, transform 0.3s ease', 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#d93025'; // Color change on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)'; // Scale the icon as well
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff'; // Reset color when not hovering
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)'; // Reset icon scale
            }}
          >
            jalauron@gbox.ncf.edu.ph
          </a>
        </li>

        {/* Phone */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoCall
            style={{
              marginRight: '10px',
              color: '#34a853',
              fontSize: '1.5em',
              transition: 'transform 0.3s ease', // Transition for scaling
            }}
          />
          <a
            href="tel:096627818787"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease, transform 0.3s ease', // Transition for scaling
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#34a853'; // Color change on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)'; // Scale the icon as well
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff'; // Reset color when not hovering
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)'; // Reset icon scale
            }}
          >
            09662781787
          </a>
        </li>

        {/* Facebook */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoLogoFacebook
            style={{
              marginRight: '10px',
              color: '#1877F2',
              fontSize: '1.5em',
              transition: 'transform 0.3s ease', // Transition for scaling
            }}
          />
          <a
            href="https://web.facebook.com/jayme.lauron.1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease, transform 0.3s ease', // Transition for scaling
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1877F2'; // Color change on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)'; // Scale the icon as well
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff'; // Reset color when not hovering
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)'; // Reset icon scale
            }}
          >
            Jayme Lauron
          </a>
        </li>

        {/* Instagram */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoLogoInstagram
            style={{
              marginRight: '10px',
              color: '#E1306C',
              fontSize: '1.5em',
              transition: 'transform 0.3s ease', // Transition for scaling
            }}
          />
          <a
            href="https://www.instagram.com/jaiyie_e/profilecard/?igsh=ZTN6aWZrY2h4MG8y&fbclid=IwY2xjawGzXcFleHRuA2FlbQIxMAABHWb3332h0gyTNwYxuEBmf01k99JTePmNYjBa4S22JBARwCvTxiPwGwGXuQ_aem_eEbAzOxBfUmg68GvTUzZlQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease, transform 0.3s ease', // Transition for scaling
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E1306C'; // Color change on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)'; // Scale the icon as well
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff'; // Reset color when not hovering
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)'; // Reset icon scale
            }}
          >
            @jaiyie_e
          </a>
        </li>

        {/* GitHub */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoLogoGithub
            style={{
              marginRight: '10px',
              color: '#fff',
              fontSize: '1.5em',
              transition: 'transform 0.3s ease', // Transition for scaling
            }}
          />
          <a
            href="https://github.com/jalauron"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease, transform 0.3s ease', // Transition for scaling
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff'; // Color change on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
              e.currentTarget.previousElementSibling.style.transform = 'scale(1.1)'; // Scale the icon as well
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff'; // Reset color when not hovering
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.previousElementSibling.style.transform = 'scale(1)'; // Reset icon scale
            }}
          >
            jalauron
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
