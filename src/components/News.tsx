import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { CustomArrow, CustomArrowLeft } from './CustomArrow';
import newsDay1Img from '../assets/datsuichi-news-day1.webp';
import newsDay0Img from '../assets/datsuichi-news-day0.webp';
import newsOpenImg from '../assets/datsuichi-news-open.webp';
import newsDay2Img from '../assets/datsuichi-news-day2.webp';
import newsDay3Img from '../assets/datsuichi-news-day3.webp';
import newsDay4Img from '../assets/datsuichi-news-day4.webp';

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
    id: 'news-001-day4',
    date: '2026.08.01',
    category: 'REPORT',
    title: 'Day4｜Webサイト・コンペティション決着。そして「業務自動化」の深淵へ。',
    images: [newsDay4Img],
    content: `<p>2026年8月1日。</p>
<p>「ダツイチ―新大陸」は、最初の大きな山場である「Web制作フェーズ」の完結と、次なる挑戦である「Instagram運用自動化」のキックオフを迎えました。</p>
<p>AIを「道具」から「仕組み」へと昇華させるための、より実践的で高度な思考が求められるフェーズへと突入します。</p>
<p class="text-white font-bold mt-6 mb-2">■「想い」が形を成す、Webサイト・コンペの結果</p>
<p>オクトエイドでの審査会（7/25開催）を経て、全10作品の中から上位入賞者が発表されました。評価基準は、単なる見た目の美しさだけではなく、「世界観・トーン＆マナー」「サイトの分かりやすさ」「行動への動線」「NGルールの回避（プレッシャーの排除）」「スマホでの見やすさ」という、ユーザー体験とクライアントの理念に深く根ざした5つの観点で採点されました。</p>
<p>● 第1位 ヨコさん氏：アニメーションと豊富なイラストを駆使し、絵本のような温かい世界観を構築。「届けたい」という切実な想いが、AIスキルを凌駕し、技術的完成度と理念の体現を両立させた点が最高評価を得ました。</p>
<p>● 第2位 シェフ氏：メンタルヘルスの観点から、安易な自己診断を下さないよう配慮。リスク管理というプロフェッショナルな視点が高く評価されました。</p>
<p>● 第3位 トミー氏：SNSやポスターとの連動を意識したブランド設計の高さと, スマホユーザーを意識した操作性が光りました。</p>
<p>今回のコンペは、参加者のスキルの高さを示すだけでなく、運営側にとっても「コンセプトの言語化」という新たな学びをもたらす「相互研鑽の場」となりました。</p>
<p class="text-white font-bold mt-6 mb-2">■次なるミッション：「完全自動化」ではなく「最適化」</p>
<p>Day4後半では、プロジェクトの第2フェーズである「Instagramコンテンツ自動作成システム」の構築が提示されました。目標は、2〜3日に1回の安定した投稿を維持しつつ、運用の手間を劇的に削減することです。</p>
<p>けれど、真に目指すのは「人間を排除した自動化」ではありません。</p>
<p>● カルーセル投稿案の自動生成： AIが4〜5枚の画像とキャプション（150〜300文字）を下書き。</p>
<p>● 厳格な制約（ガードレール）： 医療行為への誘導や断定的な表現を避け、身近な相談を促す優しい言葉選びを徹底。</p>
<p>● 複数人運用への対応： 生成されたコンテンツを管理者が確認・承認するプロセスの構築。</p>
<p>AIが得意な「生成」と、人間が担うべき「責任と承認」を分離し、実務に耐えうる現実的なシステム設計が求められます。</p>
<p class="text-white font-bold mt-6 mb-2">■「IPOフレームワーク」と「ヒューマン・イン・ザ・ループ」</p>
<p>技術アドバイザーのカーリー氏から、業務を自動化するための知的アプローチとして、「IPO（Input / Process / Output）」による業務分析と、「モジュール化」の重要性が説かれました。業務全体を一気に自動化するのではなく、要素ごとに分解して考えることで、実現可能性を高める戦略です。</p>
<p>また、現代のAI活用における重要概念である「ヒューマン・イン・ザ・ループ（人間による介在）」が提唱されました。これは、AIのループの中に意図的に人間による判断工程を組み込むことで、品質担保と責任の所在を明確にする考え方です。さらに、API利用のコストや保守性、ビジネスアカウントの要件まで考慮した「見積もり提案」までをミッションに含めるという、極めて実務的な要件が提示されました。</p>
<p class="text-white font-bold mt-6 mb-2">■学びのプロセスこそが最大の成果</p>
<p>「ダツイチ―新大陸」は、完成品のクオリティだけでなく、そこに至るまでの思考プロセスを重視しています。参加者は、ChatGPTやClaudeなどのAIとの「壁打ち」を繰り返し、自身の環境に合わせた最適な設計図を構築していきます。</p>
<p>完璧な自動化システムを作り上げること自体が目的ではありません。業務をどう分解し、AIという武器をどこに配置すれば、ビジネスの課題を解決できるのか。この問いに対し、試行錯誤しながら自分なりの「答え」を導き出すプロセスこそが、自律性を育む糧となります。</p>
<hr class="border-slate-800 my-6" />
<p class="text-white font-bold">■今後のスケジュール</p>
<p>● Day 5： 各自による自動化ツールの構築、および業務フロー設計。</p>
<p>● Day 6： 業務プロセスの自動化戦略、システム構成案の成果発表。</p>`,
  },
  {
    id: 'news-001-day3',
    date: '2026.07.18',
    category: 'REPORT',
    title: 'Day3｜AIを武器に創り上げた「渾身のWebサイト」―驚愕の成果発表。',
    images: [newsDay3Img],
    content: `<p>2026年7月18日。</p>
<p>シーズン1のプロジェクト「オクトエイド」のWebサイト制作は、大きな山場を迎えました。コミュニティメンバーたちが生成AIをパートナーとして伴走し、1ヵ月というわずかな期間で組み上げたWebサイトを発表。そこには、単なるAI学習を超えた「実務でも通用する成果物」が並びました。</p>
<p class="text-white font-bold mt-6 mb-2">■個性が共鳴する、多様なAI活用のカタチ</p>
<p>発表会では、7名のコミュニティメンバーが代表し、それぞれのセンスとこだわりで制作した「オクトエイド」のWebサイトを披露しました。驚くべきは、同じ要件定義から出発しながらも, AIの使い方一つでこれほどまでに多様なアウトプットが生まれたという事実でした。</p>
<p>● 運用性と心理設計： がおちゃん氏は、ユーザーが「自分ごと化」できるストーリー性を重視しつつ、管理者がメンテナンスしやすい構造をAIと共に構築しました。</p>
<p>● 技術的最適化と保守性：くぼっち氏は、モバイル環境での軽量化やセキュリティ対策を徹底。AIにHTML形式のスタイルガイドを作成させるなど、将来の保守まで見据えた「エンジニアリング・マインド」を見せました。</p>
<p>● 親しみやすさと遊び心： あだっち氏は、AIで生成したタコのキャラクター（たこちゃん）をフックに、カードがめくれるような「遊び心のあるUI」を実装。心理的ハードルを下げる世界観を創出しました。</p>
<p>● デザインの一貫性と試行錯誤：こばちゃん氏は、複数のAIを使い分け、色のトーンを統一。生成AI特有の質感や限界を分析しながら、「正当派なデザイン」を追求しました。</p>
<p>● 構造的ブランディング： よこにい氏は、複数ページ構成を採用して回遊性を高め、ロゴや画像の統一感によって団体のブランドイメージを強化しました。</p>
<p>● 圧倒的なコンテンツ量と動線： ヨコさん氏は、32枚ものAI生成画像を駆使したカード型レイアウトを構築。自己診断ツールやSNSへの動線設計まで、「即戦力の構成」を実現しました。</p>
<p>● プロの本気：プロのWebデザイナーとして参加したトミー氏は、サイト単体ではなく、SNSやポスターまでを含む「エコシステム」としてのブランディングを提案。「パーツ生成はAIだが、全体を組み立てるのは人間の役割である」という、AI時代におけるクリエイターの本質的な価値を再定義しました。</p>
<p class="text-white font-bold mt-6 mb-2">■「神は細部に宿る」</p>
<p>もう1つの特筆すべき点は、Webサイトそのものだけでなく、付随する「提案書」や「運用・スタイルガイド」といった資料の質の高さです。これらも、ClaudeなどのAIを活用して作成されており、プロジェクトの運用において極めて有益な資産となりました。</p>
<p>「AIを使いこなす」とは、単にコードを書かせることではなく、こうした実務に必要な周辺ドキュメントまでをも高精度に、かつ迅速に整備できる能力を指すのだと、メンバー全員が身をもって証明してくれました。</p>
<p class="text-white font-bold mt-6 mb-2">■共創を支える「ビジネスの規律」</p>
<p>コミュニティ内で、成果物の著作権をすべて「オクトエイド」側に譲渡することに合意しました。これにより、制作されたWebサイトやキャラクターを用いて、支援先団体（オクトエイド）が自由に活動できる体制が整いました。</p>
<p>また、各作品のクオリティがあまりに高いため、評価・選定は「個人の感覚」ではなく、明確な「評価軸」に基づいて行うことも明示されました。こうしたビジネスとしての厳格な合意形成こそが、本コミュニティが「真の共創の場」である証明と言えます。</p>
<p class="text-white font-bold mt-6 mb-2">■自動化のフロンティアへ</p>
<p>プロジェクトの後半、次回Day 4からは、いよいよ「業務プロセスの自動化」に挑戦します。挑むのは、Instagram投稿の自動化ツールの開発です。難易度の高いミッションです。</p>
<p>「全工程の完了を目指す者」もいれば、「特定の機能パーツの実装に注力する者」もいるでしょう。それぞれが「自分の現在地」からの成長を目指す ―本コミュニティらしいピアラーニングで、コミュニティメンバーのAIスキルをさらに深化していきます。</p>
<p class="mt-6">未知の領域へと突き進む冒険者たち。<br />彼らが創り出すデジタル・ソリューションに乞うご期待ください。</p>
<hr class="border-slate-800 my-6" />
<p class="text-white font-bold">■今後のスケジュール</p>
<p>● 7月25日： オクトエイド評価会（コンペティションによる最終審査）</p>
<p>● 8月1日： プロジェクト「オクトエイド」｜Day 4（SNS投稿の自動化ツール構築フェーズ）キックオフ</p>`,
  },
  {
    id: 'news-001-day2',
    date: '2026.07.04',
    category: 'REPORT',
    title: 'Day2｜Webサイトを磨き上げるプロフェッショナルたちの戦略。',
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
    title: 'Day1｜デジタル支援プロジェクト「オクトエイド」キックオフ。',
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
    title: 'Day0｜実践型のAI学習コミュニティ「ダツイチー新大陸」本格始動。',
    images: [newsDay0Img],
    content: `<p>2026年6月6日。</p>
<p>AI勉強会「ダツイチ」は、新たなフェーズとなる「新大陸」に突入。本日は、その説明会を開催しました。新たな「ダツイチー新大陸」は、生成AIを単なる便利ツールとしてではなく、実際のビジネス課題を解決し、価値を創造するための「武器」として使いこなす実践型の学習コミュニティです。</p>
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

function NewsImage({ src, alt }: { src: string; alt: string; key?: any }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900/50">
      {/* 骨組み・ローダーアニメーション */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 bg-[length:200%_100%] animate-shimmer transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
      
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

interface NewsProps {
  limit?: number;
  isSinglePage?: boolean;
}

export default function News({ limit, isSinglePage = false }: NewsProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const displayedItems = limit ? newsItems.slice(0, limit) : newsItems;

  useEffect(() => {
    // ニュース内のすべての画像を裏でプリロード
    newsItems.forEach((item) => {
      if (item.images && item.images.length > 0) {
        item.images.forEach((imgSrc) => {
          const img = new Image();
          img.src = imgSrc;
        });
      }
    });
  }, []);

  // クエリパラメータの 'newsId' に基づいて詳細表示を同期
  useEffect(() => {
    const newsId = searchParams.get('newsId');
    if (newsId) {
      const found = newsItems.find((item) => item.id === newsId);
      if (found) {
        setSelectedNews(found);
      } else {
        setSelectedNews(null);
      }
    } else {
      setSelectedNews(null);
    }
  }, [searchParams]);

  const handleOpen = (item: NewsItem) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('newsId', item.id);
    setSearchParams(newParams);
  };

  const handleClose = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('newsId');
    setSearchParams(newParams);
  };

  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 border-t border-slate-800/50'}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {!isSinglePage && (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">ニュース</h2>
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
              onClick={() => handleOpen(item)}
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
            onClick={handleClose}
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
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800 focus:outline-none z-10"
                aria-label="閉じる"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
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
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#89E8D6] to-[#25A7CC] tracking-tight leading-snug">
                  {selectedNews.title}
                </h3>
              </div>

              {/* 挿入画像エリア (画像の配列が存在し、かつ空でない場合のみ表示) */}
              {selectedNews.images && selectedNews.images.length > 0 && (
                <div className="mb-8 overflow-hidden rounded-xl border border-slate-800/50">
                  {selectedNews.images.map((imgSrc, i) => (
                    <NewsImage
                      key={i}
                      src={imgSrc}
                      alt={selectedNews.title}
                    />
                  ))}
                </div>
              )}

              {/* 本文エリア */}
              <div 
                className="text-slate-300 text-[15px] leading-loose space-y-4 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />

              <div className="flex justify-start mt-12 mb-4">
                <button
                  onClick={handleClose}
                  className="group flex items-center gap-4 md:gap-5"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-125 transform-gpu will-change-transform flex-shrink-0">
                    <CustomArrowLeft className="w-[40%] aspect-[297/436] text-white transform-gpu will-change-transform" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5 text-left">
                    <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">Back</span>
                    <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">一覧に戻る</span>
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
