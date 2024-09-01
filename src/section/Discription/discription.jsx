import React, { useState } from 'react';


const projectDescription = {
  summary: "This is a summary of our exciting project which involves several key areas such as interactive components, state management, and dynamic content handling.",
  details: "In my portfolio, I showcase a diverse range of web development projects that highlight my skills in HTML, CSS, and JavaScript, along with advanced frameworks and tools. I developed a Netflix clone using HTML, CSS, JavaScript, and Tailwind CSS, focusing on creating a responsive and visually appealing interface similar to Netflix's user experience. Additionally, I built a React.js dashboard that provides data visualization and management features, demonstrating my ability to work with modern JavaScript libraries. I also designed an interactive space-themed game with HTML, CSS, and JavaScript, incorporating engaging gameplay mechanics and animations. Another key project is a tourism website, currently in progress, which aims to offer comprehensive information and links about various travel destinations. Each project reflects my commitment to creating functional and aesthetically pleasing applications while leveraging contemporary web technologies. link space =  https://www.linkedin.com/posts/prahalad-prajapat-b59bb0263_spacetourism-html-css-activity-7181889238911639552-YB1t?utm_source=share&utm_medium=member_android"
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
