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
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 text-cyan-400 font-bold tracking-wider mb-2 px-3 py-1 text-xs border border-cyan-500/30">
                <span className="rounded-full bg-cyan-400 animate-pulse w-2 h-2" />
                進行中
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                プロジェクト
              </h2>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 text-cyan-400 font-bold tracking-wider mb-2 px-4 py-2 text-base border border-transparent">
                <span className="rounded-full bg-cyan-400 animate-pulse w-3 h-3" />
                進行中
              </div>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-3xl bg-slate-900 p-8 md:p-12 ${isSinglePage ? 'border border-transparent' : 'border border-slate-800'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-slate-500 text-sm font-medium tracking-wider">クライアント</span>
                <p className="text-lg text-slate-200 font-medium flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-slate-400" />
                  オクトエイド
                </p>
                <p className="text-sm text-slate-400 font-light">（メンタルダウン予防啓発団体）</p>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <span className="text-slate-500 text-sm font-medium tracking-wider">支援内容</span>
                <p className="text-lg text-slate-200 font-medium">
                  Webサイト構築、Instagram投稿の自動化ツール構築
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-800">
              <span className="text-slate-500 text-sm font-medium tracking-wider block mb-3">形式</span>
              <p className="text-slate-300 font-light leading-relaxed">
                コンペティション形式。<br />最優秀成果物は実際の現場で運用されます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
