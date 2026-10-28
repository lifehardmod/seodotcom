import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import BlogCodeBlock from "@/components/blog/BlogCodeBlock";

const components: MDXComponents = {
  Image,
  pre: BlogCodeBlock,
  table: ({ children, ...props }) => (
    <div
      className="blog-table-scroll"
      role="region"
      aria-label="표"
      tabIndex={0}
    >
      <table {...props}>{children}</table>
    </div>
  ),
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      {...props}
      rel={href?.startsWith("https://") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
