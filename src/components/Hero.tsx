import { motion } from 'motion/react';
import heroImg from '../assets/datsuichi-new-hero.webp';
import heroImgMobile from '../assets/datsuichi-new-hero2.webp';

export default function Hero() {
  return (
    <section className="relative w-full aspect-[9/16] sm:aspect-video flex items-center justify-center overflow-hidden px-0 sm:px-6 lg:px-12 mt-[79px]">
      <style>{`
        @keyframes scrollHint {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: .6;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-scroll-hint {
          animation: scrollHint 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        {/* 背景画像エリア (Mobile) */}
        <motion.img 
          src={heroImgMobile} 
          alt="ダツイチー新大陸｜Hero Background Mobile" 
          className="block sm:hidden absolute inset-0 w-full h-full object-cover object-center z-0 opacity-95" 
          loading="eager" 
          referrerPolicy="no-referrer"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.00 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* 背景画像エリア (Desktop) */}
        <motion.img 
          src={heroImg} 
          alt="ダツイチー新大陸｜Hero Background" 
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-right-top sm:object-center z-0 opacity-95" 
          loading="eager" 
          referrerPolicy="no-referrer"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.00 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-cyan-700/20 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue-600/10 blur-[60px] lg:blur-[100px] rounded-full pointer-events-none z-10" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-start text-left gap-4 lg:gap-8 px-6 sm:px-0 -translate-y-[156px] sm:-translate-y-12 lg:-translate-y-24">
        <h1 className="font-display leading-[1.2] lg:leading-[1.2] tracking-tight text-white flex flex-col gap-2 lg:gap-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="block text-[36px] lg:text-[64px] leading-[1.2] lg:leading-[1.2]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC] font-bold">
              「作りたい」
            </span>
            <span className="text-white font-bold lg:font-semibold">
              が
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="block text-[36px] lg:text-[64px] leading-[1.2] lg:leading-[1.2] text-white font-bold lg:font-semibold"
          >
            エンジンになる
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          className="text-[18px] lg:text-[24px] text-white font-medium tracking-wider mt-6 lg:mt-12"
        >
          ——いざ、新大陸へ
        </motion.p>
      </div>

      {/* Scroll Down Guide on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.5 }}
        className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center sm:hidden z-20 text-white/75 animate-scroll-hint"
      >
        <span className="text-[13px] font-medium tracking-wider mb-1 uppercase">Scroll Down</span>
        <span className="text-[18px] font-light leading-none">|</span>
      </motion.div>
    </section>
  );
}
