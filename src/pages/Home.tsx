import Hero from '../components/Hero';
import About from '../components/About';
import Value from '../components/Value';
import Target from '../components/Target';
import Projects from '../components/Projects';
import News from '../components/News';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Value />
      <Target />
      <Projects />
      
      <div className="relative pb-16">
        <News limit={3} />
        <div className="max-w-4xl mx-auto px-6 mt-4 flex justify-end">
          <Link to="/news" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500/50 bg-slate-900/50 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-all group">
            ニュース一覧を見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <FAQ />
    </main>
  );
}

