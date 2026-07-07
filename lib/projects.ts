import type { Locale } from "./i18n";

export type ProjectStatus =
  | "active"
  | "in-progress"
  | "maintenance"
  | "archived"
  | "concept";

export interface ProjectScreenshot {
  src: string;
  type?: "image" | "video";
  mimeType?: string;
  alt: Record<Locale, string>;
  width: number;
  height: number;
}

export interface ProjectPanelTheme {
  background: string;
  foreground: string;
  muted: string;
  border: string;
  accent: string;
  mediaBackground: string;
  chipBackground: string;
  chipForeground: string;
  badgeBackground: string;
  badgeForeground: string;
  buttonBackground: string;
  buttonForeground: string;
  buttonHoverBackground: string;
}

export interface LocalizedProjectContent {
  name: string;
  shortSummary: string;
  detailedDescription: string;
  mainTechnicalChallenges: string[];
  keyFeatures: string[];
  screenshotUnavailable?: string;
}

export interface Project {
  slug: string;
  status: ProjectStatus;
  technologies: string[];
  screenshots: ProjectScreenshot[];
  githubUrl?: string;
  liveUrl: string;
  panelTheme?: ProjectPanelTheme;
  content: Record<Locale, LocalizedProjectContent>;
}

export const statusLabels: Record<ProjectStatus, Record<Locale, string>> = {
  active: {
    en: "Active",
    ja: "運用中",
  },
  "in-progress": {
    en: "In progress",
    ja: "開発中",
  },
  maintenance: {
    en: "Maintenance",
    ja: "保守中",
  },
  archived: {
    en: "Archived",
    ja: "アーカイブ",
  },
  concept: {
    en: "Concept",
    ja: "構想中",
  },
};

