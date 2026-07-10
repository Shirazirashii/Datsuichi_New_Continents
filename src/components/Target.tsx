import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ClosedEntryButton from './ClosedEntryButton';

const targets = [
  "自ら手を動かし、試行錯誤を楽しめる方。",
  "得られた知見や学びをメンバー間で積極的に共有できる方。",
  "目的達成のためのAIツール課金を厭わない方。"
];

export default function Target({ isSinglePage = false }: { isSinglePage?: boolean }) {
  return (
    <section className={`px-6 ${isSinglePage ? "pt-16 pb-0" : "pt-16 pb-16 md:pb-32"}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className={`${isSinglePage ? "text-left" : "text-center"}`}>
          <h2 className={`${isSinglePage ? "text-2xl" : "text-3xl md:text-4xl"} font-bold tracking-tight text-white`}>求めるメンバー像</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 md:p-8 relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className={`relative z-10 flex flex-col gap-4 md:gap-5 max-w-2xl mx-auto ${isSinglePage ? '' : 'md:pl-16'}`}>
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
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-end pt-4"
        >
            <ClosedEntryButton />
        </motion.div>
      </div>
    </section>
  );
}
