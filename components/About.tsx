
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Smartphone, Mic2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../content';

const iconMap: Record<string, any> = {
  FileText: FileText,
  Smartphone: Smartphone,
  Mic2: Mic2,
  GraduationCap: GraduationCap,
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="w-10 h-[2px] bg-primary"></span>
              <h2 className="text-3xl font-display font-black text-slate-900">Snapshot</h2>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {PERSONAL_INFO.bio}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <p className="text-[10px] text-slate-400 mb-2 font-black uppercase tracking-[0.2em]">Academics</p>
                <p className="text-2xl font-display font-black text-slate-900 tracking-tight leading-tight">4.72 GPA</p>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <p className="text-[10px] text-slate-400 mb-2 font-black uppercase tracking-[0.2em]">AP/College Prep</p>
                <div className="flex flex-col">
                  <p className="text-2xl font-display font-black text-slate-900 tracking-tight leading-none">15 Courses</p>
                  <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">9 AP • 6 Dual-Enroll</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-3 grid grid-cols-2 gap-6">
          {STATS.map((stat, idx) => {
            const IconComp = iconMap[stat.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, rotate: 1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all mb-6">
                  <IconComp size={28} />
                </div>
                <h3 className="text-4xl font-display font-black text-slate-900 mb-1 tracking-tighter">{stat.value}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
