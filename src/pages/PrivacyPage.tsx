import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <main className="pt-[88px] md:pt-[99px] pb-12 md:pb-24 min-h-screen relative">
      <div className="px-6 mb-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-0 font-sans">
          <p className="text-lg md:text-xl font-medium text-cyan-400 tracking-wider mb-1">Privacy Policy</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">プライバシーポリシー</h1>
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
            <div className="text-slate-300 text-sm md:text-base leading-relaxed md:leading-loose font-normal break-all space-y-8">
              <p>
                ダツイチー新大陸 運営事務局（以下、当事務局）は、当事務局が運営するWebサイト（以下、本サイト）および当事務局が提供する各種サービス（AIツールによるデジタル支援、各種コミュニティ活動、ワークショップ等を含み、以下、本サービス）における、利用者、クライアント、およびコミュニティ参画メンバー（以下、ユーザー）の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、本ポリシー）を定めます。
              </p>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  1. 個人情報取扱事業者の情報
                </h2>
                <div className="space-y-2 pl-1">
                  <p>●組織名： ダツイチー新大陸 運営事務局</p>
                  <p>●代表者： 堀 陽子</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  2. 収集する個人情報および収集方法
                </h2>
                <div className="space-y-4">
                  <p>当事務局は、本サイトおよび本サービスにおいて、以下の方法により個人情報を取得します。</p>
                  <p>●ユーザーから直接ご提供いただく情報： 本サイトのお問い合わせフォーム、ワークショップ等の参加申込、または個別のご連絡を通じて提供される、氏名（ニックネーム含む）、メールアドレス、所属・組織名、お問い合わせ内容等。</p>
                  <p>●本サイトの利用に伴い自動的に収集される情報： アクセスログ情報、クッキー（Cookie）およびこれに類する技術を通じて収集される、本サイトの閲覧履歴や利用状況に関するデータ（詳細は「7. アクセス解析ツールについて」をご確認ください）。</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  3. 個人情報の利用目的
                </h2>
                <div className="space-y-4">
                  <p>当事務局は、取得した個人情報を以下の目的の範囲内で適正に取り扱います。</p>
                  <div className="space-y-3">
                    <p>1. お問い合わせへの対応： 本サイトからのお問い合わせ、ご意見、ご要望に対する回答および本人確認のため。</p>
                    <p>2. 受託業務の遂行および連絡： クライアントから受託したAIツールによるデジタル支援業務の遂行、これに伴う提案、協議、成果物の納品、および必要な連絡のため。</p>
                    <p>3. 料金の請求および決済処理： 有償サービスやワークショップ等における利用料金の請求、決済の確認、およびこれらに付随する連絡のため。</p>
                    <p>4. イベント・ワークショップ等の運営： 対面またはオンラインで開催するワークショップやイベントの参加受付、運営管理、および事後アンケート等のご連絡のため。</p>
                    <p>5. コミュニティ運営・管理： コミュニティ参画メンバーの登録、プロジェクトへのアサイン管理、メンバー間の円滑な連携・連絡のため。</p>
                    <p>6. 本サービスの改善・案内： 本サイトおよび本サービスの利便性向上、新規プロジェクトやイベント等のご案内のため。</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  4. 外部AIツールの利用について
                </h2>
                <div className="space-y-4">
                  <p>当事務局は、ミーティング議事録の作成、要約、その他の業務効率化を目的として、取得した個人情報を含むデータを外部のAIツール（ChatGPT等）に入力（送信）する場合があります。</p>
                  <p>この場合、当事務局は、入力したデータがAIモデルの学習に利用されないよう設定（オプトアウト）を施したツールに限定して利用し、情報の安全管理に細心の注意を払います。</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  5. 個人情報の第三者提供およびプロジェクトメンバー間の共有
                </h2>
                <div className="space-y-4">
                  <p>当事務局は、ユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。ただし、以下の場合は除きます。</p>
                  <div className="space-y-3">
                    <p>●プロジェクト参画メンバーへの共有：</p>
                    <p className="pl-4">受託したデジタル支援業務等の案件を遂行するにあたり、当該プロジェクトにアサインされた特定のコミュニティ参画メンバーに対し、業務遂行に必要な範囲内で個人情報（案件概要や連絡先等）を共有する場合があります。</p>
                    <p className="pl-4">この場合、当事務局は当該メンバーに対し、適切な秘密保持および安全管理を義務付け、適切な監督を行います。なお、事前に依頼者とすり合わせを行い、共有の範囲について個別の合意がある場合は、その合意を最優先とします。</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  6. コミュニティ参画メンバーの個人情報保護
                </h2>
                <p>
                  当事務局は、本サービス（プロジェクト等）に参画するメンバーのプライベートな個人情報（連絡先、実績、その他活動に関わる情報）について、本人の同意なく他のメンバーや外部の第三者に開示・提供することはありません。メンバーが安心して活動できる環境の維持に努めます。
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  7. アクセス解析ツールについて
                </h2>
                <div className="space-y-4">
                  <p>本サイトでは、サイトの利用状況を把握し、コンテンツの改善を行うために、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
                  <p>Googleアナリティクスは、データの収集のためにクッキー（Cookie）を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。ユーザーはブラウザの設定でクッキーを無効にすることにより、このデータ収集を拒否することができます。Googleアナリティクスの利用規約およびプライバシーポリシーに関する詳細は、同社のサイトをご確認ください。</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  8. 個人情報の安全管理措置
                </h2>
                <p>
                  当事務局は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  9. 個人情報の開示・訂正・利用停止等
                </h2>
                <p>
                  ユーザーは、当事務局に対し、ご自身の個人情報の開示、訂正、追加、削除、利用の停止を請求することができます。これらのご請求、または個人情報の取り扱いに関する苦情・ご相談は、下記のお問い合わせ窓口までご連絡ください。
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  10. お問い合わせ窓口
                </h2>
                <div className="space-y-2 pl-1">
                  <p>個人情報の取り扱いに関するお問い合わせは、以下の窓口までお願いいたします。</p>
                  <p>●担当窓口： ダツイチー新大陸 運営事務局</p>
                  <p>●連絡先： <Link to="/contact" className="text-cyan-600 hover:text-cyan-800 underline transition-colors">お問い合わせフォーム</Link>より、ご連絡ください。</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-10 mb-4">
                  11. プライバシーポリシーの改定
                </h2>
                <p>当事務局は、個人情報保護に関する法令の変更や、コミュニティ活動の拡大・変更に伴い、本ポリシーを必要に応じて改定することがあります。改定した場合は、本サイト上にて速やかに公表いたします。</p>
              </div>

              <div className="pt-8 border-t border-slate-800 text-right">
                <p>制定日： 2026年6月16日</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
