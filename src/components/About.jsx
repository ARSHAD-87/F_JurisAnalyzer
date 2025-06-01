import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About JurisAnalyzer</h1>
      <p className="intro">
        JurisAnalyzer is a legal document analysis tool designed to simplify the understanding of complex legal texts using AI-powered summarization and risk detection.
      </p>

      <div className="team-section">
        <div className="team-box">
          <h2>Team Coordinator</h2>
          <p>Mr. Shivam Dixit</p>
        </div>

        <div className="team-box">
          <h2>Team Guide</h2>
          <p>Er. Sarika Singh</p>
        </div>

        <div className="team-box">
          <h2>Team Members</h2>
          <ul>
            <li>Mohd. Arshad (2101221640036)</li>
            <li>Sanchit Singh (2101221640045)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
