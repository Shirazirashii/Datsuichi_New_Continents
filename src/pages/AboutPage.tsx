import About from '../components/About';
import aboutImg from '../assets/about_us.jpg';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="flex flex-col gap-0">
          <p className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wider mb-1">About us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">ダツイチとは</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="w-full h-48 md:h-64 lg:h-96 bg-slate-800/50 overflow-hidden relative mb-8">
        <img src={aboutImg} alt="ダツイチとは" className="absolute inset-0 w-full h-full object-cover z-10" />
      </div>
      <div className="w-full">
        <About isSinglePage={true} />
      </div>
    </main>
  );
}
