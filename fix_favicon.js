import fs from 'fs';
let app = fs.readFileSync('src/App.tsx', 'utf8');

// Find the long d="M..." string
let match = app.match(/d="(M161[^"]+)"/);
if (match) {
  let d = match[1];
  let favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 6 136 116">
  <path fill="#000000" fill-rule="evenodd" clip-rule="evenodd" d="${d}" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', favicon);
  console.log("Favicon updated!");
}
