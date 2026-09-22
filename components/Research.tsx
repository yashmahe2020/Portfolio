import React from 'react';
import { FEATURED_RESEARCH, MORE_RESEARCH, Paper } from '../content';
import SectionHead from './SectionHead';

const Feature: React.FC<{ paper: Paper }> = ({ paper }) => (
  <article className="card feature reveal">
    <div className="feature-copy">
      <div className="badges">
        {paper.badges.map((b) => (
          <span key={b.text} className={`badge badge-${b.tone}`}>{b.text}</span>
        ))}
      </div>
      <h3>{paper.title}</h3>
      {paper.facts && (
        <dl className="facts">
          {paper.facts.map((f) => (
            <React.Fragment key={f.term}>
              <dt>{f.term}</dt>
              <dd className={f.strong ? 'strong' : ''}>{f.detail}</dd>
            </React.Fragment>
          ))}
        </dl>
      )}
      {paper.papers && (
        <ul className="paper-list">
          {paper.papers.map((p) => (
            <li key={p.venue}>
              <span className="mono small muted">{p.venue}</span>
              <span>
                {p.lead} <strong>{p.strong}</strong>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
    <figure className="chart">
      <figcaption className="eyebrow">{paper.chart.caption}</figcaption>
      {paper.chart.bars.map((bar) => (
        <div key={bar.label} className="bar">
          <div className="bar-row">
            <span className="bar-label">{bar.label}</span>
            <span className="mono">{bar.value}</span>
          </div>
          <div className="bar-track">
            <div className={`bar-fill fill-${bar.tone}`} style={{ width: `${bar.width}%` }} />
          </div>
        </div>
      ))}
      <p className="chart-note">{paper.chart.note}</p>
    </figure>
  </article>
);

const Research: React.FC = () => (
  <section id="research" className="wrap section research">
    <SectionHead title="Research" index={1} />
    {FEATURED_RESEARCH.map((paper) => (
      <Feature key={paper.title} paper={paper} />
    ))}
    <ul className="ledger">
      {MORE_RESEARCH.map((r) => (
        <li key={r.title}>
          <span className="eyebrow">{r.status}</span>
          <span className="ledger-main">
            <strong>{r.title}</strong>
            <span className="muted-text"> · {r.detail}</span>
          </span>
          <span className="mono small muted ledger-meta">{r.meta}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Research;
