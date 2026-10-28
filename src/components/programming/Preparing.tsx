import Link from "next/link";
import PageStructuredData from "@/components/common/PageStructuredData";
import type { PagePath } from "@/lib/seo";

export default function Preparing({
  path,
}: {
  path: Extract<PagePath, `/programming${string}`>;
}) {
  return (
    <>
      <PageStructuredData path={path} />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          개발 자료를 준비 중입니다.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-gray-200 sm:text-lg">
          프로젝트 설명을 다시 정리하고 있습니다.
        </p>
        <Link
          href="/resume"
          prefetch={false}
          className="mt-8 inline-flex min-h-12 items-center rounded-md border border-gray-600 px-5 py-3 text-base font-medium text-white transition-colors hover:border-green-400 hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
        >
          이력서 보기
        </Link>
      </section>
    </>
  );
}
