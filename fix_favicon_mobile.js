import fs from 'fs';
let app = fs.readFileSync('src/App.tsx', 'utf8');

// Find the short d="M130.764..." string for mobile
let match = app.match(/d="(M130\.764[^"]+)"/);
if (match) {
  let d = match[1];
  let favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="18 8 130 110">
  <path fill="#000000" fill-rule="evenodd" clip-rule="evenodd" d="${d}" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', favicon);
  console.log("Favicon updated to mobile version!");
}
