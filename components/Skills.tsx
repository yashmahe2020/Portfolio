
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../content';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/4">
          <div className="sticky top-24 space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none">Technical <br />Arsenal</h2>
            <p className="text-slate-500 font-medium text-lg leading-tight">Domain expertise in machine learning, mobile platforms, and robotics.</p>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="flex-1 grid md:grid-cols-2 gap-10">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: '#4f46e5', color: '#4f46e5', backgroundColor: '#f5f3ff' }}
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-bold shadow-sm transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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
    </section >
  );
};

export default Skills;
