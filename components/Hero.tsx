
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../content';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.05)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-50/50">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold tracking-[0.2em] text-primary mb-8 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Researcher & Entrepreneur
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-display font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Yash <br /><span className="text-primary">Maheshwari</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </motion.a>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                <Linkedin size={22} />
              </a>
              <a href={PERSONAL_INFO.instagram} target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-pink-500/50 hover:text-pink-500 transition-all shadow-sm">
                <Instagram size={22} />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                <Github size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] blur-2xl"></div>
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-5 shadow-2xl">
             <img 
               src="/images/yashmaheshwari.png" 
               alt="Yash Maheshwari" 
               className="rounded-[1.8rem] w-full h-[500px] object-cover shadow-inner"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
