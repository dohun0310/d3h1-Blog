import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1
      style={{
        fontSize: `var(--text-title-1-size)`,
        fontWeight: `var(--text-title-1-weight)`,
        lineHeight: `var(--text-title-1-line-height)`,
        marginTop: "24px"
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontSize: `var(--text-title-2-size)`,
        fontWeight: `var(--text-title-2-weight)`,
        lineHeight: `var(--text-title-2-line-height)`,
        marginTop: "24px"
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontSize: `var(--text-title-3-size)`,
        fontWeight: `var(--text-title-3-weight)`,
        lineHeight: `var(--text-title-3-line-height)`,
        marginTop: "24px"
      }}
    >
      {children}
    </h3>
  ),

  // Text
  p: ({ children }) => (
    <p
      style={{
        fontSize: `var(--text-body-1-size)`,
        fontWeight: `var(--text-body-1-weight)`,
        lineHeight: `var(--text-body-1-line-height)`,
        marginTop: "16px"
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      style={{ color: `var(--theme-accent-info)` }}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong 
      style={{ fontWeight: `var(--text-body-bold-1-weight)` }}
    >
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em 
      style={{ fontStyle: "italic" }}
    >
      {children}
    </em>
  ),

  // Blockquote
  blockquote: ({ children, props }) => (
    <blockquote
      {...props}
      style={{
        marginBottom: "16px",
        padding: "0 16px",
        borderRadius: "2px",
        borderLeft: "4px solid var(--theme-accent-primary)",
        backgroundColor: `var(--theme-background-subtle)`,
      }}
    >
      {children}
    </blockquote>
  ),

  // Lists
  ul: ({ children, props }) => (
    <ul
      {...props}
      style={{
        margin: "16px 0 0 16px",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children, props }) => (
    <ol
      {...props}
      style={{
        margin: "16px 0 0 16px",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children, props }) => (
    <li
      {...props}
      style={{
        margin: "4px 0",
      }}
    >
      {children}
    </li>
  ),

  // Table
  table: ({ children, props }) => (
    <table
      {...props}
      style={{
        borderSpacing: "0",
        borderCollapse: "collapse",
        display: "block",
        width: "max-content",
        maxWidth: "100%",
        overflowX: "auto",
        border: `1px solid var(--theme-border-default)`,
      }}
    >
      {children}
    </table>
  ),
  thead: ({ children, props }) => (
    <thead
      {...props}
      style={{
        backgroundColor: `var(--theme-background-subtle)`,
      }}
    >
      {children}
    </thead>
  ),
  th: ({ children, props }) => (
    <th
      {...props}
      style={{
        padding: "8px 16px",
        borderBottom: `1px solid var(--theme-border-default)`,
        textAlign: "left",
        fontWeight: `var(--text-body-bold-1-weight)`,
        backgroundColor: `var(--theme-background-subtle)`,
      }}
    >
      {children}
    </th>
  ),
  td: ({ children, props }) => (
    <td
      {...props}
      style={{
        padding: "8px 16px",
        borderBottom: `1px solid var(--theme-border-default)`,
      }}
    >
      {children}
    </td>
  ),

  // Horizontal Rule
  hr: () => (
    <hr
      style={{
        borderColor: `var(--theme-border-default)`,
        marginBottom: "24px"
      }}
    />
  ),

  // Images
  img: (props) => (
    <img
      {...props} 
      style={{
        width: "100%",
        height: "auto"
      }}
      fetchPriority="low"
    />
  )
}
 
export function useMDXComponents(): MDXComponents {
  return components
}