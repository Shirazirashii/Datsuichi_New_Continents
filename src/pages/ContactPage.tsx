import Contact from '../components/Contact';
import contactImg from '../assets/contact_us.webp';
import HeroImage from '../components/HeroImage';

export default function ContactPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-0">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Contact us</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">お問い合わせ</h1>
        </div>
      </div>
        
      {/* 横長画像挿入エリア */}
      <div className="px-6 mb-4 md:mb-8">
        <HeroImage src={contactImg} alt="お問い合わせ" />
      </div>
      <div className="w-full">
        <Contact isSinglePage={true} />
      </div>
    </main>
  );
}

