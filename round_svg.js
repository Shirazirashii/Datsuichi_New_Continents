import fs from 'fs';

let app = fs.readFileSync('src/App.tsx', 'utf8');
let match = app.match(/d="([^"]+)"/);
if (match) {
    let d = match[1];
    // Round all numbers to 1 decimal place to reduce size
    d = d.replace(/-?\d+\.\d+/g, (n) => parseFloat(n).toFixed(1).replace(/\.0$/, ''));
    
    app = app.replace(match[1], d);
    
    // Change container to be wider so it is not cropped
    // The logo is wider than it is tall, so w-20 (80px) and h-14 (56px) gives a good ratio without expanding vertical height
    app = app.replace('aspect-square lg:aspect-[28/9]', 'w-20 md:w-24 lg:w-auto lg:aspect-[28/9]');
    
    // Remove scale-125 origin-center since we increase size using viewBox and container width
    app = app.replace('lg:hidden transform scale-125 origin-center', 'lg:hidden');
    
    // Update viewBox to fit the path tightly, increasing the drawing size
    app = app.replace('viewBox="0 0 151 144"', 'viewBox="18 8 130 110"');

    fs.writeFileSync('src/App.tsx', app);
    console.log('Optimized SVG and adjusted container in App.tsx');
}
