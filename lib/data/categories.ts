export interface Category {
  slug: string;
  label: string;
}

export const ALL_CATEGORY_LABEL = "전체";

export const categories: Category[] = [
  { slug: "development", label: "개발" },
  { slug: "review", label: "후기" },
  { slug: "talk", label: "잡담" },
];

export function findCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
