import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_BUILD_DIR || ".next",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-frontmatter"],
      ["remark-gfm"],
      [path.resolve("scripts/remark-blog-format.mjs")],
    ],
    rehypePlugins: [["rehype-slug"]],
  },
});

export default withMDX(nextConfig);
