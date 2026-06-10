import Contact from '../components/Contact';
import contactImg from '../assets/contact_us.jpg';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="flex flex-col gap-0">
          <p className="text-xl md:text-2xl font-medium text-cyan-400 tracking-wider mb-1">Contact us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">お問い合わせ</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <div className="w-full aspect-video bg-slate-800/50 overflow-hidden relative border border-slate-700">
          <img src={contactImg} alt="お問い合わせ" className="absolute inset-0 w-full h-full object-cover z-10" />
          {/* 黒ぼかし（ビネット） */}
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)' }} />
        </div>
      </div>
      <div className="w-full">
        <Contact isSinglePage={true} />
      </div>
    </main>
  );
}
