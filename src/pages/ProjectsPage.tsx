import Projects from '../components/Projects';
import { motion } from 'motion/react';
import projectImg from '../assets/datsuichi-project.webp';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CustomArrow } from '../components/CustomArrow';
import HeroImage from '../components/HeroImage';

export default function ProjectsPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-6 md:pb-12 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Project</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">プロジェクト</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <HeroImage src={projectImg} alt="ダツイチー新大陸｜プロジェクト" />
      </div>
      <Projects isSinglePage={true} />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              今後のロードマップ
            </h3>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            個人事業主や地域コミュニティの案件をテーマに、現在は、プロボノとして活動しています。<br />
            将来的には有償案件を取り扱い「真の実践型コミュニティ」を目指します。
          </p>
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
