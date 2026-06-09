import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-6">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        {/* 背景画像エリア（画像を挿入する場合は以下のコメントアウトを解除し、パスを指定してください） */}
        <img src="/assets/datsuichi_new_hero.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-700/20 blur-[120px] rounded-full pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-10" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-start text-left gap-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="mt-8 text-5xl md:text-7xl font-display font-black leading-tight tracking-tight text-white flex flex-col gap-2 md:gap-4"
        >
          <span>ダツイチ ― 新大陸 ―</span>
          <span className="text-2xl md:text-4xl font-bold tracking-wide text-white/80">Datsuichi New Continents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-bold"
        >
          「作りたい」が、最大のエンジンになる。
        </motion.p>
      </div>
    </section>
  );
}
