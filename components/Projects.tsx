
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../content';
import { ExternalLink, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const marqueeProjects = [...PROJECTS, ...PROJECTS];
  const cardWidth = 400;
  const gap = 32;
  const itemFullWidth = cardWidth + gap;
  const totalWidth = PROJECTS.length * itemFullWidth;

  return (
    <section id="projects" className="py-24 bg-slate-50/50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Building Products</h2>
            <p className="text-slate-500 max-w-lg text-lg font-medium leading-tight">Engineering tools that scale human intent through code and AI orchestration.</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          className="flex overflow-hidden px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-8 w-fit py-4"
            style={{
              animation: `marquee-projects 50s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {marqueeProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="w-[400px] flex-shrink-0 bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all flex flex-col shadow-sm hover:shadow-2xl group/card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover/card:opacity-40 transition-opacity" />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/card:text-primary transition-colors">
                      <Terminal size={18} />
                    </div>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" className="text-slate-300 hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-6 flex-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black text-slate-400 uppercase px-2 py-0.5 bg-slate-50 rounded border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-primary transition-all shadow-lg shadow-slate-900/10"
                    >
                      Launch Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee-projects {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
