import { CustomArrow } from './CustomArrow';

export default function ClosedEntryButton() {
  return (
    <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSf2hpq4zWihRRS1kDau2jDcYg4YaE1cTASqF2JEWeq9Fq_lGA/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 md:gap-5"
    >
      <div className="flex flex-col items-end gap-0.5 text-right">
        <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">Entry</span>
        <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">参加申込</span>
      </div>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-125 flex-shrink-0">
        <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
      </div>
    </a>
  );
}
