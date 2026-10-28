import pageFont from "@/lib/fonts/ux-assembly";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/ux/assembly");

import MovieLayout from "@/components/common/MovieLayout";
import Image from "next/image";

const Assembly = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/ux/assembly" />
      <section>
        <MovieLayout
          movieLink="/Assembly/Assembly_Title.webm"
          text={
            <h1 className="text-[clamp(28px,5vw,48px)] font-bold flex flex-col items-center">
              <span className="font-semibold">
                사용자에게 가장 잘 맞는 데스크탑 추천 서비스
              </span>
              <span> Assembly</span>
            </h1>
          }
        />
        <p className="mx-auto my-10 max-w-3xl text-lg leading-relaxed">
          Assembly는 사용자에게 맞는 데스크탑 조립을 돕는 서비스의 UX/UI 디자인
          프로젝트입니다. 모바일 화면과 프로토타입을 통해 데스크탑 추천 서비스의
          구성을 소개합니다.
        </p>
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Assembly/AssemblyLogo.svg"
              alt="Assembly 데스크탑 추천 서비스"
              width={500}
              height={250}
              className="py-30"
            />
          </div>
          <div className=" items-center flex px-4 sm:px-20 justify-center">
            <Image
              src="/Assembly/Assembly.webp"
              alt="Assembly 데스크탑 추천 서비스"
              width={1958}
              height={15189}
              sizes="(max-width: 767px) calc(100vw - 64px), 1200px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assembly;
