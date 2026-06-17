export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export interface LocaleCopy {
  localeName: string;
  siteTitle: string;
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  actions: {
    viewProjects: string;
    viewProject: string;
    viewGithub: string;
    viewLive: string;
    contact: string;
  };
}

export const localeCopy: Record<Locale, LocaleCopy> = {
  en: {
    localeName: "English",
    siteTitle: "Will H.",
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    actions: {
      viewProjects: "View projects",
      viewProject: "View project",
      viewGithub: "GitHub repository",
      viewLive: "Live application",
      contact: "Contact",
    },
  },
  ja: {
    localeName: "日本語",
    siteTitle: "Will H.",
    nav: {
      home: "ホーム",
      projects: "プロジェクト",
      about: "自己紹介",
      contact: "連絡先",
    },
    actions: {
      viewProjects: "プロジェクトを見る",
      viewProject: "公開アプリを見る",
      viewGithub: "GitHub リポジトリ",
      viewLive: "公開アプリ",
      contact: "連絡する",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLanguageAlternates(path = ""): Record<string, string> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return {
    en: `/en${normalizedPath}`,
    ja: `/ja${normalizedPath}`,
  };
}
