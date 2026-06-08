import { motion } from 'motion/react';
import { Target, Zap, RefreshCcw, Users } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-6 h-6 text-cyan-400" />,
    title: "「リアル」を教材に",
    description: "架空の課題ではなく、外部企業や団体が抱える本物の困りごと（実案件）を題材にします。"
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "圧倒的な成長スピード",
    description: "実際の制約条件や期待値に応えるプロセスを通じて、スキルの定着を爆発的に早めます。"
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-green-400" />,
    title: "価値の好循環",
    description: "参加者は「生きた教材」を得て、依頼者は「自動化ツール」を獲得するエコシステム。"
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "自立型学習と学びの還元",
    description: "受け身の講義はなく、各自が最適なAIツールを選択し自ら解決策を構築。発見や失敗を共有し、「仲間に与えられる自分」を目指す文化。"
  }
];

interface ValueProps {
  isSinglePage?: boolean;
}

export default function Value({ isSinglePage = false }: ValueProps) {
  return (
    <section className={`px-6 relative ${isSinglePage ? 'pt-8 pb-24' : 'py-24 bg-slate-900/50'}`}>
      <div className="max-w-4xl mx-auto space-y-16">
        {!isSinglePage && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">提供価値</h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                {value.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-100">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
