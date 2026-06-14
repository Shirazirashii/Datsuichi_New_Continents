import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword, Zap, RefreshCw, Users, X } from 'lucide-react';

interface AboutProps {
  isSinglePage?: boolean;
}

const benefitsData = [
  {
    id: 0,
    title: "「リアル」を教材に",
    desc: "架空の課題ではなく、外部企業や団体が抱える本物の困りごと（実案件）を題材にします。",
    icon: Sword,
    pos: "top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2"
  },
  {
    id: 1,
    title: "圧倒的な成長スピード",
    desc: "実際の制約条件や期待値に応えるプロセスを通じて、スキルの定着を爆発的に早めます。",
    icon: Zap,
    pos: "top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2"
  },
  {
    id: 2,
    title: "価値の好循環",
    desc: "参加者は「生きた教材」を得て、依頼者は「自動化ツール」を獲得するエコシステム。",
    icon: RefreshCw,
    pos: "bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2"
  },
  {
    id: 3,
    title: "自立型学習と学びの還元",
    desc: "受け身の講義はなく、各自が最適なAIツールを選択し自ら解決策を構築。発見や失敗を共有し、「仲間に与えられる自分」を目指す文化。",
    icon: Users,
    pos: "bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2"
  }
];

export default function About({ isSinglePage = false }: AboutProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={`px-3 relative z-10 ${isSinglePage ? 'py-12' : 'py-24'}`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {!isSinglePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white pl-3 md:pl-[max(12px,calc(50vw-460px))] xl:pl-[180px]">
              ダツイチとは
            </h2>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start justify-between w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:max-w-[460px] lg:max-w-[628px] xl:max-w-[836px] space-y-6 text-slate-300 text-lg leading-relaxed font-light pl-3 md:pl-[max(12px,calc(50vw-460px))] xl:pl-[180px]"
          >
            <p>
              「ダツイチ —新大陸」は、生成AIを単なる知識として学ぶのではなく、「<span className="text-white font-medium">実務で使いこなすこと</span>」を目的とした自立駆動型の学習コミュニティです。
            </p>
            <p>
              受け身の姿勢ではなく、参加者が自ら手を動かし、試行錯誤を通じて実践的なスキルを習得していく場所です。新しい大陸を開拓するように、技術の最前線を共に歩みましょう。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-[440px] lg:w-[500px] xl:w-[560px] aspect-video bg-transparent p-0 flex flex-col items-center justify-center shrink-0 relative mt-0 md:-mt-6 lg:-mt-10 xl:-mt-12"
          >
            {/* Diagram Neon Ring */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full shrink-0 flex items-center justify-center border border-[#06b6d4]/50 shadow-[0_0_20px_2px_rgba(6,182,212,0.3),inset_0_0_20px_2px_rgba(6,182,212,0.2)]">
              {/* Central Title */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-slate-900/40 backdrop-blur-[10px] border border-white/10 border-t-white/40 flex flex-col items-center justify-center text-center pointer-events-none shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-10">
                <span className="text-[#06b6d4] text-[10px] sm:text-[11px] lg:text-[13px] font-bold tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.25em] pl-[0.15em] sm:pl-[0.2em] lg:pl-[0.25em] mb-1 drop-shadow-md whitespace-nowrap">ダツイチの提供価値</span>
                <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-normal tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{ fontFamily: '"Montserrat", sans-serif' }}>Benefits</span>
              </div>

              {/* 4 Value Icons */}
              {benefitsData.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    className={`absolute ${item.pos} w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border border-white/10 bg-gradient-to-br from-slate-900/90 to-[#06b6d4]/30 backdrop-blur-md flex items-center justify-center text-[#06b6d4] transition-all duration-400 ease-out z-20 focus:outline-none group ${isActive ? 'scale-200 shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] border-[#06b6d4]/80 text-white' : 'shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-200 hover:shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] hover:border-[#06b6d4]/80 hover:text-white'}`}
                    aria-label={item.title}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors duration-400" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Overlay Modal */}
      <AnimatePresence>
        {activeId !== null && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6"
          >
            <motion.div
              key="modal-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 md:p-10 text-left shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setActiveId(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-[#06b6d4] transition-colors p-2 rounded-full hover:bg-slate-800 focus:outline-none"
                aria-label="閉じる"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4]">
                  {(() => {
                    const ActiveIcon = benefitsData[activeId].icon;
                    return <ActiveIcon className="w-6 h-6" />;
                  })()}
                </div>
                <h3 className="text-[#06b6d4] font-bold text-xl md:text-2xl pr-8">
                  {benefitsData[activeId].title}
                </h3>
              </div>
              
              <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed">
                {benefitsData[activeId].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
