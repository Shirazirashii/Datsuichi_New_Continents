import { motion } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import orgImg from '../assets/datsuichi-community.webp';
import ClosedEntryButton from '../components/ClosedEntryButton';
import { Icon } from '@iconify/react';
import HeroImage from '../components/HeroImage';
import { CustomArrow } from '../components/CustomArrow';

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
        <HeroImage src={orgImg} alt="ダツイチー新大陸｜団体運営" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-20 md:space-y-0">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:mb-8"
          >
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC]">
                「作りたい」
              </span>
              <span>が、エンジンになる</span>
            </p>
            <div className="text-slate-200 text-lg leading-relaxed font-light">
              {/* スマホ画面用 (現行維持) */}
              <div className="md:hidden">
                <p>
                  私たちは、ただの知識の習得ではなく、<br />
                  自ら手を動かし、試行錯誤を通じて、<br />
                  価値を形にすることを大切にしています。
                </p>
                <div className="mb-6" />
                <p>
                  創ったものを仲間と共有し、<br />
                  学びや失敗さえも還元しながら、
                </p>
                <div className="mb-6" />
                <p>
                  一人ではたどり着けない未来を、<br />
                  共に切り拓いていく。
                </p>
                <div className="mb-10" />
                <p>
                  それが、「ダツイチ－新大陸」です。
                </p>
              </div>

              {/* PC画面用 (新改行・微調整) */}
              <div className="hidden md:block">
                <p>
                  私たちは、ただの知識の習得ではなく、自ら手を動かし、試行錯誤を通じて、<br />
                  価値を形にすることを大切にしています。
                </p>
                <div className="mb-8" />
                <p>
                  創ったものを仲間と共有し、学びや失敗さえも還元しながら、<br />
                  一人ではたどり着けない未来を、共に切り拓いていく。
                </p>
                <div className="mb-12" />
                <p>
                  それが、「ダツイチ－新大陸」です。
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:mt-0"
          >
            <div className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight text-white">団体概要</h2>
            </div>
            <div className="text-slate-200 text-lg leading-relaxed font-light">
              <p>
                「ダツイチ—新大陸」は、生成AIを実務で使いこなすことを目的とした実践型の学習コミュニティです。
              </p>
              <div className="mb-6 md:mb-8" />
              <p>
                前身となるAI勉強会「ダツイチ！」で培ってきた学びを土台に、<br className="hidden md:inline" />
                参加者一人ひとりが主体となって学び、作り、価値を生み出す場として誕生しました。
              </p>
              <div className="mb-6 md:mb-8" />
              <p>
                私たちは、AI時代の新しい学びの形を、<br className="inline md:hidden" />
                仲間と共に探究し続けています。
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:mt-20"
          >
            <div className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight text-white">これまでの歩み</h2>
            </div>
            <p className="text-slate-200 text-lg leading-relaxed font-light">
              「ダツイチ－新大陸」の前身となるAI勉強会「ダツイチ！」の活動記録をご覧いただけます。
            </p>
            <div className="flex justify-end mt-8">
              <a 
                href="https://shirazirashii.github.io/Datsuichi-memorial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 md:gap-5"
              >
                <div className="flex flex-col items-end gap-0.5 text-right">
                  <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">Roots</span>
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">活動の軌跡を見る</span>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-300 transform-gpu will-change-transform group-hover:scale-125 flex-shrink-0">
                  <CustomArrow className="w-[40%] aspect-[297/436] text-white ml-[12%] transform-gpu will-change-transform" />
                </div>
              </a>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:mt-20"
          >
            <div className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight text-white">運営情報</h2>
            </div>

            {/* 団体情報カード (目に優しい低コントラスト・ウォームグレー) */}
            <div className="bg-zinc-50 rounded-none p-6 md:p-10 shadow-xl border border-zinc-200/80 font-sans mt-8 text-[#151515]">
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
