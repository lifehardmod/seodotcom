import "server-only";

import { cache } from "react";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  published: boolean;
  readingMinutes: number;
}

export interface PostHeading {
  id: string;
  text: string;
  depth: number;
}

export interface Post extends PostSummary {
  headings: PostHeading[];
}

const postsDirectory = path.join(process.cwd(), "content/posts");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const parser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);

function requiredText(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${slug}.mdx: ${field} must be a non-empty string.`);
  }
  return value.trim();
}

function postDate(value: unknown, field: string, slug: string): string {
  const date = requiredText(value, field, slug);
  const parsed = new Date(`${date}T00:00:00.000Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== date
  ) {
    throw new Error(
      `${slug}.mdx: ${field} must be a valid quoted YYYY-MM-DD date.`,
    );
  }
  return date;
}

function readPostFile(filename: string): {
  post: PostSummary;
  content: string;
} {
  const slug = filename.slice(0, -4);
  if (!slugPattern.test(slug)) {
    throw new Error(
      `${filename}: use lowercase letters, numbers, and hyphens for the filename.`,
    );
  }
  const { data, content } = matter(
    readFileSync(path.join(postsDirectory, filename), "utf8"),
  );
  const title = requiredText(data.title, "title", slug);
  const description = requiredText(data.description, "description", slug);
  const publishedAt = postDate(data.publishedAt, "publishedAt", slug);
  const updatedAt = data.updatedAt
    ? postDate(data.updatedAt, "updatedAt", slug)
    : undefined;
  if (updatedAt && updatedAt < publishedAt) {
    throw new Error(`${filename}: updatedAt cannot precede publishedAt.`);
  }
  if (data.published !== undefined && typeof data.published !== "boolean") {
    throw new Error(`${filename}: published must be true or false.`);
  }
  const rawTags: unknown = data.tags ?? [];
  if (
    !Array.isArray(rawTags) ||
    rawTags.some((tag) => typeof tag !== "string" || !tag.trim())
  ) {
    throw new Error(`${filename}: tags must be an array of non-empty strings.`);
  }
  const tags = [...new Set((rawTags as string[]).map((tag) => tag.trim()))];
  const koreanCharacters = content.match(/[가-힣]/g)?.length ?? 0;
  const words = content.match(/[A-Za-z0-9_]+/g)?.length ?? 0;
  return {
    content,
    post: {
      slug,
      title,
      description,
      publishedAt,
      updatedAt,
      tags,
      published: data.published === true,
      readingMinutes: Math.max(
        1,
        Math.ceil(koreanCharacters / 500 + words / 200),
      ),
    },
  };
}

function postHeadings(content: string, slug: string): PostHeading[] {
  const tree = parser.parse(content);
  const slugger = new GithubSlugger();
  const headings: PostHeading[] = [];
  visit(tree, "heading", (node) => {
    if (node.depth === 1) {
      throw new Error(
        `${slug}.mdx: start the body with ##; the page renders the title.`,
      );
    }
    const text = toString(node);
    const id = slugger.slug(text);
    if (node.depth <= 3) headings.push({ id, text, depth: node.depth });
  });
  return headings;
}

const readPosts = cache((): PostSummary[] => {
  if (!existsSync(postsDirectory)) return [];
  return readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => readPostFile(filename).post)
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt) ||
        a.slug.localeCompare(b.slug),
    );
});

export function getPublishedPosts(): PostSummary[] {
  return readPosts().filter((post) => post.published);
}

export function getVisiblePosts(): PostSummary[] {
  return readPosts().filter(
    (post) => post.published || process.env.NODE_ENV === "development",
  );
}

export const getPost = cache((slug: string): Post | null => {
  if (!slugPattern.test(slug)) return null;
  if (!existsSync(path.join(postsDirectory, `${slug}.mdx`))) return null;
  const { post, content } = readPostFile(`${slug}.mdx`);
  if (!post.published && process.env.NODE_ENV !== "development") return null;
  return { ...post, headings: postHeadings(content, slug) };
});

export function formatPostDate(date: string): string {
  return date.replaceAll("-", ".");
}
