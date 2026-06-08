import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="flex flex-col gap-0">
          <p className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wider mb-1">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">よくある質問</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="w-full h-48 md:h-64 lg:h-96 bg-slate-800/50 overflow-hidden relative mb-8">
        {/* <img src="/your-image-path.jpg" alt="FAQ" className="absolute inset-0 w-full h-full object-cover z-10" /> */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER</div>
      </div>
      <div className="w-full">
        <FAQ isSinglePage={true} />
      </div>
    </main>
  );
}
