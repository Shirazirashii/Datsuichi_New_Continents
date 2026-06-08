import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

interface AboutProps {
  isSinglePage?: boolean;
}

export default function About({ isSinglePage = false }: AboutProps) {
  return (
    <section className={`px-6 relative z-10 ${isSinglePage ? 'py-12' : 'py-24'}`}>
      <div className="max-w-4xl mx-auto space-y-16">
        {!isSinglePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              ダツイチとは
            </h2>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-6 text-slate-300 text-lg leading-relaxed font-light"
          >
            <p>
              「ダツイチ —新大陸—」は、生成AIを単なる知識として学ぶのではなく、「<span className="text-white font-medium">実務で使いこなすこと</span>」を目的とした自立駆動型の学習コミュニティです。
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
            className="w-full md:w-[400px] h-[300px] rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center shrink-0"
          >
          {/* Abstract Graphic */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbDItMi0yIDJ2OGgydjRoLTR2LTJoLTR2MmwtMi0yLTItMnYtOGgtdjRsLTItMi0yeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="w-32 h-32 rounded-full border border-slate-700/50 flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="w-24 h-24 rounded-full border border-slate-600/50 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-t border-cyan-400 opacity-80 animate-[spin_3s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
