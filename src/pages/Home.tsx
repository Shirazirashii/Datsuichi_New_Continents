import Hero from '../components/Hero';
import About from '../components/About';
import Target from '../components/Target';
import Projects from '../components/Projects';
import News from '../components/News';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About hideBenefits={true} />
      <About showBenefitsOnly={true} />
      <Target />
      <Projects />
      
      <div className="relative pb-16">
        <News limit={3} />
      </div>
    </main>
  );
}

