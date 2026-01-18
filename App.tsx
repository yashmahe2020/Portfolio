
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Speaking from './components/Speaking';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-primary/20 selection:text-primary antialiased">
      {/* Subtle Light Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[20%] left-[5%] w-[20%] h-[20%] bg-secondary/5 blur-[100px] rounded-full"></div>
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Speaking />
        <Research />
        <Projects />
        <Skills />
        <Awards />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
