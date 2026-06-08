import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const targets = [
  "自らを動かし、試行錯誤を楽しめる方。",
  "得られた知見や学びをメンバー間で積極的に共有できる方。",
  "目的達成のためのAIツール課金を厭わない方。"
];

export default function Target() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">求めるメンバー像</h2>
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
                <p className="text-slate-300 text-lg font-light leading-relaxed">
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
