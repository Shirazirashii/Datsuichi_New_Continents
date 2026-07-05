import News from '../components/News';
import newsImg from '../assets/datsuichi-news.webp';
import HeroImage from '../components/HeroImage';

export default function NewsPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">News</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">ニュース</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <HeroImage src={newsImg} alt="ダツイチー新大陸｜ニュース" />
      </div>
      <News isSinglePage={true} />
    </main>
  );
}

