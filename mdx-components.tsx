import type { MDXComponents } from "mdx/types"
import type { ComponentPropsWithoutRef } from "react"
import Image, { type StaticImageData } from "next/image"
import Icon from "@/components/Icon"

type HeadingProps = ComponentPropsWithoutRef<"h1">;

// rehype-slug가 부여한 id로 앵커를 만든다 — 호버(포인터 지원 환경)에서만 노출
function HeadingAnchor({ id }: { id?: string }) {
  if (!id) return null;

  return (
    <a
      href={`#${id}`}
      aria-label="이 제목으로 이동"
      className="hidden lg:inline-flex absolute -left-7 top-1/2 -translate-y-1/2
        p-1 rounded-md text-gray-400 dark:text-gray-500
        opacity-0 transition-opacity duration-200
        group-hover:opacity-100 focus-visible:opacity-100"
    >
      <Icon name="link" size={20} />
    </a>
  );
}

const components: MDXComponents = {
  // Headings
  h1: ({ children, ...props }: HeadingProps) => (
    <h1 className="group relative text-2xl lg:text-3xl font-bold mt-6 scroll-mt-20" {...props}>
      <HeadingAnchor id={props.id} />
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2 className="group relative text-xl lg:text-2xl font-bold mt-6 scroll-mt-20" {...props}>
      <HeadingAnchor id={props.id} />
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3 className="group relative text-lg lg:text-xl font-bold mt-6 scroll-mt-20" {...props}>
      <HeadingAnchor id={props.id} />
      {children}
    </h3>
  ),

  // Text
  p: ({ children, ...props }) => (
    <p className="text-sm lg:text-base mt-4" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      className="text-blue-500"
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 px-4 rounded-xs
        border-l-4 border-l-purple-500
        bg-gray-100 dark:bg-gray-800"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul
      className="mt-4 ml-4"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="mt-4 ml-4"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      className="my-1"
      {...props}
    >
      {children}
    </li>
  ),

  // Table
  table: ({ children, ...props }) => (
    <table
      className="block w-full overflow-x-auto
        border border-gray-100 dark:border-gray-800
        border-collapse border-spacing-0"
      {...props}
    >
      {children}
    </table>
  ),
  thead: ({ children, ...props }) => (
    <thead
      className="bg-foreground/5"
      {...props}
    >
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-2 font-bold text-left bg-foreground/5
        border-b border-gray-100 dark:border-gray-800"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="px-4 py-1 border-b border-gray-100 dark:border-gray-800"
      {...props}
    >
      {children}
    </td>
  ),

  // Horizontal Rule
  hr: () => (
    <hr className="border-0.5 border-gray-100 dark:border-gray-800 mt-1 mb-6" />
  ),

  // Images
  // 본문의 `./` 상대 경로 이미지는 번들러가 StaticImageData로 변환
  img: ({ src, alt, ...props }: { src?: string | StaticImageData; alt?: string }) => (
    typeof src === "object" ? (
      <Image
        src={src}
        alt={alt ?? ""}
        sizes="(max-width: 674px) 100vw,
              70vw"
        className="w-full h-auto"
        fetchPriority="low"
        {...props}
      />
    ) : (
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
        fetchPriority="low"
        {...props}
      />
    )
  )
}

export function useMDXComponents(): MDXComponents {
  return components
}