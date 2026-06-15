import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, X } from 'lucide-react';
import { CustomArrow } from './CustomArrow';

export default function ClosedEntryButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        className="group flex items-center gap-4 md:gap-5"
      >
        <div className="flex flex-col items-end gap-0.5 text-right">
          <span className="text-base md:text-lg font-bold text-slate-400 tracking-tight transition-colors">Entry</span>
          <span className="text-xl md:text-2xl font-bold text-slate-400 transition-colors tracking-tight">参加申込</span>
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-700 flex items-center justify-center transition-all duration-300 shadow-lg flex-shrink-0 group-hover:opacity-90 group-hover:scale-125">
          <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
        </div>
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6"
          >
            <motion.div
              key="modal-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#0f172a] backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 text-left shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800 focus:outline-none"
                aria-label="閉じる"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-cyan-400 font-bold text-xl md:text-2xl pr-8">
                  次のエントリー期間までお待ちください。
                </h3>
              </div>
              
              <p className="text-slate-300 text-base font-light leading-relaxed">
                コミュニティへの参加をご検討いただき、誠にありがとうございます。たいへん恐縮ではありますが、現在、プロジェクト進行中のため、参加を制限しております。
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
