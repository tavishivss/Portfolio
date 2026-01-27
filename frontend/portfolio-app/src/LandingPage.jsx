import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* White Background Layer */}
      <div className="white-background"></div>
      
      {/* Video Background with Asterisk Mask */}
      <div className="video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img 
          src="/page 1.svg" 
          alt="" 
          className="svg-overlay"
        />
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Top Right - Language Selector */}
        <div className="top-right">
          <div className="language-selector">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0 L60 30 M60 0 L0 30' stroke='%23FFF' stroke-width='6'/%3E%3Cpath d='M0 0 L60 30 M60 0 L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0 V30 M0 15 H60' stroke='%23FFF' stroke-width='10'/%3E%3Cpath d='M30 0 V30 M0 15 H60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E"
              alt="UK Flag"
              className="flag-icon"
            />
            <span>EN</span>
            <span className="arrow">▼</span>
          </div>
        </div>

        {/* Bottom Left - Studio Name and Begin Button */}
        <div className="bottom-left">
          <div className="studio-name">
            <span className="punto">punto cero</span>
            <span className="studio-label">studio</span>
          </div>
          <button className="begin-button">Begin</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
