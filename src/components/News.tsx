import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { CustomArrow, CustomArrowLeft } from './CustomArrow';
import newsDay1Img from '../assets/datsuichi-news-day1.webp';
import newsDay0Img from '../assets/datsuichi-news-day0.webp';
import newsOpenImg from '../assets/datsuichi-news-open.webp';
import newsDay2Img from '../assets/datsuichi-news-day2.webp';

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  images: string[];
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-001-day2',
    date: '2026.07.04',
    category: 'REPORT',
    title: 'ダツイチー新大陸｜Day2｜「アシスタント型」と「エージェント型」―Webサイトを磨き上げるプロフェッショナルたちの戦略。',
    images: [newsDay2Img],
    content: `<p>2026年7月4日。</p>
<p>シーズン1のプロジェクト「オクトエイド」のWebサイト制作が中盤に差し掛かる中、今回は意見交換会（Day 2）を開催しました。</p>
<p>テーマは、Web制作を超えて、「AI活用戦略の最適化」や「プロフェッショナルな品質管理」にまで広がり、AIを実務に活かそうとするコミュニティメンバーにとって、極めて示唆に富む知見が共有されました。</p>
<p class="text-white font-bold mt-6 mb-2">■「アシスタント型」と「エージェント型」</p>
<p>プロジェクトを効率的に進める上で、最も注目を集めたのが、AIツールの使い分けでした。</p>
<p>● アシスタント型AI（ChatGPT, Geminiなど）：<br />アイデア出しや構成案の検討、部分的なコード生成に活用。トークン消費を抑えつつ、プロトタイプを迅速に構築するのに適する。</p>
<p>● エージェント型AI（Claude Codeなど）：<br />フォルダ操作やファイル構造の管理、リファクタリング（コードの整理）など、自律的な作業に活用。複雑なプロジェクト構造を維持するのに役立つ。</p>
<p>「コストを抑える試作はアシスタント型で」「高度な構造化はエージェント型で」というハイブリッドなワークフローも紹介され、経済性と速度を両立させる実践的な方法として示されました 。</p>
<p class="text-white font-bold mt-6 mb-2">■「非機能要件」が分水嶺</p>
<p>Web制作において、AIを使えば「動くもの」は一瞬で作れます。けれど、実際のビジネスで通用するためには、目に見えない「非機能要件」の定義が不可欠です。</p>
<p>本セッションでは、セキュリティ・可用性・運用性といったプロフェッショナルなシステム開発において避けて通れない基準が議論されました。</p>
<p>「情報が安全に扱われているか」「サイトが落ちた際にどう復旧するか」といった要件を言語化し、クライアントと合意形成するプロセス ―これこそが、AIを単なる便利ツールからビジネスで使える「武器」へと昇華させる重要なステップとなります。</p>
<p class="text-white font-bold mt-6 mb-2">■一貫性を保つ「数値によるプロンプト制御」</p>
<p>AI生成画像にありがちな「画一的なデザイン」を脱し、ブランドの一貫性・世界観を保つための高度なテクニックも披露されました。</p>
<p>● Canvaとの融合：<br />AIで生成した素材をCanvaで加工・微調整するワークフローを導入。プロレベルのデザイン調整とレイアウトの最適化を容易にする。</p>
<p>● スタイル解析と数値化：<br />ベースとなる画像の線・色・光・質感をAIに分析させ、数値化。その数値化したスタイルを制約条件としてプロンプトに組み込むことで、生成物のデザインを固定できる。</p>
<p class="mt-6">これらの技法により、AIの「アドリブ性」を制御し、プロジェクト全体で統一されたビジュアル・アイデンティティを維持することが可能になりました。</p>
<p class="text-white font-bold mt-6 mb-2">■【おまけコラム】自律駆動を象徴する「自作タスク管理ツール」</p>
<p>運営メンバーから、AI（Claude）を使って、わずか数日で開発した独自のタスク管理ツール（ガントチャート）が公開されました。このツールは、ドラッグ＆ドロップによる直感的な操作や、期限超過の自動アラート機能をデフォルトで備えており、参加者を驚かせました。Notionなどの外部ツールにコストを掛けることなく、「AIで自ら課題を解決する」好例でした。</p>
<p>このツールは、今後のプロジェクト運営で使用し、その後、オープンソースとしてコミュニティ内で展開される予定です。</p>
<p class="text-white font-bold mt-6 mb-2">■次回、成果発表。そして社会実装へ</p>
<p>Day 3では、いよいよコンペティションへの提出と成果発表が行われます。プロジェクトの参加者は、自作したWebサイトの完成度を上げるため、これから最終調整に入ります。</p>
<p>「クライアントの期待に応えられるか」「自分が満足できるものを作れたか」というプロ意識を燃料に、AIを武器とした冒険者たちの挑戦はクライマックスへ向かいます。</p>
<p class="text-white font-bold mt-6 mb-2">■今後のスケジュール：</p>
<p>● 7月18日：<br />プロジェクト「オクトエイド」｜Day 3（Web制作フェーズ成果発表）</p>
<p>● 7月25日：<br />オクトエイド評価会（コンペティションによる最終審査）</p>`
  },
  {
    id: 'news-001',
    date: '2026.06.20',
    category: 'REPORT',
    title: 'ダツイチー新大陸｜Day1｜デジタル支援プロジェクト「オクトエイド」キックオフ。',
    images: [newsDay1Img],
    content: `<p>2026年6月20日。</p>
<p>「ダツイチ―新大陸」は、ついにシーズン1の初日（Day 1）を迎えました。</p>
<p>参加メンバー総勢23名（運営メンバー含む）が挑むのは、社会人のメンタルヘルス予防啓発団体「オクトエイド」のデジタル支援です。本レポートでは、AIを駆使して「Webサイトをゼロから構築する」ための、知的で熱量の高いキックオフの様子をお届けします。</p>
<p class="text-white font-bold mt-6 mb-2">■オクトエイドの理念に触れる</p>
<p>Day 1の幕開けは、支援対象となる「オクトエイド」の活動紹介から始まりました。同団体が掲げる合言葉は「波道でカニ食うし（なみちでかにくうし）」。主観的な心の変化に頼らず、客観的に気づきやすい「身体」と「行動」の変化に着目した、早期セルフケアを促すものです。</p>
<p>参加者は、この独自の標語を社会に浸透させるためのWebサイトを、わずか1.5ヶ月という短期間で構築するというミッションを受け取りました。</p>
<p class="text-white font-bold mt-6 mb-2">■「バイブコーディング」の始まり</p>
<p>本プロジェクトが一般的なWeb制作講座と一線を画すのは、「コードをかけない非専門家が、AIをパートナーに、高度なサイト構築に挑む」点にあります。技術アドバイザーを担当するカーリー氏は、Webサイトの基本構造（HTML/CSS）からレスポンシブデザインの重要性までを解説しました。けれど、技術以上に一番伝えたかったのは、「自分でコードを書くこと」ではなく、「AIにどう意図を伝え、構造を組み上げるか」という設計マインドでした。</p>
<p class="mt-4">● AIツールの縦横無尽な活用：<br />Cursor（ChatGPT搭載）やGoogle Geminiなどを駆使し、要件定義資料を読み込ませてコードを生成する実演が行われました。</p>
<p>● 「武器」の使いこなし術：<br />プロンプトに「指示したこと以外は絶対に変更しない」という制約を加えるなど、AIの暴走を防ぎながら意図通りのデザインを実装する、現場レベルのノウハウが共有されました。</p>
<p class="text-white font-bold mt-6 mb-2">■新たなリスキリングの形</p>
<p>「ダツイチー新大陸」には、正解を教える講師はいません。Day 1の後半では、すでにAIのみで高度なWebサイトを構築したメンバーの実例が共有され、「自分でもやるかも」という参加者の熱量を刺激しました。</p>
<p>● 多様なバックグラウンド：<br />IT企業に身を置く者から、ノーコードツールの経験はあるがコーディングは未経験という者まで、多様なメンバーが集っています。</p>
<p>● ピアラーニング（相互学習）：<br />Googleチャットでの知見共有や、互いの悩みへのフィードバックを通じて、コミュニティ全体で課題を突破していく体制が整えられています。</p>
<p>これは、企業のAI導入において最も困難とされる「組織への定着」と「自律的人材の育成」を、実践を通じて解決する一つのモデルケースといえるかもしれません。</p>
<p class="text-white font-bold mt-6 mb-2">■シーズン1：Web制作フェーズの展望</p>
<p>今後、参加者は各自でWebサイトの構築に着手していきます 。</p>
<p>● デザインコンセプト：<br />「優しくナチュラルな癒やし」を感じさせるテイスト。</p>
<p>● 技術要件：<br />モバイル対応 of UXデザインや、お問い合わせフォームの実装。</p>
<p>● コンペティション：<br />最終的な成果物はピッチ形式で提案され、選定された作品が実際に「オクトエイド」の公式Webサイトとして採用・公開される予定です。</p>
<hr class="border-slate-800 my-6" />
<p class="text-white font-bold">■今後のスケジュール：</p>
<p>● 6月14日：<br />シーズン1参加申込の締切。</p>
<p>● 6月20日：<br />プロジェクト「オクトエイド」｜Day 1（Web制作フェーズ）キックオフ。</p>`
  },
  {
    id: 'news-002',
    date: '2026.06.13',
    category: 'RELEASE',
    title: 'AI学習コミュニティ「ダツイチー新大陸」のホームページを公開しました。',
    images: [newsOpenImg],
    content: `<p>このたび、私たち「ダツイチ！」は、活動を次なるフェーズへと移し、新たに「ダツイチ―新大陸」として本格始動しました。それに伴い、公式ホームページも新規開設いたしました。</p>
<p class="text-white font-bold mt-6 mb-2">■ ホームページ開設の目的</p>
<p>本ホームページは、これまでの活動成果やイベント情報などを広く社会へ公開するとともに、AIの導入・現場への定着に悩む企業担当者様（未来のお客様）および、AIへの能動的な学習意欲を持つビジネスパーソン（未来のコミュニティメンバー）との「新たな共創の窓口」とすることを目的としております。</p>
<p class="text-white font-bold mt-6 mb-2">■ 主要な掲載コンテンツ</p>
<p class="font-bold mt-4">1. コミュニティのビジョンと共創エコシステムのご紹介</p>
<p>コミュニティメンバーの実践学習と、クライアント側（依頼企業様）の成果デリバリーを両立させる「相互利益モデル」の詳細をご説明しています。</p>
<p class="font-bold mt-4">2. 過去の活動レポートおよび、成果物の一部公開</p>
<p>コミュニティメンバーが泥臭く学び、実案件に真摯に向き合った活動の記録や、コミュニティ内で構築したシステムや自動化ツールを一部公開していきます。</p>
<p class="font-bold mt-4">3. 共創パートナーシップのご案内</p>
<p>自社の業務プロセスにAIを定着・内製化させたい企業・団体様および、能動的にプロジェクトへ参画したいビジネスパーソン向けの<a href="/contact" class="text-cyan-400 hover:underline">お問い合わせフォーム</a>。</p>
<p class="text-white font-bold mt-6 mb-2">■ 団体運営メンバーより、皆様へのメッセージ</p>
<p>本サイトと掲載物は全て、コーディングできない非専門家たちが、AIを使って作り上げたものです。</p>
<p>私たちは、技術的な「綺麗事」を語るのではなく、実際にAIを武器として使いこなし、成果を生むまでの泥臭い「学習・実践力」を持つコミュニティです。本サイトを通じて、それらを可視化し続いていきます。今後の活動レポートも随時更新していきますので、ぜひご覧ください</p>
<p class="mt-6">ご依頼は、サイト内の<a href="/contact" class="text-cyan-400 hover:underline">お問い合わせフォーム</a>より随時受け付けております。</p>`
  },
  {
    id: 'news-003',
    date: '2026.06.06',
    category: 'RELEASE',
    title: 'Day0｜自立駆動型のAI学習コミュニティ「ダツイチー新大陸」本格始動。',
    images: [newsDay0Img],
    content: `<p>2026年6月6日。</p>
<p>AI勉強会「ダツイチ」は、新たなフェーズとなる「新大陸」に突入。本日は、その説明会を開催しました。新たな「ダツイチー新大陸」は、生成AIを単なる便利ツールとしてではなく、実際のビジネス課題を解決し、価値を創造するための「武器」として使いこなす自立駆動型の学習コミュニティです。</p>
<p class="text-white font-bold mt-6 mb-2">■「実案件」という真剣勝負の場へ</p>
<p>従来のAI学習の多くは、架空のサンプルコードや定型的な課題の消化に留まりがちです。しかし、本コミュニティが重視するのは、実際に困りごとを抱えるクライアントの課題を解決する「実案件」へのコミットメントです。</p>
<p class="font-bold mt-4">なぜ実案件なのか。</p>
<p>それは、明確なゴールと「誰かの役に立ちたい」という情熱こそが、学習スピードを爆発的に加速させ、スキルの定着を確かなものにするからです。</p>
<p>参加者は、提供されるリアルな要件定義書に基づき、自律的に思考し、泥臭く試行錯誤を繰り返すことで、現場で通用する「生きたスキル」を身につけていきます。</p>
<p class="text-white font-bold mt-6 mb-2">■学習と成果が循環する「相互利益のエコシステム」</p>
<p>核心は、参加者（コミュニティメンバー）と依頼者（クライアント）が共創する「相互利益のエコシステム」の構築にあります。</p>
<p>● 参加者の価値：<br />実案件という最高の教材を通じ、実践的な開発経験と、クライアントからのダイレクトなフィードバックを獲得できる。</p>
<p>● 依頼者の価値：<br />意欲的なコミュニティメンバーの知恵を活用することで、開発コストを抑えつつ、革新的な成果物を得ることができる。</p>
<p>この仕組みは、企業のAI導入やリスキリングにおいて課題となる「理論と実践 of 乖離」を埋める、新たな共創のパラダイムを示唆しています。</p>
<p class="text-white font-bold mt-6 mb-2">■「自律駆動」と「ピアラーニング」</p>
<p>このコミュニティには、一方的な「講義」は存在しません。メンバーは互いに知恵と経験を共有し合い、ピアラーニングによって学習し、課題を乗り越えていきます。</p>
<p>また、AIエンジニアの視点だけでなく、ビギナー視点からのフィードバックも、全体の理解度やアウトプットの質を底上げしてくれると期待しています。</p>
<p class="text-white font-bold mt-6 mb-2">■シーズン1の挑戦</p>
<p>6月20日からスタートするシーズン1では、社会人のメンタルヘルス予防啓発に取り組む団体「オクトエイド」のデジタル支援を行います。約3ヶ月間の活動は、大きく2つのフェーズで構成されます。</p>
<p>● Webサイト制作（Day 1–3）：<br />団体の理念を体現し、今後の活動を支えるWebサイトの構築。</p>
<p>● 業務プロセスの自動化（Day 4–6）：<br />SNSへのコンテンツ投稿など、運用の手間を劇的に削減するツールの開発。</p>
<p>作成された成果物はコンペティション形式で提案され、選定された作品は実際に団体の運用に採用される予定です。6月20日、「ダツイチー新大陸」が踏み出す第一歩に、ぜひご注目ください。</p>
<hr class="border-slate-800 my-6" />
<p class="text-white font-bold">■今後のスケジュール：</p>
<p>● 6月14日：<br />シーズン1参加申込の締切。</p>
<p>● 6月20日：<br />プロジェクト「オクトエイド」｜Day 1（Web制作フェーズ）キックオフ。</p>`
  },
  {
    id: 'news-004',
    date: '2026.05.20',
    category: 'NOTICE',
    title: 'ダツイチー新大陸｜プレエントリーの受付を開始しました。',
    images: [],
    content: `<p>AI学習コミュニティ「ダツイチ—新大陸」のプレエントリー受付を開始いたしました。</p>
<p>「独学でのスキルアップに限界を感じている方」「実務で使えるAI活用スキルを身につけたい方」「仲間と共に高め合える環境を求めている方」のエントリーを心よりお待ちしております。</p>
<p>詳細やご質問は、本サイト内の<a href="/contact" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors">お問い合わせ</a>フォームよりお気軽にご連絡ください。</p>`
  }
];

