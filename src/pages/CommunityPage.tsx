import { motion } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import orgImg from '../assets/community.webp';
import ClosedEntryButton from '../components/ClosedEntryButton';
import { Icon } from '@iconify/react';
import HeroImage from '../components/HeroImage';

export default function CommunityPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Community</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">団体運営</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-12 md:mb-16">
        <HeroImage src={orgImg} alt="団体運営" />
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
            </div>
            <p className="text-xl md:text-2xl font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC]">
              「作りたい」が、最大のエンジンになる。
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              私たちは、単なる知識の習得ではなく、自ら手を動かし、試行錯誤を通じて「形にする」喜びを原動力としています。自分の発見や失敗を仲間に還元する「与えられる自分」を目指し、共に成長する団体運営であり続けることを大切にしています。
            </p>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end pt-4"
            >
              <ClosedEntryButton />
            </motion.div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Icon icon="streamline-logos:guildeding-logo" className="w-6 h-6 text-cyan-400" style={{ fill: '#22d3ee' }} />
              <h2 className="text-2xl font-bold tracking-tight text-slate-200">団体概要</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              「ダツイチ—新大陸」は、生成AIを実務で使いこなすことを目的とした「自立駆動型の学習コミュニティ」です。前身のAI勉強会「ダツイチ」での知見を活かしながら、参加者が主体となって、新しい学びのパラダイムを切り拓く場所として誕生しました。
            </p>

            {/* 団体情報カード (白地・カーボンブラック) */}
            <div className="bg-white rounded-none p-6 md:p-10 shadow-2xl border border-slate-100 font-sans mt-8 text-[#151515]">
              <div className="divide-y divide-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2 md:gap-4">
                  <div className="text-[#151515] font-bold text-base md:col-span-1 flex items-center border-l-4 border-cyan-500 pl-3">
                    団体名
                  </div>
                  <div className="text-[#2d2d2d] text-base md:col-span-3 font-normal pl-4 md:pl-0">
                    ダツイチー新大陸
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2 md:gap-4">
                  <div className="text-[#151515] font-bold text-base md:col-span-1 flex items-center border-l-4 border-cyan-500 pl-3">
                    設立年月日
                  </div>
                  <div className="text-[#2d2d2d] text-base md:col-span-3 font-normal pl-4 md:pl-0">
                    2026年5月1日
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2 md:gap-4">
                  <div className="text-[#151515] font-bold text-base md:col-span-1 flex items-center border-l-4 border-cyan-500 pl-3">
                    代表者
                  </div>
                  <div className="text-[#2d2d2d] text-base md:col-span-3 font-normal pl-4 md:pl-0">
                    堀 陽子
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2 md:gap-4">
                  <div className="text-[#151515] font-bold text-base md:col-span-1 flex items-start border-l-4 border-cyan-500 pl-3">
                    活動内容
                  </div>
                  <div className="text-[#2d2d2d] text-base md:col-span-3 font-normal leading-relaxed whitespace-pre-wrap pl-4 md:pl-0">
                    ・デジタル支援{"\n"}・AIワークショップ
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-2 md:gap-4">
                  <div className="text-[#151515] font-bold text-base md:col-span-1 flex items-start border-l-4 border-cyan-500 pl-3">
                    連絡先
                  </div>
                  <div className="text-[#2d2d2d] text-base md:col-span-3 font-normal leading-relaxed pl-4 md:pl-0">
                    <Link to="/contact" className="text-cyan-600 hover:text-cyan-800 underline transition-colors">お問い合わせフォーム</Link>より、ご連絡ください。
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
