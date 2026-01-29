import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ProjectPage from './ProjectPage/ProjectPage';
import TalkPage from './TalkPage/TalkPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProjectPage />
      <TalkPage />
    </div>
  );
}

export default App;
