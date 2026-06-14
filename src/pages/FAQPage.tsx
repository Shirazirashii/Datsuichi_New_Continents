import FAQ from '../components/FAQ';
import faqImg from '../assets/faq.webp';

export default function FAQPage() {
  return (
    <main className="pt-32 pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">よくある質問</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <div className="w-full max-w-4xl mx-auto aspect-video md:aspect-[20/9] bg-slate-800/50 overflow-hidden relative border border-transparent">
          <img src={`/.netlify/images?url=${faqImg}`} alt="FAQ" className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" />
        </div>
      </div>
      <div className="w-full">
        <FAQ isSinglePage={true} />
      </div>
    </main>
  );
}