interface NewsProps {
  limit?: number;
  isSinglePage?: boolean;
}

export default function News({ limit, isSinglePage = false }: NewsProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
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
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group block cursor-pointer"
              onClick={() => setSelectedNews(item)}
            >
              <div className="flex flex-col sm:grid sm:grid-cols-[240px_1fr] items-start sm:items-baseline md:items-center gap-2 sm:gap-4 py-6 border-b border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex flex-row sm:flex-row items-center sm:items-baseline md:items-center gap-4 sm:gap-8 shrink-0">
                  <div className="text-slate-400 font-mono text-sm md:text-base tracking-tight shrink-0">
                    {item.date}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-slate-500 tracking-widest uppercase shrink-0">
                    {item.category}
                  </div>
                </div>
                <div className="w-full sm:flex-1">
                  <span className="text-slate-200 text-sm md:text-base font-medium group-hover:text-cyan-400 transition-colors align-middle leading-relaxed">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="flex justify-end mt-8">
            <Link to="/news" className="group flex items-center gap-4 md:gap-5">
              <div className="flex flex-col items-end gap-0.5 text-right">
                <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">View all</span>
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">すべて見る</span>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-125 flex-shrink-0">
                <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
              </div>
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-2xl md:max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 text-left relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors z-10"
              >
                ✕
              </button>

              <div className="pt-6 sm:pt-8 mb-6 pr-0">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-slate-400 font-mono text-sm">
                    {selectedNews.date}
                  </span>
                  <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">
                    {selectedNews.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight leading-snug">
                  {selectedNews.title}
                </h3>
              </div>

              {/* 挿入画像エリア (画像の配列が存在し、かつ空でない場合のみ表示) */}
              {selectedNews.images && selectedNews.images.length > 0 && (
                <div className="mb-8 overflow-hidden rounded-xl border border-slate-800/50">
                  {selectedNews.images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={selectedNews.title}
                      className="w-full h-auto object-cover max-h-[400px]"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              )}

              {/* 本文エリア */}
              <div 
                className="text-slate-300 text-sm sm:text-base leading-relaxed sm:leading-loose space-y-4 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />

              <div className="flex justify-start mt-12 mb-4">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="group flex items-center gap-4 md:gap-5"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-125 transform-gpu will-change-transform flex-shrink-0">
                    <CustomArrowLeft className="w-[40%] aspect-[297/436] text-white transform-gpu will-change-transform" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5 text-left">
                    <span className="text-sm md:text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">Back</span>
                    <span className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">一覧に戻る</span>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
