import type { StaticImageData } from "next/image";

export interface PostMeta {
  teaser: StaticImageData;
  category: string;
  title: string;
  date: string;
}

export default interface Post extends PostMeta {
  slug: string;
  content: string;
  excerpt: string;
}
