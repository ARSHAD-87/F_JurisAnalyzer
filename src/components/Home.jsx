import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to <span className="highlight">JurisAnalyzer</span></h1>
        <p>
          JurisAnalyzer is an AI-powered platform that simplifies legal document analysis. Whether you're a legal professional or just need to understand a contract, we've got you covered.
        </p>
      </div>

      <div className="objectives-section">
        <h2>Our Objectives</h2>
        <ul>
          <li>Generate instant summaries of legal content.</li>
          <li>Highlight potential risks and important clauses.</li>
          <li>Provide easy-to-read insights for any user.</li>
          <li>Ensure document privacy and data security.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;