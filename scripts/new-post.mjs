import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("Usage: pnpm new:post lowercase-post-slug");
  process.exit(1);
}

const directory = fileURLToPath(new URL("../content/posts/", import.meta.url));
mkdirSync(directory, { recursive: true });
const date = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Seoul",
}).format(new Date());
const content = `---
title: "글 제목"
description: "글의 핵심을 짧게 설명합니다."
publishedAt: "${date}"
tags: []
published: false
---

독자가 마주한 문제나 질문에서 시작합니다. 소제목은 그 질문에 답하는 순서대로 정합니다.

## 참고 자료
`;

try {
  writeFileSync(`${directory}${slug}.mdx`, content, { flag: "wx" });
  console.log(`Created content/posts/${slug}.mdx`);
  console.log(
    "content/AGENTS.md를 읽고 작성한 뒤 pnpm check:blog를 실행하세요.",
  );
} catch (error) {
  if (error.code === "EEXIST") {
    console.error(`The post ${slug}.mdx already exists.`);
    process.exit(1);
  }
  throw error;
}
