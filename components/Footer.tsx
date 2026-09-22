import React from 'react';
import { PROFILE } from '../content';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-cta">
          <span className="kicker">Research, speaking, collaborations</span>
          <a href={`mailto:${PROFILE.email}`} className="say-hi">
            Say hi<span className="accent">.</span>
          </a>
          <span className="footer-email">{PROFILE.email}</span>
        </div>
        <div className="footer-links">
          <a href={PROFILE.github} className="btn btn-ghost" target="_blank" rel="noopener">GitHub</a>
          <a href={PROFILE.linkedin} className="btn btn-ghost" target="_blank" rel="noopener">LinkedIn</a>
          <a href={PROFILE.resume} className="btn btn-dark" target="_blank" rel="noopener">Résumé</a>
        </div>
      </div>
      <div className="footer-bottom mono small muted">
        <span>© {new Date().getFullYear()} Yash Maheshwari</span>
        <span>Mountain View, California</span>
      </div>
    </div>
  </footer>
);

export default Footer;
