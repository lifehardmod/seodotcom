"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { PostSummary } from "@/lib/blog";

export default function PostList({ posts }: { posts: PostSummary[] }) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  const visible = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

  if (!posts.length) {
    return (
      <div className="blog-empty">
        <h2>아직 공개한 글이 없습니다.</h2>
        <p>개발하면서 만난 문제와 해결 과정을 하나씩 기록하려 합니다.</p>
      </div>
    );
  }

  return (
    <>
      <div className="blog-filters" role="group" aria-label="태그로 글 필터링">
        {[null, ...tags].map((item) => (
          <button
            key={item ?? "all"}
            type="button"
            aria-pressed={tag === item}
            onClick={() => setTag(item)}
          >
            {item ?? "전체"}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length}개의 글
      </p>
      <ul className="blog-post-list">
        {visible.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              prefetch={false}
              className="blog-post-link"
              aria-labelledby={`post-${post.slug}`}
            >
              <div className="blog-post-date">
                <time dateTime={post.publishedAt}>
                  {post.publishedAt.replaceAll("-", ".")}
                </time>
                <span>약 {post.readingMinutes}분</span>
              </div>
              <div className="blog-post-summary">
                {!post.published && <span className="blog-draft">초안</span>}
                <h2 id={`post-${post.slug}`}>
                  {post.title}
                  <ArrowUpRight size={22} aria-hidden="true" />
                </h2>
                <p>{post.description}</p>
                <ul className="blog-post-tags" aria-label="글 태그">
                  {post.tags.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
