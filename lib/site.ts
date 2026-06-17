import type { Locale } from "./i18n";

export const site = {
  name: "Will H.",
  email: "willhargrave26@gmail.com",
  githubUrl: "https://github.com/Willhargrave",
  linkedInUrl: "https://www.linkedin.com/in/will-r-hargrave/",
  description: {
    en: "A bilingual software-engineering portfolio presenting solo projects, technical challenges, and implementation details.",
    ja: "個人開発プロジェクト、技術的な課題、実装内容を日本語と英語で紹介するソフトウェアエンジニアのポートフォリオです。",
  } satisfies Record<Locale, string>,
};
