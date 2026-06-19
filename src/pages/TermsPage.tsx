import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <main className="pt-32 pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-0 font-sans">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Terms of Service</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">利用規約</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-20">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600">
              利用規約について
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              具体的な利用規約の内容については、後ほど追加されます。
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
