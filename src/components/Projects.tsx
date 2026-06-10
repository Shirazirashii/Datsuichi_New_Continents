import { motion } from 'motion/react';
import { ArrowRight, Globe2, Map } from 'lucide-react';

interface ProjectsProps {
  isSinglePage?: boolean;
}

export default function Projects({ isSinglePage = false }: ProjectsProps) {
  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-24' : 'py-24 bg-slate-900/50'}`}>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Current Project */}
        <div className="space-y-12">
          {!isSinglePage ? (
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 text-red-500 font-bold tracking-wider mb-2 px-4 py-2 text-base border border-transparent">
                <span className="rounded-full bg-red-500 animate-pulse w-3 h-3" />
                進行中
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                プロジェクト
              </h2>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 text-red-500 font-bold tracking-wider mb-2 px-4 py-2 text-base border border-transparent">
                <span className="rounded-full bg-red-500 animate-pulse w-3 h-3" />
                進行中
              </div>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-3xl bg-[#D2B48C] py-4 px-8 md:py-6 md:px-12 border border-[#8B5A2B] text-[#1A1A1A]`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-2">
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider">クライアント</span>
                <p className="text-xl font-medium flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-[#1A1A1A]/60" />
                  <span className="text-[#8B0000]">オクトエイド</span>
                </p>
                <p className="text-base text-[#1A1A1A] font-light">（メンタルダウン予防啓発団体）</p>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider">支援内容</span>
                <p className="text-lg font-medium">
                  Webサイト構築、<br />Instagram投稿の自動化ツール構築
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t-2 border-[#1A1A1A]">
              <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">形式</span>
              <p className="text-lg font-medium">
                コンペティション形式。（最優秀成果物は実際の現場で運用される予定です。）
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
