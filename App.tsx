import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import Experience from './components/Experience';
import Stage from './components/Stage';
import Policy from './components/Policy';
import Founded from './components/Founded';
import Footer from './components/Footer';

const useReveal = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const App: React.FC = () => {
  useReveal();
  return (
    <>
      <a href="#research" className="skip-link">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Research />
        <Experience />
        <Stage />
        <Policy />
        <Founded />
      </main>
      <Footer />
    </>
  );
};

export default App;
