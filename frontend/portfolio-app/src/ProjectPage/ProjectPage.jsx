import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './ProjectPage.css';

const ProjectPage = () => {
  return (
    <div className="project-page">
      {/* Logo at grid intersection */}
      <div className="grid-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      
      <Navbar />
      <Sidebar />

      {/* Main Content Area */}
      <main className="project-main">
        <div className="project-content">
          {/* Left Column - Project Title */}
          <div className="title-column">
            <h1 className="project-title">
              <span className="title-line">Black</span>
              <span className="title-line">Star</span>
              <span className="title-line">Ville</span>
            </h1>
          </div>

          {/* Center Column - Hero Image */}
          <div className="image-column">
            <div className="hero-image-container">
              <img src="/Project1.png" alt="Black Star Ville" className="hero-image" />
              <div className="image-caption">
                <span className="caption-location">Sayulita Nayarit Mx.</span>
                <span className="caption-year">2024</span>
              </div>
            </div>
          </div>

          {/* Right Column - Project Info */}
          <div className="info-column">
            <div className="arrow-icon">↗</div>
            <h3 className="project-subtitle">Cosmic Connection</h3>
            <p className="project-description">
              Villa Estrella Negra blends history and elegance in an architectural gem where the layout reflects transformation and cosmic connection. Sustainability is a priority, with...
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ProjectPage;
