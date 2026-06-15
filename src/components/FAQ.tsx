import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    q: "プログラミング初心者でも参加できますか？",
    a: "はい、可能です。ノーコードツールやAIを活用して「形にする」意欲があれば歓迎します。"
  },
  {
    q: "コンペで採用されなかった成果物はどうなりますか？",
    a: "自身のポートフォリオ（実績）として公開・活用することを推奨しています。"
  },
  {
    q: "使用するツールに指定はありますか？",
    a: "特にありません。Claude、ChatGPTなど最新のAIツールを自由に組み合わせて開発いただけます。"
  },
  {
    q: "参加費用はかかりますか？",
    a: "コミュニティへの参加費用はありません。ただし、AIツールへの課金は各自でご負担いただきます。"
  }
];

function FAQItem({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between gap-3 md:gap-6 text-left group"
      >
        <div className="flex items-center gap-2 md:gap-3 pr-2 md:pr-4">
          <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-cyan-400 flex items-center justify-center">
            <span className="text-cyan-400 text-base md:text-lg font-medium leading-none select-none">Q</span>
          </div>
          <span className="text-lg text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
            {q}
          </span>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50"
        >
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 text-slate-400 leading-relaxed font-bold">
              <div className="pl-4 border-l-2 border-slate-700/50">
                {a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQProps {
  isSinglePage?: boolean;
}

export default function FAQ({ isSinglePage = false }: FAQProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 bg-slate-900/30'}`}>
      <div className="max-w-4xl mx-auto space-y-16">
        {!isSinglePage && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">よくある質問</h2>
          </div>
        )}

        <div className="bg-slate-900/50 rounded-3xl p-6 md:p-10 border border-slate-800">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              q={faq.q} 
              a={faq.a} 
              isOpen={openIndexes.includes(idx)}
              onClick={() => toggleIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
