import { motion } from 'motion/react';

export const newsItems = [
  {
    date: '2026.06.06',
    category: 'RELEASE',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    text: 'Day０（活動開始） 生成AI実践コミュニティ「ダツイチ—新大陸—」本格始動。'
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
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-24' : 'py-24 border-t border-slate-800/50'}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {!isSinglePage && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">ニュース</h2>
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
                <div className="text-slate-400 font-mono text-sm tracking-tight w-32 shrink-0">
                  {item.date}
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold border mb-3 md:mb-0 md:mr-3 align-middle ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors align-middle">
                    {item.text}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
