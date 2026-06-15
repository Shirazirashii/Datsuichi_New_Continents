import fs from 'fs';

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// The original size was `h-20 md:h-24 aspect-[28/9]`
// We want to wrap it and change its sizing
let target = `{/* Right aligned Logo placeholder */}
          <div className="relative h-20 md:h-24 aspect-[28/9] flex-shrink-0 flex items-center justify-center ml-auto md:ml-auto">`;

let replacement = `{/* Right aligned Logo placeholder */}
          <div className="flex flex-col items-end gap-3 ml-auto md:ml-auto shrink-0 mt-8 md:mt-0">
            <div className="relative h-[72px] md:h-[86px] aspect-[28/9] flex items-center justify-center">`;

footer = footer.replace(target, replacement);

let target2 = `</svg>
          </div>
          <div className="absolute -bottom-8 left-0 lg:-bottom-6 text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">
            &copy; Datsuichi All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>`;

let replacement2 = `</svg>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 whitespace-nowrap text-right w-full pr-1 md:pr-2">
              &copy; Datsuichi All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>`;

footer = footer.replace(target2, replacement2);

fs.writeFileSync('src/components/Footer.tsx', footer);
console.log("Footer fixed!");
