
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../content';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(248, 250, 252, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Speaking', href: '#speaking' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Resume', href: '#resume' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-transparent data-[scrolled=true]:border-slate-100 transition-all duration-300"
      data-scrolled={scrollY.get() > 50}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display font-black text-2xl tracking-tighter text-slate-900 group flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-8 h-8 rounded-lg bg-slate-900 group-hover:rotate-12 group-hover:bg-primary transition-all duration-500"></div>
          YM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <div className="flex items-center gap-6 pl-8 border-l border-slate-200">
            <a href={PERSONAL_INFO.instagram} target="_blank" className="text-slate-400 hover:text-pink-600 transition-all hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button className="text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-20 bg-white px-8 py-12 flex flex-col gap-10 md:hidden z-40 border-t border-slate-100"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-5xl font-display font-black text-slate-900 hover:text-primary transition-colors tracking-tighter"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-8 mt-4 pt-10 border-t border-slate-100">
            <a href={PERSONAL_INFO.instagram} className="text-slate-900 flex items-center gap-2 font-bold uppercase text-xs tracking-widest"><Instagram size={24} /> Instagram</a>
            <a href={PERSONAL_INFO.linkedin} className="text-slate-900 flex items-center gap-2 font-bold uppercase text-xs tracking-widest"><Linkedin size={24} /> LinkedIn</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
