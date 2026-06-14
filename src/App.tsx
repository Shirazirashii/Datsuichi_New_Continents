/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

import logoNavi1 from './assets/logo_navi1.webp';
import logoNavi2 from './assets/logo_navi2.webp';

function Header() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-start lg:gap-10 py-4 px-4 md:py-6 md:px-8">
          {/* Left: Logo */}
          <Link to="/" className="shrink-0 flex items-center group gap-3">
            <div className="relative h-14 md:h-16 aspect-square lg:aspect-[28/9] flex-shrink-0 rounded bg-slate-900 flex items-center justify-center transition-all overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:opacity-90">
              <img src={logoNavi2} alt="ダツイチ" loading="eager" className="absolute inset-0 w-full h-full object-contain z-10 lg:hidden" />
              <img src={logoNavi1} alt="ダツイチ" loading="eager" className="absolute inset-0 w-full h-full object-contain z-10 hidden lg:block" />
            </div>
          </Link>
          
          {/* Main Nav (Shows 3 centered on mobile, full list on desktop) */}
          <nav className="flex items-center justify-around flex-1 lg:flex-none lg:justify-start lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap px-2 sm:px-6 lg:px-0">
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">ダツイチとは</Link>
            <Link to="/projects" className="text-white hover:text-cyan-400 transition-colors">プロジェクト</Link>
            <Link to="/community" className="text-white hover:text-cyan-400 transition-colors">団体運営</Link>
            <Link to="/news" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">ニュース</Link>
            <Link to="/faq" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">よくある質問</Link>
            <Link to="/contact" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">お問い合わせ</Link>
          </nav>

          {/* Right: Hamburger Menu (Mobile Only) */}
          <button 
            className="lg:hidden shrink-0 text-slate-300 hover:text-white focus:outline-none transition-colors ml-auto pl-2"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Toggle menu"
            aria-expanded={isDrawerOpen}
          >
            {isDrawerOpen ? <X className="w-7 h-7 md:w-8 md:h-8" /> : <Menu className="w-7 h-7 md:w-8 md:h-8" />}
          </button>
        </div>

        {/* Dropdown Accordion Content */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl ${
            isDrawerOpen ? 'max-h-[800px] border-t border-slate-800/50' : 'max-h-0'
          }`}
        >
          <div className="px-10 py-8 pb-12 flex flex-col gap-6 items-start max-w-7xl mx-auto">
            <Link to="/" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">Home</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">トップページ</span>
            </Link>
            <Link to="/about" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">About us</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">ダツイチとは</span>
            </Link>
            <Link to="/projects" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">Project</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-cyan-300 transition-colors">プロジェクト</span>
            </Link>
            <Link to="/community" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">Community</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">団体運営</span>
            </Link>
            <Link to="/news" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">News</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">ニュース</span>
            </Link>
            <Link to="/faq" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">FAQ</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">よくある質問</span>
            </Link>
            <Link to="/contact" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">Contact us</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">お問い合わせ</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay for clicking outside */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />
    </>
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
