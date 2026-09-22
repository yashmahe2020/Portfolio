import React from 'react';
import { MORE_TALKS, PRESS, QUOTE, TALKS } from '../content';
import SectionHead from './SectionHead';

const Stage: React.FC = () => (
  <section id="stage" className="wrap section">
    <SectionHead title="On stage" index={3} />
    <div className="stage-grid">
      <figure className="quote">
        <blockquote>“{QUOTE.text}”</blockquote>
        <figcaption className="mono small muted">{QUOTE.source}</figcaption>
        <div className="press">
          <span className="eyebrow">Featured &amp; interviewed by</span>
          <p>{PRESS.join(' · ')}</p>
        </div>
      </figure>
      <ol className="talks">
        {TALKS.map((t) => (
          <li key={t.title} className={`talk ${t.featured ? 'is-featured' : ''}`}>
            <span className="mono talk-date">{t.date}</span>
            <div className="talk-body">
              <span className="talk-title">{t.title}</span>
              <span className="talk-detail">{t.detail}</span>
            </div>
            <span className={t.featured || t.big ? 'talk-num' : 'mono small muted talk-aside'}>{t.aside}</span>
          </li>
        ))}
        <li className="talk-more">
          <strong>Also:</strong> {MORE_TALKS}
        </li>
      </ol>
    </div>
  </section>
);

export default Stage;
