
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../content';
import { Briefcase, CheckCircle2, Info } from 'lucide-react';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ exp: Experience; idx: number }> = ({ exp, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden h-full w-full bg-white border border-slate-100 rounded-[3rem] p-8 flex flex-col shadow-sm group-hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 shadow-inner">
              <Briefcase size={20} />
            </div>
            <div className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-tighter border border-slate-100">
              {exp.period}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-display font-black text-slate-900 mb-1 leading-tight">{exp.role}</h3>
            <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">{exp.company}</p>
          </div>

          <p className="text-slate-600 text-sm font-medium mb-4 leading-relaxed italic flex-1 line-clamp-4">
            {exp.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag} className="text-xs font-black text-slate-400 px-2 py-0.5 bg-slate-50 rounded-md uppercase border border-slate-100 tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-300 uppercase tracking-widest border-t border-slate-50 pt-3">
              Hover for Impact
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 h-full w-full bg-slate-50 border-2 border-primary/5 rounded-[3rem] p-8 flex flex-col items-start shadow-2xl">
          <div className="w-full mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Info size={16} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Impact & Results</p>
            </div>
            <h4 className="text-lg font-display font-black text-slate-900 leading-tight border-b border-slate-200 pb-2">
              {exp.role}
            </h4>
          </div>

          <ul className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar w-full">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 font-bold leading-snug">
                <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 w-full text-center border-t border-slate-200">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              {exp.company} • {exp.period}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Professional Path</h2>
            <p className="text-slate-500 max-w-xl text-lg font-medium">A concentrated record of engineering and systemic innovation.</p>
          </div>
          <div className="hidden md:block h-[1px] bg-slate-200 flex-1 mx-10 mb-4 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} idx={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
