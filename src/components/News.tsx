import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CustomArrow } from './CustomArrow';

export const newsItems = [
  {
    date: '2026.06.13',
    category: 'RELEASE',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    text: 'AI学習コミュニティ「ダツイチー新大陸」のホームページを公開しました。'
  },
  {
    date: '2026.06.06',
    category: 'RELEASE',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    text: 'Day０（活動開始） AI学習コミュニティ「ダツイチ—新大陸」本格始動。'
  },
  {
    date: '2026.05.20',
    category: 'NOTICE',
    categoryColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    text: 'プレエントリーの受付を開始しました。'
  }
];

interface NewsProps {
  limit?: number;
  isSinglePage?: boolean;
}

export default function News({ limit, isSinglePage = false }: NewsProps) {
  const displayedItems = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 border-t border-slate-800/50'}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {!isSinglePage && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-0">ニュース</h2>
          </div>
        )}
        
        <div className="space-y-2">
          {displayedItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-slate-400 font-mono text-base tracking-tight w-32 shrink-0">
                  {item.date}
                </div>
                <div className="flex-1">
                  <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors align-middle">
                    {item.text}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!isSinglePage && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-end pt-4"
          >
            <Link 
              to="/news"
              className="group flex items-center gap-4 md:gap-5"
            >
              <div className="flex flex-col items-end gap-0.5 text-right">
                <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">View all</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">すべて見る</span>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:opacity-90 transition-all duration-300 group-hover:scale-125 shadow-lg shadow-blue-500/20 flex-shrink-0">
                <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
