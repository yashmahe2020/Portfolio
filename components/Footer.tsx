
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../content';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Let's connect.</h2>
            <p className="text-slate-500 max-md text-lg font-medium leading-relaxed">Always open to discussions on AI research, policy co-design, and student-led innovation.</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary text-slate-900 hover:text-primary transition-all">
                <Mail size={22} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 text-slate-900 hover:text-blue-600 transition-all">
                <Linkedin size={22} />
              </a>
              <a href={PERSONAL_INFO.instagram} target="_blank" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pink-500 text-slate-900 hover:text-pink-500 transition-all">
                <Instagram size={22} />
              </a>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 p-8 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white group-hover:-translate-y-3 transition-transform shadow-lg shadow-primary/20">
              <ArrowUp size={28} />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Top of Page</span>
          </button>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Yash Maheshwari</p>
          <div className="flex gap-10">
            <span>Built with Intent</span>
            <span className="hidden sm:inline">Mountain View High School • Stanford Lab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
