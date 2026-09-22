import React from 'react';
import { AWARDS, FOUNDED } from '../content';
import SectionHead from './SectionHead';

const Founded: React.FC = () => (
  <section id="founded" className="wrap section">
    <SectionHead title="Founded & awarded" index={5} />
    <div className="two-col">
      <div>
        <h3 className="eyebrow">Founded &amp; led</h3>
        <ul className="rows">
          {FOUNDED.map((f) => (
            <li key={f.name}>
              <strong>{f.name}</strong>
              <span className="muted-text">{f.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="eyebrow">Awards</h3>
        <ul className="rows">
          {AWARDS.map((a) => (
            <li key={a.name}>
              <strong>{a.name}</strong>
              <span className="mono small muted">{a.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Founded;
