import type { Metadata } from "next";
import Link from "next/link";
import PostList from "@/components/blog/PostList";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";
import { getPublishedPosts, getVisiblePosts } from "@/lib/blog";
import "@/styles/blog.css";

export function generateMetadata(): Metadata {
  return {
    ...pageMetadata("/blog"),
    robots: { index: getPublishedPosts().length > 0, follow: true },
    alternates: {
      canonical: "/blog",
      types: { "application/rss+xml": "/blog/feed.xml" },
    },
  };
}

export default function Blog() {
  return (
    <div className="blog-surface blog-index">
      <PageStructuredData path="/blog" />
      <header className="blog-index-header">
        <div>
          <h1>Blog</h1>
          <p>직접 부딪힌 문제와 해결 과정을 기록합니다.</p>
        </div>
        <Link href="/blog/feed.xml" className="blog-rss-link" prefetch={false}>
          RSS 구독
        </Link>
      </header>
      <PostList posts={getVisiblePosts()} />
    </div>
  );
}
