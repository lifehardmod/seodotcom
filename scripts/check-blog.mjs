import { existsSync, readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkBlogFormat from "./remark-blog-format.mjs";

const directory = fileURLToPath(new URL("../content/posts/", import.meta.url));
const filenames = existsSync(directory)
  ? readdirSync(directory)
      .filter((name) => name.endsWith(".mdx"))
      .sort()
  : [];
const processor = unified()
  .use(remarkParse)
  .use(remarkMdx)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(remarkBlogFormat);

let failures = 0;
for (const filename of filenames) {
  const file = {
    path: `content/posts/${filename}`,
    value: readFileSync(`${directory}${filename}`, "utf8"),
  };
  try {
    processor.runSync(processor.parse(file), file);
  } catch (error) {
    failures += 1;
    console.error(`${file.path}:${error.line ?? 1}: ${error.message}`);
  }
}

if (failures > 0) {
  console.error(`${failures}개 글이 공통 작성 형식을 벗어났습니다.`);
  process.exit(1);
}
console.log(`Blog format: ${filenames.length}개 글 확인 완료.`);
