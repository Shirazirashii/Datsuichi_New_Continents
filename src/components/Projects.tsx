import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ProjectsProps {
  isSinglePage?: boolean;
}

export default function Projects({ isSinglePage = false }: ProjectsProps) {
  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-12 md:pb-24' : 'py-12 md:py-24 bg-slate-900/50'}`}>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Current Project */}
        <div className="space-y-12">
          {!isSinglePage && (
            <div className="flex flex-col items-start">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left w-full">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  プロジェクト
                </h2>
              </div>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-none bg-[#D2B48C] py-6 px-8 md:py-8 md:px-12 border border-[#8B5A2B] text-[#1A1A1A]`}
          >
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">クライアント</span>
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">PN 001</span>
                </div>
                <p className="text-xl font-medium flex flex-wrap items-center gap-2">
                  <Icon icon="fluent-emoji-high-contrast:octopus" className="w-5 h-5 text-[#1A1A1A]/60 flex-shrink-0" />
                  <span className="text-[#B22222] drop-shadow-md font-bold text-2xl">オクトエイド</span>
                  <span className="text-lg font-medium leading-relaxed text-[#1A1A1A]">（メンタルダウン予防啓発団体）</span>
                </p>
              </div>
              
              <div className="w-full h-px bg-[#1A1A1A]/30" />
              
              <div className="space-y-4">
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">支援内容</span>
                <p className="text-lg font-medium leading-relaxed">
                  Webサイト構築、<br className="md:hidden" />Instagram投稿の自動化ツール構築
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/30 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">形式</span>
                <p className="text-lg font-medium">
                  コンペティション
                </p>
              </div>
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">支援期間</span>
                <p className="text-lg font-medium">
                  2026年6月～9月
                </p>
              </div>
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">ステータス</span>
                <div className="inline-flex items-center gap-3 bg-[#1C1217] text-[#FF3040] px-5 py-2.5 rounded-full font-bold text-lg">
                  <span className="rounded-full bg-[#CC2030] animate-pulse w-4 h-4 block" />
                  進行中
                </div>
              </div>
            </div>
          </motion.div>
          
          {!isSinglePage && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end pt-4"
            >
              <Link 
                to="/contact"
                className="group flex items-center gap-4 md:gap-5"
              >
                <div className="flex flex-col items-end gap-0.5 text-right">
                  <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D2B48C] transition-colors">Request</span>
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D2B48C] transition-colors tracking-tight">支援をご希望の方</span>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D2B48C] flex items-center justify-center transition-all duration-300 group-hover:scale-125 shadow-lg shadow-[#D2B48C]/20 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
