import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const GAS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwj8rBbLlJ_saI4E3RQpioPNLzwJbxNoNL_Hy7rvuDQue0hPt_0oQAghHACqmUiE_Yz0g/exec";

interface ContactProps {
  isSinglePage?: boolean;
}

export default function Contact({ isSinglePage = false }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);
  const showEmailError = emailTouched && email.trim() !== '' && !isEmailValid;

  const isFormValid = name.trim() !== '' && isEmailValid && message.trim() !== '' && agree;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || status === 'sending') return;

    setStatus('sending');

    const payload = JSON.stringify({ name, email, message });

    try {
      // First attempt: try with standard CORS (which allows reading response)
      const response = await fetch(GAS_WEBAPP_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: payload,
      });

      if (response.ok) {
        let isSuccess = true;
        try {
          const data = await response.json();
          if (data && (data.result === 'error' || data.status === 'error' || data.success === false)) {
            isSuccess = false;
          }
        } catch (jsonErr) {
          // If response body is not JSON, we still treat response.ok as success
        }

        if (isSuccess) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } else {
        // If the server explicitly rejected the request (e.g. 4xx, 5xx), don't fallback to no-cors
        setStatus('error');
      }
    } catch (err) {
      console.warn('CORS request failed, falling back to no-cors mode:', err);
      
      // Fallback: Try with 'no-cors' mode. The request will still be sent and processed by GAS.
      try {
        await fetch(GAS_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: payload,
        });
        
        // With 'no-cors', we cannot inspect the response, but since it did not throw an exception,
        // the request has been successfully dispatched to the GAS endpoint.
        setStatus('success');
      } catch (fallbackErr) {
        console.error('Submission failed in both cors and no-cors modes:', fallbackErr);
        setStatus('error');
      }
    }
  };

  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-16 md:py-32'}`}>
      <div className="max-w-4xl mx-auto space-y-10">
        {!isSinglePage && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">お問い合わせ</h2>
          </div>
        )}

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-2xl backdrop-blur-sm"
            >
              <div className="mx-auto w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-wide">送信完了</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
                  メッセージありがとうございます。<br className="hidden sm:inline" />
                  入力いただいたメールアドレスへ確認メールを自動送信しましたので、ご確認ください。
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-300 text-lg leading-relaxed font-bold block">お名前</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="脱　一郎"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === 'sending'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-300 text-lg leading-relaxed font-bold block">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full bg-slate-900 border rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:ring-1 transition-all ${
                    showEmailError 
                      ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500' 
                      : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="hello@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!emailTouched) setEmailTouched(true);
                  }}
                  onBlur={() => setEmailTouched(true)}
                  disabled={status === 'sending'}
                />
                {showEmailError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm font-light mt-1 pl-1"
                  >
                    有効なメールアドレスの形式ではありません。
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-300 text-lg leading-relaxed font-bold block">メッセージ</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-lg leading-relaxed font-light focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="ここにメッセージを入力してください"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 pb-4">
                <input 
                  type="checkbox" 
                  id="agree" 
                  className="w-5 h-5 accent-cyan-600 rounded bg-slate-900 border-slate-800 text-cyan-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                  disabled={status === 'sending'}
                />
                <label htmlFor="agree" className="text-slate-300 text-sm sm:text-base leading-relaxed font-light cursor-pointer select-none">
                  <Link to="/privacy" className="text-cyan-400 hover:underline">プライバシーポリシー</Link>に同意する
                </label>
              </div>

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-950/20 border border-red-900/40 rounded-xl text-center shadow-lg"
                >
                  <p className="text-red-400 text-sm font-light">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={!isFormValid || status === 'sending'}
                className={`w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl overflow-hidden transition-all ${
                  isFormValid && status !== 'sending' 
                    ? 'bg-cyan-600 text-white hover:bg-cyan-500 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]' 
                    : status === 'sending'
                    ? 'bg-cyan-800 text-cyan-200 cursor-wait'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <span>送信中...</span>
                    <svg className="animate-spin h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>送信する</span>
                    <Send className={`w-4 h-4 transition-transform ${isFormValid ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : ''}`} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
