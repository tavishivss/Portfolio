import React from 'react';
import './TalkPage.css';

const TalkPage = () => {
  const handleContactClick = () => {
    // Add contact form logic or redirect here
    console.log('Contact button clicked');
  };

  return (
    <div className="talk-page">
      {/* Video Background */}
      <video autoPlay muted loop className="talk-background-video">
        <source src="/contact-background.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <main className="talk-main">
        <div className="talk-content">
          <h1 className="talk-title">Hi, let's talk!</h1>
          
          <div className="talk-description">
            <p>For inquiries or project requests, please feel free to contact us through our representative or the contact form.</p>
            <p>You don't need to have a fully defined vision or a clear "This is what I want!" at this stage.</p>
            <p>We can assist from organizing your challenges to providing concrete proposals, offering the most suitable support aligned with your goals.</p>
          </div>

          <button className="talk-contact-button" onClick={handleContactClick}>
            Contact <span className="arrow">↗</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default TalkPage;
