import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentUpload from './components/DocumentUpload.jsx';
import LandingPage from './components/LandingPage.jsx'; 
import AnalysisPage from './components/AnalysisPage.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import React, { useEffect } from 'react';
import './App.css';


const App = () => {
  useEffect(() => {
    // Clear all localStorage and sessionStorage data
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/documentupload" element={<DocumentUpload />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
