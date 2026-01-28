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

        {/* Bottom Left - Studio Name and Begin Button */}
        <div className="bottom-left">
          <div className="studio-name">
            <span className="punto">Tavishi Vemuri</span>
          </div>
          <button className="begin-button">Begin</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
