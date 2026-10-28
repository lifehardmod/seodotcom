import {
  AUTHOR_ROLE,
  SEO_PAGES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  type PagePath,
} from "@/lib/seo";

export default function PageStructuredData({ path }: { path: PagePath }) {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    jobTitle: AUTHOR_ROLE,
    url: SITE_URL,
    image: `${SITE_URL}/profile.webp`,
    sameAs: ["https://github.com/lifehardmod"],
  };
  const graph: Record<string, unknown>[] = [];
  if (path === "/" || path === "/resume") {
    graph.push(person, {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}${path}#profile`,
      url: new URL(path, SITE_URL).href,
      name: SEO_PAGES[path].title,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    });
  }
  if (path === "/") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "ko-KR",
    });
  } else {
    const parent = path.startsWith("/programming/")
      ? "/programming"
      : path.startsWith("/ux/")
        ? "/ux"
        : null;
    const paths: PagePath[] = [
      "/",
      ...(parent ? ([parent] as PagePath[]) : []),
      path,
    ];
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: paths.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: SEO_PAGES[item].title,
        item: new URL(item, SITE_URL).href,
      })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
