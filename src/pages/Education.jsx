import React from 'react';

function Education() {
  // Education Data with descriptions
  const educationData = [
    {
      name: 'Laguio Elementary School',
      image:
        'https://www.bing.com/th/id/OIP.0ZjYgvhDvkbKQu4dhY40IAAAAA?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description: 'Laguio Elementary School is a school located in the heart of the community, providing quality education to young learners with a focus on building strong foundations for the future.',
      label: 'Primary', // Label for this school
    },
    {
      name: 'Tomas Avila Andaya Senior National High School',
      image:
        'https://www.bing.com/th?id=OIP.tQt8uRc4_TvdAFpHcfQttQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description: 'Tomas Avila Andaya Senior National High School is renowned for its academic excellence and its commitment to molding the next generation of leaders and professionals.',
      label: 'Secondary', // Label for this school
    },
    {
      name: 'Naga College Foundation, Inc.',
      image:
        'https://aims.ncf.edu.ph/assets/images/ncfi-logo.png',
      description: 'Naga College Foundation, Inc. offers a wide range of higher education programs with a focus on student development, providing opportunities for both academic and professional growth.',
      label: 'Tertiary', // Label for this school
    },
  ];

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #180018, #2a114b, #522959, #824d69)',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '3em',
          marginBottom: '20px',
          color: '#FFF',
          fontWeight: 'bold',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Education
      </h1>
      <p
        style={{
          fontSize: '1.2em',
          color: '#FFF',
          marginBottom: '40px',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        A glimpse into my academic journey.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px', // Space between the items
          alignItems: 'flex-start', 
        }}
      >
        {educationData.map((school, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              padding: '30px',
              width: '300px', // Set a fixed width for the cards
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              transform: 'scale(1)', // Set initial scale to 1
              opacity: 1, // Ensure the card is visible initially
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              const description = e.currentTarget.querySelector('.description');
              if (description) {
                description.style.opacity = '1';
                description.style.maxHeight = '200px'; // Expand description height
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
              const description = e.currentTarget.querySelector('.description');
              if (description) {
                description.style.opacity = '0';
                description.style.maxHeight = '0'; // Collapse description height
              }
            }}
          >
            {/* Label Above Image */}
            <p
              style={{
                fontSize: '1em',
                fontWeight: '500',
                color: '#FFF',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px', // Adds space between label and image
              }}
            >
              {school.label}
            </p>
            <div
              style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '15px',
                transition: 'transform 0.3s ease',
              }}
            >
              <img
                src={school.image}
                alt={school.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '1.3em',
                color: '#FFF',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '500',
                marginBottom: '10px',
              }}
            >
              {school.name}
            </p>
            {/* Description with transition */}
            <p
              className="description"
              style={{
                fontSize: '1em',
                color: '#FFF',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '400',
                lineHeight: '1.5',
                opacity: '0', // Initially hidden
                maxHeight: '0', // Initially collapsed
                transition: 'opacity 0.5s ease, max-height 0.5s ease', // Smooth transition for opacity and max-height
                overflow: 'hidden', // Hide overflowed text
                marginTop: '10px',
              }}
            >
              {school.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
