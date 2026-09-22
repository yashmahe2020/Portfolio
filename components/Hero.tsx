import React from 'react';
import { HIGHLIGHTS, PROFILE } from '../content';
import { ArrowRight, GitHub, Instagram, LinkedIn } from './Icons';

const Hero: React.FC = () => (
  <>
    <section id="top" className="wrap hero">
      <div className="hero-copy">
        <p className="kicker">
          <span className="dot" />
          {PROFILE.kicker}
        </p>
        <h1>
          Yash
          <br />
          Maheshwari<span className="accent">.</span>
        </h1>
        <p className="hero-pitch">{PROFILE.pitch}</p>
        <div className="hero-actions">
          <a href={`mailto:${PROFILE.email}`} className="btn btn-accent">
            Get in touch <ArrowRight />
          </a>
          <a href={PROFILE.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noopener">
            <GitHub />
          </a>
          <a href={PROFILE.linkedin} className="icon-btn" aria-label="LinkedIn" target="_blank" rel="noopener">
            <LinkedIn />
          </a>
          <a href={PROFILE.instagram} className="icon-btn" aria-label="Instagram" target="_blank" rel="noopener">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={PROFILE.photo} alt="Portrait of Yash Maheshwari" width={420} height={520} />
        <div className="now-card">
          <span className="eyebrow">Now</span>
          <span className="now-text">{PROFILE.now}</span>
        </div>
      </div>
    </section>

    <section aria-label="Highlights" className="wrap highlights-wrap">
      <ul className="highlights">
        {HIGHLIGHTS.map((h) => (
          <li key={h.value}>
            <span className={`stat ${h.accent ? 'accent' : ''}`}>{h.value}</span>
            <span className="stat-label">{h.label}</span>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default Hero;
