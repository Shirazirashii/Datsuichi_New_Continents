import Projects from '../components/Projects';
import { motion } from 'motion/react';
import { ArrowRight, Map } from 'lucide-react';
import projectImg from '../assets/project.jpg';

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-12 min-h-screen relative">
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="flex flex-col gap-0">
          <p className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wider mb-1">Project</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">プロジェクト</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <div className="w-full aspect-video bg-slate-800/50 overflow-hidden relative border border-slate-700">
          <img src={projectImg} alt="プロジェクト" className="absolute inset-0 w-full h-full object-cover z-10" />
          {/* 黒ぼかし（ビネット） */}
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)' }} />
        </div>
      </div>
      <Projects isSinglePage={true} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            <Map className="w-6 h-6 text-slate-400" />
            今後のロードマップ
          </h3>
          <div className="rounded-3xl bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-l-cyan-500 p-8 space-y-4">
            <p className="text-slate-300 leading-relaxed font-light">
              個人事業主や地域コミュニティの案件をテーマに実践。将来的には有償案件化し「最強の実践者集団」の完成を目指します。
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-4 cursor-pointer hover:text-cyan-300 transition-colors w-fit">
              <span>ビジョンについてもっと知る</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
