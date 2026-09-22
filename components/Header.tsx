import React, { useState } from 'react';
import { NAV, PROFILE } from '../content';
import { ArrowDown, Close, Menu } from './Icons';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="Yash Maheshwari, back to top">
          <span className="logo-mark" />
          <span>YM<span className="accent">.</span></span>
        </a>
        <nav aria-label="Primary" className={`nav ${open ? 'is-open' : ''}`}>
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
