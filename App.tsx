
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Speaking from './components/Speaking';
import Research from './components/Research';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-primary/20 selection:text-primary antialiased">
      <Background />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Speaking />
        <Research />
        <Projects />
        <Awards />
        <Resume />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;
