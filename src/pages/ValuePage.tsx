import Value from '../components/Value';
import benefitsImg from '../assets/benefits.jpg';

export default function ValuePage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Benefits</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">提供価値</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-8 md:mb-12">
        <div className="w-full max-w-4xl mx-auto aspect-video bg-slate-800/50 overflow-hidden relative border border-transparent">
          <img src={benefitsImg} alt="提供価値" className="absolute inset-0 w-full h-full object-cover z-10" />
        </div>
      </div>
      <div className="w-full">
        <Value isSinglePage={true} />
      </div>
    </main>
  );
}
