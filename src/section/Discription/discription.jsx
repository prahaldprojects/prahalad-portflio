import React, { useState } from 'react';


const projectDescription = {
  summary: "This is a summary of our exciting project, which involves several key areas such as interactive components, state management, and dynamic content handling.",
  details: "In my portfolio, I showcase a diverse range of web development projects that highlight my skills in HTML, CSS, JavaScript, and React.js, along with advanced frameworks and tools. I developed a Netflix clone using HTML, CSS, and JavaScript, featuring a user-friendly interface that closely mimics the Netflix experience. Additionally, I created an eCommerce website utilizing React.js and Redux for state management, which allows for smooth interactions and an enhanced user experience. I also built an interactive space-themed project and game using HTML, CSS, and JavaScript, focusing on engaging gameplay mechanics and animations. Another key project is a responsive music app, showcasing my ability to create visually appealing designs while ensuring a seamless experience across different devices. Each project reflects my commitment to developing functional and aesthetically pleasing applications while leveraging contemporary web technologies."
};

function Description() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="project-container">
      <div className="project-summary">
        <p>{projectDescription.summary}</p>
        <button className="toggle-button" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <div className="project-details">
          <p>{projectDescription.details}</p>
        </div>
      )}
      <hr /> {/* This <hr /> will always be visible */}
    </section>
  );
}

export default Description;
