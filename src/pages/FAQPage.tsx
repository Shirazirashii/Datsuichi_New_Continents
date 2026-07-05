import FAQ from '../components/FAQ';
import faqImg from '../assets/datsuichi-faq.webp';
import HeroImage from '../components/HeroImage';

export default function FAQPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">よくある質問</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <HeroImage src={faqImg} alt="ダツイチー新大陸｜FAQ" />
      </div>
      <div className="w-full">
        <FAQ isSinglePage={true} />
      </div>
    </main>
  );
}

