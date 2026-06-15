import Projects from '../components/Projects';
import { motion } from 'motion/react';
import projectImg from '../assets/project.webp';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CustomArrow } from '../components/CustomArrow';

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-6 md:pb-12 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Project</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">プロジェクト</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <div className="w-full max-w-4xl mx-auto aspect-video md:aspect-[20/9] bg-slate-800/50 overflow-hidden relative border border-transparent">
          <img src={`/.netlify/images?url=${projectImg}`} alt="プロジェクト" className="absolute inset-0 w-full h-full object-cover z-10" fetchpriority="high" />
        </div>
      </div>
      <Projects isSinglePage={true} />
      <div className="max-w-4xl mx-auto px-6 py-6 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
            <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <Icon icon="pinhead:treasure-map" className="w-6 h-6 text-slate-400" />
              今後のロードマップ
            </h3>
          </div>
          <div className="rounded-3xl bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-l-[#D2B48C] p-8 space-y-4">
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              個人事業主や地域コミュニティの案件をテーマに実践。将来的には有償案件化し「最強の実践者集団」の完成を目指します。
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <Link 
              to="/contact"
              className="group flex items-center gap-4 md:gap-5"
            >
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D2B48C] transition-colors">Request</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D2B48C] transition-colors tracking-tight">支援をご希望の方</span>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D2B48C] flex items-center justify-center transition-all duration-300 group-hover:scale-125 shadow-lg shadow-[#D2B48C]/20 flex-shrink-0">
                <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
