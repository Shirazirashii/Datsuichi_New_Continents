import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import heroImg from '../assets/datsuichi_new_hero.webp';

export default function Hero() {
  return (
    <section className="relative w-full aspect-[4/3] sm:aspect-video lg:h-[calc(100vh-87px)] lg:min-h-[calc(100vh-87px)] lg:aspect-auto flex items-center justify-center overflow-hidden px-6 lg:px-12 mt-16 lg:mt-[87px]">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        {/* 背景画像エリア */}
        <img src={`/.netlify/images?url=${heroImg}`} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-95" loading="eager" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-cyan-700/20 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue-600/10 blur-[60px] lg:blur-[100px] rounded-full pointer-events-none z-10" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-start text-left gap-6 lg:gap-10 -translate-y-4 lg:-translate-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl lg:text-7xl font-display font-black leading-tight tracking-tight text-white flex flex-col gap-2 lg:gap-4 lg:whitespace-nowrap"
        >
          <span className="whitespace-nowrap -mr-6 md:mr-0">ダツイチ ― 新大陸</span>
          <span className="text-xl lg:text-4xl font-bold tracking-wide text-white/80">Datsuichi New Continents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base lg:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC] max-w-3xl leading-relaxed font-bold"
        >
          「作りたい」が、最大のエンジンになる。
        </motion.p>
      </div>
    </section>
  );
}
