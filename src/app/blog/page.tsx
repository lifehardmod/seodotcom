import pageFont from "@/lib/fonts/blog";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/blog");

import NotYet from "@/components/shared/NotYet";

export default function video() {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/blog" />
      <div>
        <NotYet />
      </div>
    </div>
  );
}
