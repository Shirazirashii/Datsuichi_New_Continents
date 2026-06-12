import { motion } from 'motion/react';
import { Target, Flag, ArrowRight } from 'lucide-react';
import orgImg from '../assets/community.jpg';

export default function ManagementPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Community</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">団体運営</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <div className="w-full max-w-4xl mx-auto aspect-[20/9] bg-slate-800/50 overflow-hidden relative border border-transparent">
          <img src={orgImg} alt="団体運営" className="absolute inset-0 w-full h-full object-cover z-10" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        <div className="space-y-20">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left w-full">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-200">Message</h2>
              </div>
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
            <p className="text-xl md:text-2xl font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">
              「作りたい」が、最大のエンジンになる。
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              私たちは、単なる知識の習得ではなく、自ら手を動かし、試行錯誤を通じて「形にする」喜びを原動力としています。自分の発見や失敗を仲間に還元する「与えられる自分」を目指し、共に成長する団体運営であり続けることを大切にしています。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Flag className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-200">団体概要</h2>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                「ダツイチ—新大陸」は、生成AIを実務で使いこなすことを目的とした、自立駆動型の学習団体運営です。前身の勉強会「ダツイチ」での知見を活かしながら、参加者が主体となって、新しい学びのパラダイムを切り拓く場所として誕生しました。
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
