
import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../content';
import { Award as AwardIcon, Target, Code, Star, Calendar } from 'lucide-react';
import { Award } from '../types';

const iconMap: Record<string, any> = {
  Award: AwardIcon,
  Target,
  Code,
  Star
};

const AwardItem: React.FC<{ item: Award; idx: number }> = ({ item, idx }) => {
  const Icon = iconMap[item.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      {/* Visual Identity Block */}
      <div className="shrink-0 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 border border-slate-100 transition-all">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
          <Calendar size={10} />
          {item.date}
        </div>
      </div>

      {/* Content Block */}
      <div className="flex-1 space-y-2">
        <div className="space-y-1">
          <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">
            {item.issuer}
          </div>
          <h3 className="text-xl font-display font-black text-slate-900 leading-tight">
            {item.title}
          </h3>
        </div>

        <p className="text-xs text-slate-500 font-bold leading-relaxed pr-4">
          {item.description}
        </p>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
      </div>
    </motion.div>
  );
};

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <AwardIcon size={18} />
            </div>
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Honors & Recognition</h2>
          </div>
          <p className="text-slate-500 max-w-lg text-lg font-medium leading-tight italic">
            Validation of technical leadership and systemic innovation through competitive excellence.
          </p>
        </div>
      </div>

      {/* Compact 2-column Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {AWARDS.map((item, idx) => (
          <AwardItem key={`${item.title}-${idx}`} item={item} idx={idx} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 p-10 rounded-[2.5rem] border border-slate-100 text-center bg-white/50 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <p className="relative z-10 text-slate-400 text-lg font-medium italic">
          Favorite Quote: "The best way to predict the future is to create it." — Peter Drucker
        </p>
      </motion.div>
    </section>
  );
};

export default Awards;
