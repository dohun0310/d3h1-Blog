import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    teaser: { type: "string", required: true },
    category: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true},
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

const currentTheme = typeof window !== "undefined" ? localStorage.getItem("theme-mode") : "light";

const contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: currentTheme === "light" ? "github-light" : "github-dark"
        },
      ],
      highlight,
    ],
  },
});

export default contentSource;