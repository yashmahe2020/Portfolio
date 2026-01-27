
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_PROJECTS } from '../content';
import { ScrollText, Microscope, CheckCircle2, Info } from 'lucide-react';
import { ResearchItem } from '../types';

const ResearchFlipCard: React.FC<{ item: ResearchItem; isHorizontal?: boolean }> = ({ item, isHorizontal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.type === 'patent' ? ScrollText : Microscope;
  const accentColor = item.type === 'patent' ? 'text-amber-600' : 'text-secondary';
  const accentBg = item.type === 'patent' ? 'bg-amber-500/5' : 'bg-secondary/5';

  return (
    <div
      className={`group relative w-full ${isHorizontal ? 'h-[200px]' : 'h-full min-h-[424px]'} perspective-1000`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={isHorizontal ? { rotateX: isHovered ? 180 : 0 } : { rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* FRONT SIDE */}
        <div className={`absolute inset-0 backface-hidden h-full w-full bg-white border border-slate-100 rounded-[2.5rem] p-8 flex shadow-sm group-hover:shadow-xl transition-shadow overflow-hidden ${isHorizontal ? 'flex-row items-center gap-8' : 'flex-col items-center text-center'}`}>
          <div className="relative shrink-0">
            <div className={`${isHorizontal ? 'w-14 h-14' : 'w-20 h-20 mb-6'} rounded-2xl ${accentBg} flex items-center justify-center ${accentColor} border border-slate-100 shadow-inner`}>
              <Icon size={isHorizontal ? 28 : 40} strokeWidth={1.5} />
            </div>
          </div>

          <div className={`flex-1 flex flex-col ${isHorizontal ? 'text-left' : 'justify-center text-center'} gap-1`}>
            <div className={`flex items-center gap-2 mb-1 ${isHorizontal ? '' : 'justify-center'}`}>
              <span className={`text-xs font-black uppercase tracking-[0.2em] ${accentColor}`}>
                {item.type === 'patent' ? 'Patent' : 'Research'}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-200"></span>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.period}</span>
            </div>

            <h3 className={`${isHorizontal ? 'text-lg' : 'text-2xl'} font-display font-black text-slate-900 leading-tight mb-1`}>
              {item.title}
            </h3>

            <p className="text-sm text-slate-500 font-medium leading-relaxed italic line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className={`absolute bottom-6 right-8 text-xs font-black text-slate-300 uppercase tracking-widest ${isHorizontal ? '' : 'w-full text-center left-0'}`}>
            {isHorizontal ? 'Flip Up' : 'Flip Left'} for Details
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={`absolute inset-0 backface-hidden ${isHorizontal ? 'rotate-x-180' : 'rotate-y-180'} h-full w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-5 sm:p-6 flex flex-col items-start shadow-2xl`}>
          <div className="w-full mb-2">
            <div className="flex items-center gap-3 mb-1">
              <div className={`w-6 h-6 rounded-lg ${accentBg} flex items-center justify-center ${accentColor}`}>
                <Info size={12} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Impact & Results</p>
            </div>
            <h4 className={`font-display font-black text-slate-900 leading-tight border-b border-slate-200 pb-1.5 ${isHorizontal ? 'text-sm' : 'text-lg'}`}>
              {item.title}
            </h4>
          </div>

          <ul className={`flex-1 overflow-y-auto pr-2 custom-scrollbar w-full ${isHorizontal ? 'grid grid-cols-2 gap-x-4 gap-y-1' : 'space-y-1'}`}>
            {item.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600 font-bold leading-tight items-start">
                <CheckCircle2 size={12} className={`${accentColor} shrink-0 mt-0.5`} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2 pt-2 w-full text-center border-t border-slate-100">
            <span className={`text-xs font-black uppercase tracking-widest ${accentColor}`}>
              {item.organization}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Research: React.FC = () => {
  const patents = RESEARCH_PROJECTS.filter(p => p.type === 'patent');
  const labWork = RESEARCH_PROJECTS.find(p => p.type === 'lab');

  return (
    <section id="research" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-4xl font-display font-black text-slate-900 flex items-center gap-4 tracking-tight">
          <span className="w-12 h-[3px] bg-secondary rounded-full"></span>
          Research & Patents
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl text-lg font-medium italic">Intellectual property and academic exploration in agentic systems.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {patents.map((patent) => (
            <ResearchFlipCard key={patent.id} item={patent} isHorizontal={true} />
          ))}
        </div>

        <div className="lg:col-span-4 h-full">
          {labWork && (
            <ResearchFlipCard item={labWork} isHorizontal={false} />
          )}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-x-180 { transform: rotateX(180deg); }
        .rotate-y-180 { transform: rotateY(180deg); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default Research;
