/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './components/Footer';

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
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between lg:justify-start lg:gap-10 py-3 lg:py-[8px] px-4 md:px-8">
          {/* Left: Logo */}
          <Link to="/" className="shrink-0 flex items-center group">
            <div className="relative h-[54px] lg:h-[62px] aspect-[1296/391] shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:opacity-90">
              <svg viewBox="0 0 1296 391" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <style>
                    {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');`}
                  </style>
                  <linearGradient id="cyanGradientDesktop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#89E8D6" />
                    <stop offset="100%" stopColor="#25A7CC" />
                  </linearGradient>
                </defs>
                {/* 1. Emblem (Rocket/Whale logo mark with 'D' icon) */}
                <g transform="matrix(0.84375 0 0 0.842672 -0.000488281 0)" fill="url(#cyanGradientDesktop)">
                  <path d="M178.61 153.287C186.572 146.165 194.508 138.355 202.989 131.851C265.031 84.2659 342.125 39.3934 422.628 41.6486C453.608 43.3405 505.874 53.0869 502.906 94.2705C500.864 122.593 480.645 147.523 460.677 166.03C459.203 167.397 457.123 169.23 455.89 170.767C453.433 189.641 452.46 208.546 449.83 227.562C442.846 278.616 423.833 336.715 381.85 369.679C354.147 391.431 314.877 398.32 280.643 393.959C242.321 389.077 207.142 384.137 170.319 401.277C188.389 383.455 227.924 378.04 252.102 378.038C263.713 378.037 276.102 379.325 287.86 379.62C329.866 380.673 376.165 364.785 399.002 326.983L398.957 326.225C394.271 330.029 389.946 334.986 385.535 339.223C357.204 366.436 318.785 372.983 280.875 370.166C228.62 366.283 173.8 377.394 138.329 418.51C148.733 398.497 157.52 385.722 177.381 373.851C204.076 357.894 240.607 350.373 271.457 354.713C264.503 339.675 253.274 319.105 234.235 328.373C224.473 333.125 219.79 342.672 210.793 348.198C204.193 351.787 192.996 355.147 185.916 358.079C157.89 369.687 148.552 381.607 135.051 407.029C135.809 386.666 137.379 373.231 153.398 358.314C158.164 353.916 163.52 350.202 169.311 347.28C185.469 339.239 209.604 334.922 211.224 310.891C211.614 305.107 209.573 299.229 207.524 293.816C218.453 301.271 223.887 303.972 223.088 318.365C232.291 304.202 234.872 289.269 218.608 278.649C212.547 274.67 205.145 273.278 198.051 274.784C192.295 276.054 185.004 280.242 181.846 285.34C172.762 300 189.569 316.396 180.282 330.984C176.492 336.938 171.305 339.673 165.308 343.052C183.179 313.587 160.394 316.874 146.275 304.609C113.162 275.844 151.739 214.132 187.399 206.616C209.712 201.181 224.015 208.609 244.173 215.998C238.622 228.709 226.374 239.131 213.596 244.041C201.467 248.701 192.034 248.247 179.568 247.907C196.573 252.03 215.389 255.074 231.319 245.398C245.165 236.988 252.258 222.571 260.663 209.457C281.401 177.103 315.396 155.173 352.224 145.473C366.268 141.774 380.878 140.198 395.32 138.525C378.364 148.049 356.84 159.198 339.346 167.718C377.795 156.951 461.863 119.551 478.346 82.766C417.006 72.9972 310.63 122.678 256.653 151.592L255.002 150.737C263.69 145.041 273.591 137.193 282.332 132.002C328.533 104.565 380.138 77.8849 433.807 69.7486C446.6 67.8093 459.863 68.017 472.586 68.0294C423.399 49.0304 363.133 60.5679 316.421 81.6703C258.399 107.882 207.492 147.306 164.415 194.001C150.329 209.27 136.401 225.393 128.668 244.914C123.801 257.2 124.161 263.935 125.381 276.581C112.652 266.224 108.352 250.319 113.828 234.847C118.989 220.263 128.205 211.076 112.359 198.322C105.463 192.417 93.5649 187.151 84.5921 184.601C98.8366 172.275 119.791 158.812 138.458 155.208C151.676 152.656 165.387 154.096 178.61 153.287ZM275.029 319.049C287.467 319.232 299.906 319.347 312.346 319.393C340.128 319.42 364.52 318.811 385.927 298.256C408.534 276.549 418.885 241.348 395.333 215.922C381.636 201.136 351.14 197.652 331.936 200.44C315.085 202.296 289.196 206.654 277.772 221.058C267.25 234.325 274.14 249.835 291.484 252.001L292.583 251.494C270.807 205.033 363.384 199.136 375.127 233.171C389.38 274.48 357.007 315.951 312.389 309.015C324.783 286.518 322.145 264.602 329.626 240.324C332.761 232.845 334.653 229.278 339.827 222.642C276.03 227.45 310.735 288.821 275.029 319.049ZM377.062 181.446C387.381 181.338 393.66 181.548 403.583 185.464C429.049 170.401 470.63 138.478 480.887 108.77C481.146 108.02 481.28 107.122 481.077 106.328C456.168 143.305 417.288 164.306 376.692 179.761C375.499 180.216 374.331 180.217 374.455 181.31L377.062 181.446Z" />
                  <path d="M255.002 150.737L256.653 151.592C254.355 153.047 252.632 154.3 250.005 155.082C250.515 153.455 253.447 151.81 255.002 150.737Z" />
                </g>
                {/* 2. Japanese Text (ダツイチ - Stylized Katakana) */}
                <g transform="matrix(0.84375 0 0 0.842672 -0.000488281 0)" fill="url(#cyanGradientDesktop)">
                  <path d="M1339.64 137.302C1384.37 137.19 1434.1 136.195 1478.39 137.525C1472.95 145.528 1467.57 156.159 1461.91 163.737C1455.66 172.102 1437.08 170.114 1425.88 170.998L1409.6 198.625C1423.09 197.804 1446.92 198.513 1460.74 198.639C1451.06 215.653 1446.08 233.7 1424.93 231.402C1415.19 230.343 1400.56 231.363 1390.45 231.489C1382.6 246.33 1373.93 263.738 1362.17 275.539C1339.3 298.506 1315.63 296.438 1286.06 296.426C1276.46 296.356 1259.9 295.827 1250.95 296.689C1257.31 287.779 1267.22 263.063 1278.09 262.101C1291.99 260.872 1307.08 263.669 1321.22 260.521C1336.55 257.109 1342.26 244.251 1349.69 232.006L1266.43 232.259C1272.98 222.687 1281.06 204.494 1288.93 198.002C1315.39 197.435 1343.81 197.987 1370.43 198.014L1386.65 171.033L1317.8 170.937C1320.29 165.582 1335.52 139.617 1339.64 137.302Z" />
                  <path d="M627.182 136.55C661.881 137.036 701.918 135.392 735.893 137.048L722.361 161.166C739.351 162.448 758.277 160.624 774.644 162.114C769.359 174.624 751.814 203.823 744.488 216.87L721.922 257.335C697.518 301.167 706.485 297.236 656.94 296.481L692.81 233.132C667.429 233.389 642.047 233.447 616.665 233.308L616.17 232.633C616.604 229.99 620.475 225.199 621.81 222.621C636.546 194.159 636.609 197.031 666.876 197.059L712.602 197.112C717.835 188.885 722.706 179.612 727.422 171.018C710.426 171.111 693.429 171.094 676.433 170.968C647.046 170.884 646.692 166.392 631.016 191.213C626.521 198.423 621.208 205.091 615.183 211.084C591.351 234.375 563.784 234.904 532.947 234.582C539.84 222.333 546.869 210.161 554.033 198.068C599.782 197.024 596.363 172.533 618.749 141.696C621.115 138.437 623.371 137.398 627.182 136.55Z" />
                  <path d="M1246.09 134.366C1258.75 134.379 1272.76 134.139 1285.29 134.739C1281.8 141.822 1274.19 154.779 1269.97 161.768C1260.89 176.798 1251.33 197.696 1238.73 209.589C1211.33 235.463 1188.14 233.4 1154.12 233.328C1146.14 247.587 1126.31 287.86 1115.24 295.864C1107.58 297.102 1085.91 296.606 1076.91 296.751C1083.64 285.298 1090.22 273.467 1096.79 261.903C1101.55 252.897 1108.17 242.134 1113.36 233.163C1088.54 233.736 1063.53 233.002 1038.7 233.301C1032.82 233.371 1027.09 233.135 1021.22 233.72C1027.32 224.656 1032.02 214.537 1038.09 205.334C1044.04 196.314 1050.24 197.886 1059.92 197.86C1067.39 197.839 1074.89 197.93 1082.36 197.944L1149.47 198.039C1167.89 198.056 1180.98 199.676 1198.74 194.733C1220.46 188.687 1233.92 138.08 1246.09 134.366Z" />
                  <path d="M994.158 137.23C1007.75 136.925 1022.17 137.18 1035.83 137.204C1033.93 141.711 1029.01 149.981 1026.44 154.557L1009.04 185.48C1001.57 198.667 994.198 211.909 986.927 225.205C973.241 250.095 964.222 271.036 938.483 285.337C915.815 297.931 894.783 296.335 869.914 296.349L818.625 296.34C808.89 296.29 790.055 295.701 781.052 296.624C786.595 287.156 792.054 275.016 799.198 266.873C800.852 264.989 802.701 263.175 805.221 262.576C812.765 260.784 822.366 261.961 830.148 261.993C851.596 262.083 875.775 263.367 896.962 261.808C906.736 261.088 917.448 258.345 925.176 252.046C936.781 242.589 970.914 177.284 980.825 159.647C984.794 152.583 988.68 143.507 993.987 137.422L994.158 137.23Z" />
                  <path d="M919.862 138.986C930.613 138.602 946.989 138.416 957.543 139.288C957.154 140.236 956.734 141.17 956.283 142.09C950.429 154.267 936.56 177.214 928.263 188.272C926.999 189.956 924.07 191.155 922.065 191.86L883.846 191.96C893.08 176.474 903.04 156.489 913.928 142.093C915.07 140.583 917.979 139.572 919.862 138.986Z" />
                  <path d="M860.735 138.859C871.537 138.268 888.256 138.417 899.039 139.04C891.555 154.581 878.529 173.522 869.165 188.436C868.19 189.987 865.739 191.287 864.023 191.913C852.275 192.711 837.675 192.246 825.741 192.028C834.79 176.461 845.236 156.789 855.511 141.953C856.396 140.674 859.192 139.478 860.735 138.859Z" />
                  <path d="M798.926 117.004C809.844 116.678 822.082 116.954 833.098 116.982C830.529 122.588 814.012 150.679 809.824 154.822C803.553 156.799 783.098 156.001 775.675 155.913C782.621 143.78 791.064 128.363 798.926 117.004Z" />
                  <path d="M760.529 116.505C769.592 116.493 779.48 116.273 788.444 117.047C781.669 128.151 774.013 141.465 766.789 152.405C765.799 153.904 764.559 154.034 762.938 154.521C752.853 154.616 743.136 154.72 733.045 154.364C738.427 143.892 746.107 130.47 752.829 120.689C755.075 117.419 756.848 116.899 760.529 116.505Z" />
                </g>
                {/* 3. Corrected English Subtitle (Pristine Vector Typography) */}
                <text
                  x="460"
                  y="329"
                  fontFamily="Inter, sans-serif"
                  fontSize="51.5"
                  fontWeight="800"
                  letterSpacing="0.02em"
                  wordSpacing="0.74em"
                  fill="url(#cyanGradientDesktop)"
                  dominantBaseline="alphabetic"
                  style={{ wordSpacing: '0.74em' }}
                >
                  Datsuichi New Continents
                </text>
              </svg>
            </div>
          </Link>
          
          {/* Right Group: Navigation & Menu */}
          <div className="flex items-center ml-auto lg:ml-0 flex-none gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {/* Main Nav (Shows 3 on mobile, full list on desktop) */}
            <nav className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-xs sm:text-sm md:text-base lg:text-[17px] font-bold whitespace-nowrap tracking-wide">
              <Link to="/about" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">私たちの向かう先</Link>
              <Link to="/projects" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">プロジェクト</Link>
              <Link to="/community" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">団体運営</Link>
              <Link to="/news" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">ニュース</Link>
              <Link to="/faq" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">よくある質問</Link>
              <Link to="/contact" className="hidden lg:block text-white hover:text-cyan-400 transition-colors">お問い合わせ</Link>
            </nav>

            {/* Hamburger Menu (Mobile Only) */}
            <button 
              className="lg:hidden shrink-0 text-slate-300 hover:text-white focus:outline-none ml-1 sm:ml-2 relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Toggle menu"
              aria-expanded={isDrawerOpen}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between items-center shrink-0">
                <span className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out ${isDrawerOpen ? 'rotate-45 top-[7px]' : 'top-0'}`} />
                <span className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out top-[7px] ${isDrawerOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out ${isDrawerOpen ? '-rotate-45 top-[7px]' : 'top-[14px]'}`} />
              </div>
            </button>
          </div>
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
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">New Continents</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">私たちの向かう先</span>
            </Link>
            <Link to="/projects" onClick={() => setIsDrawerOpen(false)} className="group flex flex-col">
              <span className="text-cyan-400 text-xs font-medium tracking-wider mb-0.5">Project</span>
              <span className="text-white text-xl md:text-2xl font-bold group-hover:text-slate-300 transition-colors">プロジェクト</span>
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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
