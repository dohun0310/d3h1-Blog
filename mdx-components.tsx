import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-2xl lg:text-3xl font-bold mt-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl lg:text-2xl font-bold mt-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg lg:text-xl font-bold mt-6">
      {children}
    </h3>
  ),

  // Text
  p: ({ children }) => (
    <p className="text-sm lg:text-base mt-4">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-500"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),

  // Blockquote
  blockquote: ({ children, props }) => (
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
  ul: ({ children, props }) => (
    <ul
      className="mt-4 ml-4"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, props }) => (
    <ol
      className="mt-4 ml-4"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, props }) => (
    <li
      className="my-1"
      {...props}
    >
      {children}
    </li>
  ),

  // Table
  table: ({ children, props }) => (
    <table
      className="block w-full overflow-x-auto
        border border-gray-100 dark:border-gray-800
        border-collapse border-spacing-0"
      {...props}
    >
      {children}
    </table>
  ),
  thead: ({ children, props }) => (
    <thead
      className="bg-foreground/5"
      {...props}
    >
      {children}
    </thead>
  ),
  th: ({ children, props }) => (
    <th
      className="px-4 py-2 font-bold text-left bg-foreground/5
        border-b border-gray-100 dark:border-gray-800"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, props }) => (
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
  img: (props) => (
    <img
      className="w-full h-auto"
      fetchPriority="low"
      {...props} 
    />
  )
}
 
export function useMDXComponents(): MDXComponents {
  return components
}