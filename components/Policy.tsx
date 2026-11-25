import React from 'react';
import { BILLS, POLICY_ALSO, POLICY_STATS, WAPO } from '../content';
import SectionHead from './SectionHead';

// Tile-grid map of the US: [state, column, row].
const TILES: [string, number, number][] = [
  ['AK', 0, 0], ['ME', 10, 0],
  ['VT', 9, 1], ['NH', 10, 1],
  ['WA', 0, 2], ['ID', 1, 2], ['MT', 2, 2], ['ND', 3, 2], ['MN', 4, 2], ['IL', 5, 2], ['WI', 6, 2], ['MI', 7, 2], ['NY', 8, 2], ['RI', 9, 2], ['MA', 10, 2],
  ['OR', 0, 3], ['NV', 1, 3], ['WY', 2, 3], ['SD', 3, 3], ['IA', 4, 3], ['IN', 5, 3], ['OH', 6, 3], ['PA', 7, 3], ['NJ', 8, 3], ['CT', 9, 3],
  ['CA', 0, 4], ['UT', 1, 4], ['CO', 2, 4], ['NE', 3, 4], ['MO', 4, 4], ['KY', 5, 4], ['WV', 6, 4], ['VA', 7, 4], ['MD', 8, 4], ['DE', 9, 4],
  ['AZ', 1, 5], ['NM', 2, 5], ['KS', 3, 5], ['AR', 4, 5], ['TN', 5, 5], ['NC', 6, 5], ['SC', 7, 5], ['DC', 8, 5],
  ['OK', 3, 6], ['LA', 4, 6], ['MS', 5, 6], ['AL', 6, 6], ['GA', 7, 6],
  ['HI', 0, 7], ['TX', 3, 7], ['FL', 8, 7],
];
const ACTIVE = new Set(BILLS.map((b) => b.state));

const Policy: React.FC = () => (
  <section id="policy" className="band">
    <div className="wrap section">
      <SectionHead title="AI policy" index={4} />
      <div className="policy-grid">
        <div className="policy-left">
          <a href={WAPO.href} className="press-card" target="_blank" rel="noopener">
            <span className="eyebrow">{WAPO.meta}</span>
            <span className="press-headline">{WAPO.headline}</span>
            <span className="mono small muted-text">{WAPO.detail}</span>
            <span className="press-link">Read the article →</span>
          </a>
          <div>
            <h3 className="eyebrow">Also</h3>
            <ul className="rows">
              {POLICY_ALSO.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong>
                  <span className="muted-text">{p.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="policy-right">
          <ul className="stat-row">
            {POLICY_STATS.map((s) => (
              <li key={s.label}>
                <span className="metric accent">{s.value}</span>
                <span className="small muted-text">{s.label}</span>
              </li>
            ))}
          </ul>
          <div
            className="state-map"
            role="img"
            aria-label={`States where I discussed AI legislation with legislative offices: ${[...ACTIVE].join(', ')}`}
          >
            {TILES.map(([st, col, row]) => (
              <span
                key={st}
                className={`tile ${ACTIVE.has(st) ? 'is-on' : ''}`}
                style={{ gridColumn: col + 1, gridRow: row + 1 }}
                aria-hidden="true"
              >
                {st}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bills">
        <h3 className="eyebrow">AI bills discussed with legislative offices, 2026</h3>
        <ul className="bill-grid">
          {BILLS.map((b) => (
            <li key={b.state + b.bill}>
              <span className="bill-state mono">{b.state}</span>
              <span className="mono ink">{b.bill}</span>
              <span>{b.topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Policy;
