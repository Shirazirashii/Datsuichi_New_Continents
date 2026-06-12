import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  isSinglePage?: boolean;
}

export default function Contact({ isSinglePage = false }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

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
            <label htmlFor="name" className="text-slate-300 text-lg leading-relaxed font-light block">お名前</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="脱　一郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-slate-300 text-lg leading-relaxed font-light block">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-slate-300 text-lg leading-relaxed font-light block">メッセージ</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              placeholder="ここにメッセージを入力してください"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button 
            disabled={!isFormValid}
            className={`w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl overflow-hidden transition-all ${isFormValid ? 'bg-cyan-600 text-white hover:bg-cyan-500 active:scale-95' : 'bg-slate-700 text-slate-400 cursor-not-allowed'}`}
          >
            <span>送信する</span>
            <Send className={`w-4 h-4 transition-transform ${isFormValid ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : ''}`} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
