import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSendMail = () => {
    window.location.href = 'mailto:a36s45.work@gmail.com';
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="email-box">
        <p><strong>Email us at:</strong> a36s45.work@gmail.com</p>
        <button className="send-button" onClick={handleSendMail}>
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default Contact;
