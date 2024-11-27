import React from 'react';

function Hobbies() {
  // Hobby Data with descriptions
  const hobbies = [
    {
      img: 'https://i.pinimg.com/736x/0e/1e/ac/0e1eaccfcdc68201c4844b86b62fd7f9.jpg',
      title: 'MLBB',
      description: 'Mobile Legends: Bang Bang (MLBB) is a popular mobile MOBA game where players team up to battle in fast-paced, strategic matches. I enjoy the teamwork, hero selection, and critical thinking involved in outsmarting opponents and achieving victory.',
      label: 'Strategy',
    },
    {
      img: 'https://i.pinimg.com/736x/74/20/3f/74203fe15961d8ff5efcf9b0ab889b86.jpg',
      title: 'Sky: COTL',
      description: 'Sky: Children of the Light (Sky: COTL) is an enchanting adventure game where players explore a magical world, solve puzzles, and connect with others. I love the relaxing, yet immersive gameplay and the beautiful art style.',
      label: 'Adventure',
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
        My Hobbies
      </h1>
      <p
        style={{
          fontSize: '1.2em',
          color: '#FFF',
          marginBottom: '40px',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        A glimpse into my favorite activities.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'flex-start',
        }}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              width: '300px', // Set a fixed width for the cards
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              transform: 'scale(1)',
              opacity: 1,
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
              {hobby.label}
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
                src={hobby.img}
                alt={hobby.title}
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
              {hobby.title}
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
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
