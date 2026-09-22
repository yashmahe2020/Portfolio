import React from 'react';
import { BILLS, POLICY_ALSO, POLICY_STATS, WAPO } from '../content';
import SectionHead from './SectionHead';

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
            <span className="eyebrow">Also</span>
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
          <div className="table-scroll">
            <table className="bills">
              <caption className="eyebrow">Meetings with legislative offices, 2026</caption>
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Bill</th>
                  <th scope="col">Topic</th>
                </tr>
              </thead>
              <tbody>
                {BILLS.map((b) => (
                  <tr key={b.state}>
                    <td className="mono ink">{b.state}</td>
                    <td className="mono">{b.bill}</td>
                    <td>{b.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Policy;
