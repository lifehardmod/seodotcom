import Link from "next/link";
import pageFont from "@/lib/fonts/resume";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/resume");

// 연락처·생년월일이 있어 이력서(@/components/resume/Resume)를 가려 둔다.
// 다시 열려면 <Resume />를 렌더링하고 SEO_PAGES["/resume"]의 index를 되돌린다.
const ResumePage = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/resume" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          이력서를 준비 중입니다.
        </h1>
        <Link
          href="/"
          prefetch={false}
          className="mt-8 inline-flex min-h-12 items-center rounded-md border border-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:border-green-400 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
        >
          홈으로
        </Link>
      </section>
    </div>
  );
};

export default ResumePage;
