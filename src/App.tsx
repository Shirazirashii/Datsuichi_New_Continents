/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ValuePage from './pages/ValuePage';
import ManagementPage from './pages/ManagementPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 md:px-8">
        {/* Left: Logo & Nav Links */}
        <div className="flex items-center gap-6 md:gap-10 min-w-0 flex-1 overflow-x-auto scrollbar-hide">
          <Link to="/" className="shrink-0 flex items-center group gap-3">
            <div className="relative w-10 h-10 flex-shrink-0 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-shadow overflow-hidden">
              <span className="text-white text-xl z-0 font-display font-black tracking-tight">D</span>
            </div>
          </Link>
          
          <nav className="flex items-center gap-5 text-base md:text-lg font-medium whitespace-nowrap min-w-max">
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">ダツイチとは</Link>
            <Link to="/value" className="text-slate-300 hover:text-white transition-colors">提供価値</Link>
            <Link to="/projects" className="text-slate-300 hover:text-cyan-400 transition-colors">プロジェクト</Link>
            <Link to="/management" className="text-slate-300 hover:text-white transition-colors">運営</Link>
            <Link to="/news" className="text-slate-300 hover:text-white transition-colors">ニュース</Link>
            <Link to="/faq" className="text-slate-300 hover:text-white transition-colors hidden sm:inline">よくある質問</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors hidden sm:inline">お問い合わせ</Link>
          </nav>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0 ml-4 pl-2 flex items-center min-h-[40px] border-l border-slate-800/50">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-4 py-2 flex-shrink-0 bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold text-base md:text-lg tracking-wide rounded hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            参加する
          </a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/value" element={<ValuePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
