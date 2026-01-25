import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../content';

const Resume: React.FC = () => {
  const resumeUrl = PERSONAL_INFO.resume;

  return (
    <section id="resume" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-10 h-[2px] bg-primary"></span>
            <h2 className="text-3xl font-display font-black text-slate-900">Resume</h2>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            A quick preview of the one-page resume. Open the full PDF for the clean, print-ready version.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2"
            >
              View PDF <ArrowUpRight size={18} />
            </a>
            <a
              href={resumeUrl}
              download
              className="px-6 py-3 bg-white border border-slate-200 rounded-2xl hover:border-primary/50 hover:text-primary transition-all shadow-sm flex items-center gap-2 font-bold"
            >
              Download <FileText size={18} />
            </a>
          </div>
          <p className="text-xs text-slate-400">
            If the preview does not load, use the View PDF button.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] blur-2xl"></div>
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-4 shadow-2xl">
            <div className="rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-100">
              <iframe
                title="Resume PDF preview"
                src={`${resumeUrl}#page=1&view=FitH`}
                className="w-full h-[520px] md:h-[640px]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
