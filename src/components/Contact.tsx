import { motion } from 'motion/react';
import { Send } from 'lucide-react';

interface ContactProps {
  isSinglePage?: boolean;
}

export default function Contact({ isSinglePage = false }: ContactProps) {
  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-32' : 'py-32'}`}>
      <div className="max-w-4xl mx-auto space-y-10">
        {!isSinglePage && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">お問い合わせ</h2>
          </div>
        )}

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-300 block">お名前</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light"
              placeholder="山田 太郎"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-300 block">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light"
              placeholder="hello@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300 block">メッセージ</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light resize-none"
              placeholder="ここにメッセージを入力してください"
            ></textarea>
          </div>

          <button className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl overflow-hidden transition-transform active:scale-95 hover:bg-cyan-500">
            <span>送信する</span>
            <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
