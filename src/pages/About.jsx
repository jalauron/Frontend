import React from 'react';

function About() {
  // Array of About Info Data
  const aboutInfo = [
    {
      title: 'Education',
      image: 'https://i.pinimg.com/236x/d7/b2/e5/d7b2e52d246dffe794a6a1c750a05593.jpg',
      description: 'I am currently pursuing a Bachelor of Science in Computer Science at university.',
      label: 'Academic',
    },
    {
      title: 'Travel Experience',
      image: 'https://i.pinimg.com/736x/c2/68/ab/c268aba236970be7b1ad37ffcb52b133.jpg',
      description: 'My trip to Singapore was an unforgettable experience. From the iconic Marina Bay Sands to the bustling streets of Chinatown, I had the chance to explore a vibrant blend of cultures, amazing food, and stunning architecture. It was a journey that broadened my horizons and deepened my appreciation for global diversity.',
      label: 'Global Experience',
    },
    {
      title: 'Birthday',
      image: 'https://i.pinimg.com/736x/60/bc/26/60bc2687b21b26e44dbd65172254a5b1.jpg',
      description: 'My birthday is on the 13th of September, 2004. It’s always a time to reflect on the past year, learn from it, and look forward to the future with renewed energy.',
      label: 'Personal',
    },
    {
      title: 'Fitness',
      image: 'https://i.pinimg.com/474x/a1/68/ba/a168bae5506f7c28c0b87dc119ee748c.jpg',
      description: 'Although I’m still working on improving my fitness level, I’m committed to staying active and focusing on my physical health by incorporating more workouts and healthy habits into my routine.',
      label: 'Health',
    },
    {
      title: 'Interests',
      image: 'https://i.pinimg.com/736x/7c/04/f8/7c04f8183324a5f4d533048c26c517f5.jpg',
      description: 'Apart from my studies, I have a strong interest in technology, gaming, and exploring new hobbies. I enjoy keeping up with the latest tech trends and challenging myself with online multiplayer games.',
      label: 'Hobbies',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #180018, #2a114b, #522959, #824d69)',
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '3em',
          marginBottom: '20px',
          color: '#FFF',
          fontWeight: 'bold',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        About Me
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'flex-start',
        }}
      >
        {/* Individual Info Blocks */}
        {aboutInfo.map((info, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              width: '270px',
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
                description.style.maxHeight = '350px'; // Expand description height
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
                marginBottom: '10px',
              }}
            >
              {info.label}
            </p>

            {/* Image */}
            <div
              style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '15px',
              }}
            >
              <img
                src={info.image}
                alt={info.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>

            {/* Info Title */}
            <p
              style={{
                fontSize: '1.3em',
                color: '#FFF',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '500',
                marginBottom: '10px',
              }}
            >
              {info.title}
            </p>

            {/* Description */}
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
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
