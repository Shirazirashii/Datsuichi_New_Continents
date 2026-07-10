import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, X } from 'lucide-react';
import { Icon } from '@iconify/react';

interface AboutProps {
  isSinglePage?: boolean;
  showBenefitsOnly?: boolean;
  hideBenefits?: boolean;
}

const IconSpinningSword = ({ className }: { className?: string }) => <Icon icon="game-icons:spinning-sword" className={className} />;
const IconLibertyWing = ({ className }: { className?: string }) => <Icon icon="game-icons:liberty-wing" className={className} />;
const IconTeamFavorite = ({ className }: { className?: string }) => <Icon icon="fluent-mdl2:team-favorite" className={className} />;

const benefitsData = [
  {
    id: 0,
    title: "「リアル」を教材に",
    desc: "架空の課題ではなく、外部企業や団体が抱える本物の困りごと（実案件）を題材にします。",
    icon: IconSpinningSword,
    pos: "top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2"
  },
  {
    id: 1,
    title: "圧倒的な成長スピード",
    desc: "実際の制約条件や期待値に応えるプロセスを通じて、スキルの定着を爆発的に早めます。",
    icon: IconLibertyWing,
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
    icon: IconTeamFavorite,
    pos: "bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2"
  }
];

export default function About({ isSinglePage = false, showBenefitsOnly = false, hideBenefits = false }: AboutProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [modalActiveId, setModalActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const isAnyHovered = hoveredId !== null;
  const isAnyActiveOrHovered = activeId !== null || hoveredId !== null;

  const handleButtonClick = (id: number) => {
    if (window.innerWidth < 768) {
      if (activeId === id) {
        setActiveId(null);
        setModalActiveId(null);
      } else {
        setActiveId(id);
        setTimeout(() => {
          setActiveId((currentActiveId) => {
            if (currentActiveId === id) {
              setModalActiveId(id);
            }
            return currentActiveId;
          });
        }, 100);
      }
    }
  };

  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 768) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setHoveredId(null);
    }
  };

  if (showBenefitsOnly) {
    return (
      <section className="px-3 py-16 relative z-10 border-b border-slate-900/40">
        <style>{`
          @keyframes iconGlow {
            0%, 100% {
              color: #00f0ff; /* 鮮やかなシアン */
              filter: drop-shadow(0 0 4px rgba(0, 240, 255, 0.4));
            }
            50% {
              color: #ffffff; /* 神秘的な白 */
              filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); /* 白く強く光る */
            }
          }

          .animate-icon-glow {
            animation: iconGlow 2s infinite ease-in-out; /* 2秒かけてゆっくり往復 */
          }
        `}</style>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Diagram Center Aligned */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px]"
          >
            {/* Diagram Neon Ring */}
            <div className="relative w-[280px] h-[280px] sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full shrink-0 flex items-center justify-center border border-[#06b6d4]/50 shadow-[0_0_20px_2px_rgba(6,182,212,0.3),inset_0_0_20px_2px_rgba(6,182,212,0.2)]">
              {/* Central Title */}
              <div className="relative w-40 h-40 sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full bg-cyan-950/20 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center pointer-events-none shadow-[0_0_30px_rgba(6,182,212,0.2),inset_0_0_15px_rgba(6,182,212,0.1)] z-10">
                {/* Cybernetic Inner Ring */}
                <div className="absolute inset-1.5 rounded-full border border-cyan-500/10 pointer-events-none" />
                
                <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest uppercase font-mono bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                  Benefits
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-2" />
                <span className="text-cyan-200/80 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.1em] pl-[0.1em] drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">
                  4つの提供価値
                </span>
              </div>

              {/* PC用ホバー詳細表示エリア */}
              <AnimatePresence>
                {hoveredId !== null && (
                  <motion.div
                    key={`hover-detail-only-${hoveredId}`}
                    initial={{ opacity: 0, x: (hoveredId === 0 || hoveredId === 3) ? 15 : -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: (hoveredId === 0 || hoveredId === 3) ? 15 : -15 }}
                    transition={{ duration: 0.3 }}
                    className={`hidden md:block absolute w-[180px] lg:w-[240px] xl:w-[280px] pointer-events-none z-30 text-left ${
                      hoveredId === 0
                        ? "right-[135%] top-[-5%]"
                        : hoveredId === 3
                        ? "right-[135%] bottom-[-5%]"
                        : hoveredId === 1
                        ? "left-[135%] top-[-5%]"
                        : "left-[135%] bottom-[-5%]"
                    }`}
                  >
                    <h4 className="text-[#06b6d4] font-bold text-lg lg:text-xl xl:text-2xl mb-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] font-sans">
                      {benefitsData[hoveredId].title}
                    </h4>
                    <p className="text-slate-200 text-sm lg:text-base font-light leading-relaxed font-sans">
                      {benefitsData[hoveredId].desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 4 Value Icons */}
              {benefitsData.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                const isHighlighted = isActive || hoveredId === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleButtonClick(item.id)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`absolute ${item.pos} w-[70px] h-[70px] sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] rounded-full border border-white/10 bg-gradient-to-br from-slate-900/90 to-[#06b6d4]/30 backdrop-blur-md flex items-center justify-center text-[#06b6d4] transition-all duration-400 ease-out z-20 focus:outline-none group ${isHighlighted ? 'scale-180 shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] border-[#06b6d4]/80 text-white' : 'shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-180 hover:shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] hover:border-[#06b6d4]/80 hover:text-white'}`}
                    aria-label={item.title}
                  >
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-400 ${!isHighlighted && !isAnyActiveOrHovered ? 'animate-icon-glow' : ''}`} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Fullscreen Overlay Modal */}
        <AnimatePresence>
          {modalActiveId !== null && (
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setActiveId(null);
                setModalActiveId(null);
              }}
              className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6"
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
                  onClick={() => {
                    setActiveId(null);
                    setModalActiveId(null);
                  }}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800 focus:outline-none"
                  aria-label="閉じる"
                >
                  <X className="w-6 h-6" strokeWidth={2.5} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 min-w-[48px] min-h-[48px] shrink-0 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4]">
                    {(() => {
                      const ActiveIcon = benefitsData[modalActiveId].icon;
                      return <ActiveIcon className="w-6 h-6" />;
                    })()}
                  </div>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC] font-bold text-xl md:text-2xl pr-8">
                    {benefitsData[modalActiveId].title}
                  </h3>
                </div>
                
                <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed">
                  {benefitsData[modalActiveId].desc}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }

  return (
    <section className={`px-3 relative z-10 ${isSinglePage ? 'py-12' : 'py-24'}`}>
      <style>{`
        @keyframes iconGlow {
          0%, 100% {
            color: #00f0ff; /* 鮮やかなシアン */
            filter: drop-shadow(0 0 4px rgba(0, 240, 255, 0.4));
          }
          50% {
            color: #ffffff; /* 神秘的な白 */
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); /* 白く強く光る */
          }
        }

        .animate-icon-glow {
          animation: iconGlow 2s infinite ease-in-out; /* 2秒かけてゆっくり往復 */
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {!isSinglePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              私たちの向かう先
            </h2>
          </motion.div>
        )}

        {isSinglePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 text-left mb-8 md:mb-10"
          >
            <div className="space-y-1 md:space-y-2">
              {/* スマホ用 */}
              <div className="md:hidden">
                <p className="text-xl font-bold leading-relaxed text-white">
                  AIを使う側から、価値を創る側へ
                </p>
                <p className="text-xl font-bold leading-relaxed">
                  <span className="text-white">——</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC]">
                    ダツイチ（脱・一般利用）
                  </span>
                </p>
              </div>
              {/* PC用 */}
              <div className="hidden md:block">
                <p className="text-2xl font-bold leading-relaxed text-white">
                  AIを使う側から、価値を創る側へ —— <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC]">ダツイチ（脱・一般利用）</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start justify-between w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full ${hideBenefits ? 'max-w-4xl mx-auto px-6 text-center md:text-center' : 'md:max-w-[460px] lg:max-w-[628px] xl:max-w-[836px] pl-3 md:pl-[max(12px,calc(50vw-460px))] xl:pl-[180px]'} space-y-6 text-slate-300 text-lg leading-relaxed font-light`}
          >
            {isSinglePage ? (
              <div className="space-y-0 text-slate-300 text-left">
                {/* スマホ用 */}
                <div className="md:hidden">
                  <p>
                    「ダツイチ－新大陸」は、<br />
                    AIをただ知識として学ぶのではなく、<br />
                    <strong className="font-bold text-white">実務で使いこなすこと</strong>を目的とした<br />
                    実践型の学習コミュニティです。
                  </p>
                  <div className="mb-6" />
                  <p>
                    創る人、挑戦する人、<br />
                    応援する人が集う場所。
                  </p>
                  <div className="mb-6" />
                  <p>
                    受け身の姿勢ではなく、自ら手を動かし、試行錯誤を重ねながら実践的なスキルを身につけていく。
                  </p>
                  <div className="mb-10" />
                  <p>
                    まだ誰も足を踏み入れたことのない<br />
                    <strong className="font-bold text-white">新大陸</strong>を目指して。<br />
                    —AIの最前線を、共に歩んでいこう。
                  </p>
                </div>

                {/* PC用 */}
                <div className="hidden md:block md:text-xl md:leading-relaxed">
                  <p>
                    「ダツイチ－新大陸」は、AIをただ知識として学ぶのではなく、<br />
                    <strong className="font-bold text-white">実務で使いこなすこと</strong>を目的とした実践型の学習コミュニティです。
                  </p>
                  <div className="mb-8" />
                  <p>
                    創る人、挑戦する人、応援する人が集う場所。
                  </p>
                  <div className="mb-8" />
                  <p>
                    受け身の姿勢ではなく、自ら手を動かし、試行錯誤を重ねながら<br />
                    実践的なスキルを身につけていく。
                  </p>
                  <div className="mb-12" />
                  <p>
                    まだ誰も足を踏み入れたことのない<strong className="font-bold text-white">新大陸</strong>を目指して。<br />
                    —AIの最前線を、共に歩んでいこう。
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-0 text-slate-300 md:text-xl md:leading-relaxed">
                <p className="md:hidden">
                  「ダツイチ－新大陸」は、<br />
                  AIをただ知識として学ぶのではなく、<br />
                  <strong className="font-bold text-white">実務で使いこなすこと</strong>を目的とした<br />
                  実践型の学習コミュニティです。
                </p>
                <p className="hidden md:block">
                  「ダツイチ－新大陸」は、AIをただ知識として学ぶのではなく、<br />
                  <strong className="font-bold text-white">実務で使いこなすこと</strong>を目的とした実践型の学習コミュニティです。
                </p>
                <div className="mb-6 md:mb-8" />
                <p>
                  創る人。<br />
                  挑戦する人。<br />
                  応援する人。
                </p>
                <div className="mb-6 md:mb-8" />
                <p>
                  そんな人たちが集う場所。
                </p>
              </div>
            )}
          </motion.div>
          
          {!hideBenefits && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[440px] lg:w-[500px] xl:w-[560px] min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] bg-transparent p-0 flex flex-col items-center justify-center shrink-0 relative mt-0 md:-mt-6 lg:-mt-10 xl:-mt-12"
            >
              {/* Diagram Neon Ring */}
              <div className="relative w-[280px] h-[280px] sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full shrink-0 flex items-center justify-center border border-[#06b6d4]/50 shadow-[0_0_20px_2px_rgba(6,182,212,0.3),inset_0_0_20px_2px_rgba(6,182,212,0.2)]">
                {/* Central Title */}
                <div className="relative w-40 h-40 sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full bg-cyan-950/20 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center pointer-events-none shadow-[0_0_30px_rgba(6,182,212,0.2),inset_0_0_15px_rgba(6,182,212,0.1)] z-10">
                  {/* Cybernetic Inner Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-cyan-500/10 pointer-events-none" />
                  
                  <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest uppercase font-mono bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                    Benefits
                  </span>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-2" />
                  <span className="text-cyan-200/80 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.1em] pl-[0.1em] drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">
                    4つの提供価値
                  </span>
                </div>

                {/* PC用ホバー詳細表示エリア */}
                <AnimatePresence>
                  {hoveredId !== null && (
                    <motion.div
                      key={`hover-detail-normal-${hoveredId}`}
                      initial={{ opacity: 0, x: (hoveredId === 0 || hoveredId === 3) ? 15 : -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: (hoveredId === 0 || hoveredId === 3) ? 15 : -15 }}
                      transition={{ duration: 0.3 }}
                      className={`hidden md:block absolute w-[180px] lg:w-[240px] xl:w-[280px] pointer-events-none z-30 text-left ${
                        hoveredId === 0
                          ? "right-[135%] top-[-5%]"
                          : hoveredId === 3
                          ? "right-[135%] bottom-[-5%]"
                          : hoveredId === 1
                          ? "left-[135%] top-[-5%]"
                          : "left-[135%] bottom-[-5%]"
                      }`}
                    >
                      <h4 className="text-[#06b6d4] font-bold text-lg lg:text-xl xl:text-2xl mb-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] font-sans">
                        {benefitsData[hoveredId].title}
                      </h4>
                      <p className="text-slate-200 text-sm lg:text-base font-light leading-relaxed font-sans">
                        {benefitsData[hoveredId].desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4 Value Icons */}
                {benefitsData.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeId === item.id;
                  const isHighlighted = isActive || hoveredId === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleButtonClick(item.id)}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                      className={`absolute ${item.pos} w-[70px] h-[70px] sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] rounded-full border border-white/10 bg-gradient-to-br from-slate-900/90 to-[#06b6d4]/30 backdrop-blur-md flex items-center justify-center text-[#06b6d4] transition-all duration-400 ease-out z-20 focus:outline-none group ${isHighlighted ? 'scale-180 shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] border-[#06b6d4]/80 text-white' : 'shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-180 hover:shadow-[0_0_25px_#06b6d4,inset_0_0_15px_#06b6d4] hover:border-[#06b6d4]/80 hover:text-white'}`}
                      aria-label={item.title}
                    >
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-colors duration-400 ${!isHighlighted && !isAnyActiveOrHovered ? 'animate-icon-glow' : ''}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Fullscreen Overlay Modal */}
      <AnimatePresence>
        {modalActiveId !== null && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setActiveId(null);
              setModalActiveId(null);
            }}
            className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6"
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
                onClick={() => {
                  setActiveId(null);
                  setModalActiveId(null);
                }}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800 focus:outline-none"
                aria-label="閉じる"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 min-w-[48px] min-h-[48px] shrink-0 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4]">
                  {(() => {
                    const ActiveIcon = benefitsData[modalActiveId].icon;
                    return <ActiveIcon className="w-6 h-6" />;
                  })()}
                </div>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC] font-bold text-xl md:text-2xl pr-8">
                  {benefitsData[modalActiveId].title}
                </h3>
              </div>
              
              <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed">
                {benefitsData[modalActiveId].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
