import React from 'react';

const SectionHead: React.FC<{ title: string; index: number; total?: number }> = ({ title, index, total = 5 }) => (
  <div className="section-head">
    <h2>{title}</h2>
    <span className="mono muted">
      {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </span>
  </div>
);

export default SectionHead;