export const projects: Project[] = [
  {
    slug: "clean-feed",
    status: "active",
    technologies: [
      "TypeScript",
      "JavaScript",
      "SQL",
      "Next.js",
      "AWS",
      "RSS Parser",
    ],
    liveUrl:
      "https://news-reader-git-main-will-hargraves-projects-6759c09f.vercel.app/",
    screenshots: [
      {
        src: "/projects/videos/CleanFeed.mov",
        type: "video",
        mimeType: "video/quicktime",
        alt: {
          en: "Clean Feed application video preview.",
          ja: "Clean Feed アプリケーションの動画プレビュー。",
        },
        width: 2900,
        height: 1700,
      },
    ],
    content: {
      en: {
        name: "Clean Feed",
        shortSummary:
          "Clean Feed is a distraction-free news reader that lets users build a personalized reading experience from public RSS feeds. Instead of ads, recommendation links, or endless suggested stories, the app focuses on showing only the articles the user asked for.",
        detailedDescription:
          "Users can browse built-in RSS sources, paste custom feed URLs, save feeds to personal categories, choose how many stories to load, and switch between grouped or interleaved article layouts. Logged-in users can manage saved feeds, default article counts, light/dark mode, and account settings.",
        mainTechnicalChallenges: [
          "[Placeholder] Define the main data, UX, or performance challenge.",
          "[Placeholder] Describe the most important implementation tradeoff.",
        ],
        keyFeatures: [
          "[Placeholder] Curated feed review workflow.",
          "[Placeholder] Clear controls for managing content state.",
        ],
      },
      ja: {
        name: "Clean Feed",
        shortSummary:
          "Clean Feed は、公開 RSS フィードから自分専用の読書体験を作れる、気が散らないニュースリーダーです。広告、推薦リンク、終わりのない関連記事ではなく、ユーザーが選んだ記事だけを表示することに集中しています。",
        detailedDescription:
          "ユーザーは組み込みの RSS ソースを閲覧し、カスタムフィード URL を貼り付け、個人カテゴリにフィードを保存し、読み込む記事数を選び、グループ化または混在表示のレイアウトを切り替えられます。ログインユーザーは保存済みフィード、デフォルトの記事数、ライト・ダークモード、アカウント設定を管理できます。",
        mainTechnicalChallenges: [
          "[仮] データ、UX、またはパフォーマンス上の主要課題を記載します。",
          "[仮] 重要な実装上のトレードオフを記載します。",
        ],
        keyFeatures: [
          "[仮] フィード確認ワークフロー。",
          "[仮] コンテンツ状態を管理する明確な操作。",
        ],
      },
    },
  },
  {
    slug: "group-quiz-game",
    status: "active",
    technologies: ["Next", "React", "Supabase", "Python"],
    liveUrl: "https://journey-man-quiz.vercel.app/",
    panelTheme: {
      background: "#1B7A4A",
      foreground: "#FFFFFF",
      muted: "#E5F4EC",
      border: "#145C38",
      accent: "#D6FFE8",
      mediaBackground: "#145C38",
      chipBackground: "#D6FFE8",
      chipForeground: "#123B27",
      badgeBackground: "#D6FFE8",
      badgeForeground: "#123B27",
      buttonBackground: "#FFFFFF",
      buttonForeground: "#145C38",
      buttonHoverBackground: "#D6FFE8",
    },
    screenshots: [
      {
        src: "/projects/videos/Journeyman.mov",
        type: "video",
        mimeType: "video/quicktime",
        alt: {
          en: "Journeyman application video preview.",
          ja: "Journeyman アプリケーションの動画プレビュー。",
        },
        width: 2900,
        height: 1692,
      },
    ],
    content: {
      en: {
        name: "Journeyman",
        shortSummary:
          "A football quiz web app where players test their knowledge of which clubs professional footballers have played for. The app includes solo and two-player modes, using a custom player database, club badge data, fuzzy club-name matching, score tracking, lives, skips, and shareable multiplayer game codes.",
        detailedDescription:
          "The project features three game modes. Bidding Game: Two players bid on how many clubs they can name for a given footballer. Once bidding ends, the winning bidder must correctly name the number of clubs they bid. If they succeed, they win the point; if they fail, the opponent scores. Last Man Standing / Head-to-Head: Two players take turns naming clubs from a footballer’s career. A wrong answer gives the opponent a final chance to claim the round, creating a competitive back-and-forth format. Endless Mode: A solo mode where players are shown footballers one at a time and try to name as many of their clubs as possible. Players start with limited lives, lose lives for incorrect guesses, can earn bonus lives for completing a full set, and can use a one-time skip.",
        mainTechnicalChallenges: [
          "[Placeholder] Define how shared game state is synchronized.",
          "[Placeholder] Describe how the interface handles multiple players and rounds.",
        ],
        keyFeatures: [
          "[Placeholder] Group quiz session flow.",
          "[Placeholder] Score and round presentation.",
        ],
      },
      ja: {
        name: "Journeyman",
        shortSummary:
          "プロサッカー選手がどのクラブでプレーしたかを当てて知識を試すサッカークイズ Web アプリです。ソロモードと 2 人対戦モードがあり、独自の選手データベース、クラブバッジデータ、曖昧なクラブ名のマッチング、スコア管理、ライフ、スキップ、共有可能なマルチプレイヤー用ゲームコードを備えています。",
        detailedDescription:
          "このプロジェクトには 3 つのゲームモードがあります。Bidding Game では、2 人のプレイヤーが指定された選手について何クラブ答えられるかを入札します。入札が終わると、落札したプレイヤーは入札した数のクラブ名を正しく答える必要があります。成功すればポイントを獲得し、失敗すれば相手にポイントが入ります。Last Man Standing / Head-to-Head では、2 人のプレイヤーが選手の所属クラブを交互に答えます。間違えた場合、相手にラウンドを取る最後のチャンスが与えられ、競争的なやり取りが生まれます。Endless Mode はソロモードで、プレイヤーは次々に表示される選手について、できるだけ多くの所属クラブを答えます。限られたライフから始まり、不正解でライフを失い、全クラブを答えるとボーナスライフを獲得でき、1 回だけスキップも使えます。",
        mainTechnicalChallenges: [
          "[仮] 共有ゲーム状態の同期方法を記載します。",
          "[仮] 複数プレイヤーとラウンド進行を扱う UI 設計を記載します。",
        ],
        keyFeatures: [
          "[仮] グループクイズのセッション進行。",
          "[仮] スコアとラウンド表示。",
        ],
      },
    },
  },
  {
    slug: "world-map-person-guessing-game",
    status: "active",
    technologies: [
      "TypeScript",
      "React",
      "JavaScript",
      "Vite",
      "Wikipedia REST API",
    ],
    liveUrl: "https://person-game-iota.vercel.app/",
    panelTheme: {
      background: "#99DAF4",
      foreground: "#102533",
      muted: "#244657",
      border: "#5BAFD2",
      accent: "#0B4F71",
      mediaBackground: "#D7F3FE",
      chipBackground: "#EAF9FE",
      chipForeground: "#12384A",
      badgeBackground: "#EAF9FE",
      badgeForeground: "#0B4F71",
      buttonBackground: "#102533",
      buttonForeground: "#FFFFFF",
      buttonHoverBackground: "#0B4F71",
    },
    screenshots: [
      {
        src: "/projects/videos/Trace-my-life.mov",
        type: "video",
        mimeType: "video/quicktime",
        alt: {
          en: "Trace My Life application video preview.",
          ja: "Trace My Life アプリケーションの動画プレビュー。",
        },
        width: 2900,
        height: 1700,
      },
    ],
    content: {
      en: {
        name: "Trace My Life",
        shortSummary:
          "A map-based historical guessing game built with React, TypeScript, Vite, and Leaflet. Players are shown a historical figure’s birth and death dates, places, and map locations, then try to guess their identity.",
        detailedDescription:
          "Optional hints reveal details such as gender, profession, and cause of death, with fewer points awarded when more clues are used. After each round, the app reveals the answer, shows a short Wikipedia summary, and links to the full profile. The game uses a local curated dataset of historical figures, with a supporting Wikidata script for rebuilding seed data.",
        mainTechnicalChallenges: [
          "[Placeholder] Define how map interactions guide the guessing flow.",
          "[Placeholder] Describe how clue difficulty and scoring are balanced.",
        ],
        keyFeatures: [
          "[Placeholder] World-map based guessing interaction.",
          "[Placeholder] Clues, guesses, and result feedback.",
        ],
      },
      ja: {
        name: "Trace My Life",
        shortSummary:
          "React、TypeScript、Vite、Leaflet で構築した、地図ベースの歴史人物推測ゲームです。プレイヤーは歴史上の人物の生没年、場所、地図上の位置を見て、その人物が誰かを推測します。",
        detailedDescription:
          "任意のヒントでは、性別、職業、死因などの詳細を明らかにできますが、使うヒントが多いほど獲得ポイントは少なくなります。各ラウンド後に答えが表示され、短い Wikipedia の概要と完全なプロフィールへのリンクが表示されます。ゲームは厳選したローカルの歴史人物データセットを使用し、シードデータを再構築するための Wikidata 補助スクリプトも備えています。",
        mainTechnicalChallenges: [
          "[仮] 地図操作が推測フローをどう支えるかを記載します。",
          "[仮] ヒント難易度とスコアリングの調整方針を記載します。",
        ],
        keyFeatures: [
          "[仮] 世界地図を使った推測操作。",
          "[仮] ヒント、回答、結果フィードバック。",
        ],
      },
    },
  },
  {
    slug: "card-snap-helper",
    status: "active",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Vite",
      "Microsoft Azure",
      "Vercel",
    ],
    liveUrl: "https://card-snap-helper.vercel.app/",
    panelTheme: {
      background: "#000000",
      foreground: "#FFFFFF",
      muted: "#D6D6D6",
      border: "#2F2F2F",
      accent: "#FFFFFF",
      mediaBackground: "#171717",
      chipBackground: "#FFFFFF",
      chipForeground: "#171717",
      badgeBackground: "#FFFFFF",
      badgeForeground: "#171717",
      buttonBackground: "#FFFFFF",
      buttonForeground: "#000000",
      buttonHoverBackground: "#D6D6D6",
    },
    screenshots: [
      {
        src: "/screenshots/Card Snap.jpeg",
        alt: {
          en: "Card Snap Helper application screenshot.",
          ja: "Card Snap Helper アプリケーションのスクリーンショット。",
        },
        width: 2900,
        height: 1850,
      },
    ],
    content: {
      en: {
        name: "Card Snap",
        shortSummary:
          "CardSnap is a web app for Japanese learners that converts Japanese text from photos, uploaded images, or pasted sentences into customizable flashcards. The app uses Azure Computer Vision OCR to extract text from images, segments Japanese text into selectable words, and enriches cards with dictionary readings, meanings, and English translations using Jisho and MyMemory APIs.",
        detailedDescription:
          "Users can choose which fields appear on the front or back of each card, queue multiple cards, and export them as a CSV for Anki or other spaced repetition apps. When run locally, the app can also connect directly to Anki through AnkiConnect, allowing users to create cards in a chosen deck with one click.",
        mainTechnicalChallenges: [
          "[Placeholder] Define the main capture, parsing, or review challenge.",
          "[Placeholder] Describe the key UI or data handling tradeoff.",
        ],
        keyFeatures: [
          "[Placeholder] Card-oriented capture workflow.",
          "[Placeholder] Clear review and helper interface.",
        ],
      },
      ja: {
        name: "Card Snap",
        shortSummary:
          "CardSnap は、日本語学習者が写真、アップロード画像、貼り付けた文章から日本語テキストをカスタマイズ可能なフラッシュカードに変換できる Web アプリです。Azure Computer Vision OCR で画像からテキストを抽出し、日本語テキストを選択可能な単語に分割し、Jisho と MyMemory API を使って読み、意味、英訳をカードに追加します。",
        detailedDescription:
          "ユーザーは各カードの表面または裏面に表示するフィールドを選び、複数のカードをキューに追加し、Anki や他の間隔反復学習アプリ向けに CSV としてエクスポートできます。ローカル実行時には AnkiConnect を通じて Anki に直接接続し、選択したデッキへワンクリックでカードを作成することもできます。",
        mainTechnicalChallenges: [
          "[仮] 取得、解析、確認に関する主要課題を記載します。",
          "[仮] UI またはデータ処理上の重要なトレードオフを記載します。",
        ],
        keyFeatures: [
          "[仮] カード中心の取得ワークフロー。",
          "[仮] 確認しやすいヘルパー UI。",
        ],
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
