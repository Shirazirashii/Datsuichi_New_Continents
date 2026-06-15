import fs from 'fs';

// 1. App.tsx (Nav Area scaling, padding, text align)
let app = fs.readFileSync('src/App.tsx', 'utf8');

// Nav Area Padding: 'py-4 px-4 md:py-6 md:px-8' -> 'py-[14.4px] px-4 md:py-[21.6px] md:px-8' 
app = app.replace('py-4 px-4 md:py-6 md:px-8', 'py-[14px] px-4 md:py-[22px] md:px-8');

// Resize Mobile Nav Logo:
app = app.replace('h-14 md:h-16 w-20 md:w-24 lg:w-auto lg:aspect-[546/176]', 'h-[50px] md:h-[58px] w-[72px] md:w-[86px] lg:w-auto lg:aspect-[546/176]');

// Change Nav Layout for uniform spacing on mobile
app = app.replace(
  'nav className="flex items-center justify-around flex-1 lg:flex-none lg:justify-start lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap px-2 sm:px-6 lg:px-0"',
  'nav className="flex items-center justify-evenly flex-1 gap-1 lg:flex-none lg:justify-start lg:gap-6 text-[11px] sm:text-xs md:text-sm lg:text-xl font-medium whitespace-nowrap px-1 sm:px-4 lg:px-0"'
);

fs.writeFileSync('src/App.tsx', app);

// 2. Footer.tsx (Logo resize + Copyright)
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('w-[180px] sm:w-[220px] md:w-[260px]', 'w-[162px] sm:w-[198px] md:w-[234px]');

// Insert Copyright: Find the end of max-w-7xl div
if (!footer.includes('© Datsuichi All Rights Reserved.')) {
  footer = footer.replace('</svg>\n          </div>\n        </div>', '</svg>\n          </div>\n          <div className="absolute -bottom-8 left-0 lg:-bottom-6 text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">\n            &copy; Datsuichi All Rights Reserved.\n          </div>\n        </div>');
}

fs.writeFileSync('src/components/Footer.tsx', footer);

// 3. Hero.tsx (Overlay darkening -> opacity-95 reduces black overlay)
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace('opacity-80', 'opacity-95');
fs.writeFileSync('src/components/Hero.tsx', hero);

// 4. Target, Contact, FAQ, News, Projects (isSinglePage bottom margin removal)
const comps = [
  {file: 'src/components/Contact.tsx', str: "isSinglePage ? 'pt-8 pb-16 md:pb-32' : 'py-16 md:py-32'", rep: "isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-16 md:py-32'"},
  {file: 'src/components/FAQ.tsx', str: "isSinglePage ? 'pt-8 pb-12 md:pb-24' : 'py-12 md:py-24 bg-slate-900/30'", rep: "isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 bg-slate-900/30'"},
  {file: 'src/components/News.tsx', str: "isSinglePage ? 'pt-8 pb-12 md:pb-24' : 'py-12 md:py-24 border-t border-slate-800/50'", rep: "isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 border-t border-slate-800/50'"},
  {file: 'src/components/Projects.tsx', str: "isSinglePage ? 'pt-8 pb-12 md:pb-24' : 'py-12 md:py-24 bg-slate-900/50'", rep: "isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 bg-slate-900/50'"}
];
comps.forEach(c => {
  let text = fs.readFileSync(c.file, 'utf8');
  text = text.replace(c.str, c.rep);
  fs.writeFileSync(c.file, text);
});

// Update Target.tsx to support isSinglePage
let target = fs.readFileSync('src/components/Target.tsx', 'utf8');
if (!target.includes('isSinglePage')) {
  target = target.replace('export default function Target() {', 'export default function Target({ isSinglePage = false }: { isSinglePage?: boolean }) {');
  target = target.replace('section className="pt-16 pb-16 md:pb-32 px-6"', 'section className={`px-6 ${isSinglePage ? "pt-16 pb-0" : "pt-16 pb-16 md:pb-32"}`}');
  fs.writeFileSync('src/components/Target.tsx', target);
  
  let about = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');
  about = about.replace('<Target />', '<Target isSinglePage={true} />');
  fs.writeFileSync('src/pages/AboutPage.tsx', about);
}

// 5. Favicon
let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('favicon.svg')) {
  html = html.replace(/<title>/, `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <title>`);
  fs.writeFileSync('index.html', html);
  
  // Extract path 'd' from App.tsx
  let match = app.match(/d="([^"]+)"/);
  if (match) {
    let d = match[1];
    let favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 6 136 116">
  <path fill="#000000" fill-rule="evenodd" clip-rule="evenodd" d="${d}" />
</svg>`;
    fs.writeFileSync('public/favicon.svg', favicon);
  }
}

console.log("All fixes applied!");
