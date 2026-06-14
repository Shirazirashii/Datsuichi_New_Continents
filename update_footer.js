const fs = require('fs');

let opt = fs.readFileSync('opt.svg', 'utf8');
let match = opt.match(/d="([^"]+)"/);
let d = match[1];

// Make background transparent inside SVG path
d = d.replace(/^M0 88v88h546V0H0zm161\.472-70\.925/, 'M161.472 17.075');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Replace the right logo wrapper to change bg, make it larger
const oldDivPrefix = `<div className="relative h-14 md:h-16 aspect-[28/9] flex-shrink-0 rounded bg-slate-900 flex items-center justify-center shadow-lg overflow-hidden ml-auto md:ml-auto">`;
const newDivPrefix = `<div className="relative h-14 md:h-16 aspect-[28/9] flex-shrink-0 flex items-center justify-center ml-auto md:ml-auto">`;

const svgRegex = /<svg width="546".*?<\/svg>/s;
const newSvg = `<svg width="546" height="176" viewBox="0 0 546 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">\n               <path fillRule="evenodd" clipRule="evenodd" d="${d}" fill="white"/>\n            </svg>`;

footer = footer.replace(oldDivPrefix, newDivPrefix);
footer = footer.replace(svgRegex, newSvg);

fs.writeFileSync('src/components/Footer.tsx', footer);
console.log('Update finished');
