import News from '../components/News';
import newsImg from '../assets/news.jpg';

export default function NewsPage() {
  return (
    <main className="pt-32 pb-12 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">News</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">ニュース</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <div className="w-full max-w-4xl mx-auto aspect-[20/9] bg-slate-800/50 overflow-hidden relative border border-transparent">
          <img src={newsImg} alt="ニュース" className="absolute inset-0 w-full h-full object-cover z-10" />
        </div>
      </div>
      <News isSinglePage={true} />
    </main>
  );
}
