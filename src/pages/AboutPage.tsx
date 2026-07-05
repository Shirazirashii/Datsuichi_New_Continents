import About from '../components/About';
import aboutImg from '../assets/datsuichi-about-us.webp';
import HeroImage from '../components/HeroImage';

import Target from '../components/Target';

export default function AboutPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">About us</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">ダツイチとは</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <HeroImage src={aboutImg} alt="ダツイチー新大陸｜ダツイチとは" />
      </div>
      <div className="w-full">
        <About isSinglePage={true} />
        <Target isSinglePage={true} />
      </div>
    </main>
  );
}

