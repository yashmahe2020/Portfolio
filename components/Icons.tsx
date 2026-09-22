import React from 'react';

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export const ArrowRight = ({ size = 16 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);

export const ArrowDown = ({ size = 14 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2}><path d="M12 5v14M5 12l7 7 7-7" /></svg>
);

export const GitHub = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
);

export const LinkedIn = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

export const Instagram = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></svg>
);

export const Menu = ({ size = 22 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const Close = ({ size = 22 }: IconProps) => (
  <svg {...base(size)} strokeWidth={2}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
