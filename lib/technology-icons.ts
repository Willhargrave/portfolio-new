export interface TechnologyIcon {
  iconUrl: string;
  imageClassName?: string;
  imageHeight?: number;
  imageWidth?: number;
}

export const technologyIcons: Record<string, TechnologyIcon> = {
  AWS: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    imageClassName: "h-7 w-12",
    imageHeight: 28,
    imageWidth: 48,
  },
  Docker: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  JavaScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  "Microsoft Azure": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  Next: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    imageClassName: "h-6 w-6",
    imageHeight: 24,
    imageWidth: 24,
  },
  "Next.js": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    imageClassName: "h-6 w-6",
    imageHeight: 24,
    imageWidth: 24,
  },
  Python: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  React: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    imageClassName: "h-8 w-8",
    imageHeight: 32,
    imageWidth: 32,
  },
  "RSS Parser": {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/rss.svg",
  },
  SQL: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    imageClassName: "h-7 w-11",
    imageHeight: 28,
    imageWidth: 44,
  },
  Supabase: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  TypeScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  Vercel: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  Vite: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  "Wikipedia REST API": {
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/wikipedia.svg",
  },
};
