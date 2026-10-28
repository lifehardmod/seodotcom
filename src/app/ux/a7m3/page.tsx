import pageFont from "@/lib/fonts/ux-a7m3";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/ux/a7m3");

import Image from "next/image";
import ImageLayout from "@/components/A7M3/ImageLayout";

const A7M3 = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/ux/a7m3" />
      <section>
        <header className="mx-auto max-w-3xl space-y-4 py-8">
          <h1 className="text-3xl font-bold">A7M3 카메라 UI 개선</h1>
          <p className="text-lg leading-relaxed">
            카메라를 조작할 때 느끼는 불편함을 줄이기 위한 인터페이스 디자인
            프로젝트입니다. 아래 자료에서 A7M3의 UI 개선안과 프로토타입을 살펴볼
            수 있습니다.
          </p>
        </header>
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
          <ImageLayout />
          <section className="flex flex-col items-center gap-4 w-full px-4 mt-20">
            {[4, 5, 6, 7, 8, 9, 10, 11].map((num, idx) => (
              <figure key={idx} className="w-full">
                <Image
                  src={`/A7M3/${num}.webp`}
                  alt={`A7M3 카메라 인터페이스 개선안 — 발표 자료 ${num}쪽`}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 767px) calc(100vw - 64px), 1360px"
                  className="w-full h-auto object-cover"
                />
              </figure>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default A7M3;
