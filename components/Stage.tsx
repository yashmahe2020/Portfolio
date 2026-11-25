import React from 'react';
import { KEYNOTE, MORE_TALKS, PRESS, QUOTE, TALKS } from '../content';
import SectionHead from './SectionHead';

const Stage: React.FC = () => (
  <section id="stage" className="wrap section">
    <SectionHead title="On stage" index={3} />
    <div className="stage-grid">
      <div className="stage-side">
        <a href={KEYNOTE.href} className="keynote-card" target="_blank" rel="noopener">
          <img src={KEYNOTE.image} alt={KEYNOTE.alt} width={644} height={809} loading="lazy" />
        </a>
        <figure className="quote">
          <blockquote>“{QUOTE.text}”</blockquote>
          <figcaption className="mono small muted">{QUOTE.source}</figcaption>
          <div className="press">
            <span className="eyebrow">Featured &amp; interviewed by</span>
            <ul className="chips">
              {PRESS.map((p) =>
                p.href ? (
                  <li key={p.name}>
                    <a href={p.href} className="chip" target="_blank" rel="noopener">
                      {p.name} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ) : (
                  <li key={p.name} className="chip chip-static">{p.name}</li>
                ),
              )}
            </ul>
          </div>
        </figure>
      </div>
      <ol className="talks">
        {TALKS.map((t) => (
          <li key={t.title} className={`talk ${t.featured ? 'is-featured' : ''}`}>
            <span className="mono talk-date">{t.date}</span>
            <div className="talk-body">
              {t.href ? (
                <a href={t.href} className="talk-title" target="_blank" rel="noopener">
                  {t.title} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="talk-title">{t.title}</span>
              )}
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
