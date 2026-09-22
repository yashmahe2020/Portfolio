import React, { useEffect, useState } from 'react';
import { NAV, PROFILE } from '../content';
import { ArrowDown, Close, Menu } from './Icons';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="Yash Maheshwari, back to top">
          <span className="logo-mark" />
          <span>YM<span className="accent">.</span></span>
        </a>
        <nav id="primary-nav" aria-label="Primary" className={`nav ${open ? 'is-open' : ''}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={PROFILE.resume} className="btn btn-dark btn-sm" target="_blank" rel="noopener">
            Résumé <ArrowDown />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
