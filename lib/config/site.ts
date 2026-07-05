import type { IconName } from "@/lib/types/icon";

export interface SocialLink {
  name: IconName;
  href: string;
}

export interface SiteConfig {
  url: string;
  name: string;
  description: string;
  author: {
    firstName: string;
    lastName: string;
  };
  copyright: string;
  socials: SocialLink[];
  giscus: {
    repo: `${string}/${string}`;
    repoId: string;
    category: string;
    categoryId: string;
  };
}

const url = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const siteConfig: SiteConfig = {
  url: url,
  name: "d3h1 Blog",
  description: "새로운 것을 즐기고, 변화를 만들고",
  author: {
    firstName: "도훈",
    lastName: "김",
  },
  copyright: "© 2023-2026 d3h1. 모든 권리 보유.",
  socials: [
    { name: "instagram", href: "https://www.instagram.com/dohun0310/" },
    { name: "facebook", href: "https://www.facebook.com/dohun0310/" },
    { name: "x", href: "https://x.com/dohun0310/" },
    { name: "github", href: "https://github.com/dohun0310/" },
  ],
  giscus: {
    repo: "dohun0310/d3h1-Blog-comment",
    repoId: "R_kgDOJ-0RuA",
    category: "General",
    categoryId: "DIC_kwDOJ-0RuM4CYGS5",
  },
};