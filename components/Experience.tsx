import React from 'react';
import { EXPERIENCE } from '../content';
import SectionHead from './SectionHead';

const Experience: React.FC = () => (
  <section id="experience" className="band">
    <div className="wrap section">
      <SectionHead title="Experience" index={2} />
      <ol className="roles">
        {EXPERIENCE.map((job) => (
          <li key={job.role} className="role reveal">
            <div className="role-where">
              <span className="mono small muted">{job.period}</span>
              <span className="role-org">{job.org}</span>
            </div>
            <div className="role-what">
              <h3>{job.role}</h3>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="role-metric">
              <span className="metric accent">{job.metric}</span>
              <span className="small muted">{job.metricLabel}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
