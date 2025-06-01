import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // auth state
  const navigate = useNavigate();

  useEffect(() => {
    // Check both localStorage and sessionStorage for the userToken
    const persistentToken = localStorage.getItem("userToken");
    const temporaryToken = sessionStorage.getItem("userToken");

    // Set isAuthenticated to true if either token exists
    setIsAuthenticated(!!persistentToken || !!temporaryToken);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const goToUploadPage = () => {
    if (!isAuthenticated) {
      alert("You must be signed in to continue.");
      navigate("/login");
    } else {
      navigate("/DocumentUpload");
    }
  };

  return (
    <div className="landing-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Jurisanalyzer</div>
        <div className="hamburger" onClick={toggleMenu}>☰</div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li className="mobile-auth">
            <Link to="/login"><button className='login'>Login</button></Link>
            <Link to="/signup"><button className='signup'>Sign Up</button></Link>
          </li>
        </ul>
      </nav>

      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <h1>Jurisanalyzer</h1>
          <p>Analyze Legal Documents Instantly with AI.</p>
          <button onClick={goToUploadPage}>Let's Go</button>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works" id="how-it-works">
          <h2>How It Works</h2>
          <p className="subtitle">Three simple steps to get started</p>
          <div className="cards-container">
            <div className="card">
              <div className="card-number">1</div>
              <h3>Upload Document</h3>
              <p>Upload your legal document easily.</p>
            </div>
            <div className="card">
              <div className="card-number">2</div>
              <h3>AI Analysis</h3>
              <p>Let our AI process and extract key information.</p>
            </div>
            <div className="card">
              <div className="card-number">3</div>
              <h3>Get Report</h3>
              <p>Download a summarized, easy-to-read report.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Jurisanalyzer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;