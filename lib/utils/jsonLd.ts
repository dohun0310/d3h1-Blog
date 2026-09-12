import type { PostSummary } from "@/lib/utils/post";
import { siteConfig, authorName } from "@/lib/config/site";

const WEBSITE_ID = `${siteConfig.url}/#website`;
const PERSON_ID = `${siteConfig.url}/#person`;

// 사이트 전역 그래프 — 게시물 그래프가 @id로 참조한다
export function buildSiteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "ko-KR",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: authorName,
        url: siteConfig.url,
        image: `${siteConfig.url}/profile.png`,
        sameAs: siteConfig.socials.map((social) => social.href),
      },
    ],
  };
}

export function buildPostJsonLd(post: PostSummary): object {
  const url = `${siteConfig.url}/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: post.title,
    description: post.excerpt,
    image: [`${siteConfig.url}${post.teaser.src}`],
    datePublished: post.date,
    articleSection: post.category,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
  };
}
