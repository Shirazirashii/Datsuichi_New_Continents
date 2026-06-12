import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const targets = [
  "自らを動かし、試行錯誤を楽しめる方。",
  "得られた知見や学びをメンバー間で積極的に共有できる方。",
  "目的達成のためのAIツール課金を厭わない方。"
];

export default function Target() {
  return (
    <section className="pt-16 pb-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">求めるメンバー像</h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-start sm:justify-end"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdh0tx6U7nE6dU8Hg11-iy8BiiGPjuSD8DP7zfgWlvvIJ9Wjg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 md:gap-5"
            >
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">Entry</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">参加申込</span>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-125 shadow-lg shadow-blue-900/20 flex-shrink-0">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto">
            {targets.map((target, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-lg text-slate-200 font-medium leading-relaxed">
                  {target}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
