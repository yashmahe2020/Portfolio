
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SPEAKING_EVENTS } from '../content';
import { Mic2, MapPin, Calendar } from 'lucide-react';

const Speaking: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const marqueeEvents = [...SPEAKING_EVENTS, ...SPEAKING_EVENTS];
  const cardWidth = 420;
  const gap = 24;
  const itemFullWidth = cardWidth + gap;
  const totalWidth = SPEAKING_EVENTS.length * itemFullWidth;

  return (
    <section id="speaking" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Speaking & Presenting</h2>
          <p className="text-slate-500 max-w-2xl text-lg">Sharing student-led AI innovation at global stages and national tech summits.</p>
        </div>
      </div>

      <div className="relative">
        <div 
          className="flex overflow-hidden px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-6 w-fit py-4"
            style={{
              animation: `marquee-speaking 60s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {marqueeEvents.map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className="w-[350px] md:w-[420px] p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col group/card"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover/card:bg-primary group-hover/card:text-white transition-all">
                  <Mic2 size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 line-clamp-2 leading-tight">
                  {event.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <MapPin size={14} className="text-primary/60" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar size={14} className="text-primary/60" />
                    {event.date}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-primary px-3 py-1 bg-white rounded-lg border border-slate-200 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee-speaking {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>
    </section>
  );
};

export default Speaking;
