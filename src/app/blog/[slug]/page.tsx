import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { formatPostDate, getPost, getVisiblePosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "@/styles/blog.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getVisiblePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} · ${SITE_NAME}`;
  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    robots: { index: post.published, follow: true },
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url,
      locale: "ko_KR",
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [SITE_URL],
      images: [
        {
          url: `${SITE_URL}/profile.webp`,
          width: 400,
          height: 500,
          alt: `${SITE_NAME} 프로필`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description: post.description,
      images: [`${SITE_URL}/profile.webp`],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { default: Content } = await import(`@content/posts/${post.slug}.mdx`);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        inLanguage: "ko-KR",
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        image: `${SITE_URL}/profile.webp`,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="blog-surface blog-detail" id="article-top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/blog" className="blog-back-link" prefetch={false}>
        <ArrowLeft size={17} aria-hidden="true" /> 모든 글
      </Link>
      <header className="blog-article-header">
        <div className="blog-article-meta">
          {!post.published && <span className="blog-draft">초안</span>}
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <span>약 {post.readingMinutes}분</span>
        </div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <ul className="blog-post-tags" aria-label="글 태그">
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>
      <div className="blog-reading-layout">
        <article className="blog-prose">
          <Content />
        </article>
        {post.headings.length > 0 && (
          <aside className="blog-toc">
            <nav aria-label="이 글의 목차">
              <p>이 글의 목차</p>
              <ul>
                {post.headings.map((heading) => (
                  <li key={heading.id} data-depth={heading.depth}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
      <footer className="blog-article-footer">
        <span>
          {post.updatedAt
            ? `${formatPostDate(post.updatedAt)} 수정`
            : SITE_NAME}
        </span>
        <Link href="/blog" prefetch={false}>
          다른 글 보기 <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}
