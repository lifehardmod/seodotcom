import { MovieLayout, Separator, Carousel } from "@/components/common";
import Image from "next/image";
import ProjectOverview from "@/components/programming/ProjectOverview";

import {
  WebMockup,
  StoryBook,
  AtomicDesign,
  // ImprovementPoint,
  NestedLayout,
} from "@/components/programming/mimo";
import { FaGithub } from "react-icons/fa";
const MockupImages = [
  "/MIMO/Layout/main.webp",
  "/MIMO/Layout/chat.webp",
  "/MIMO/Layout/momain.webp",
  "/MIMO/Layout/molist.webp",
  "/MIMO/Layout/modetail.webp",
  "/MIMO/Layout/board.webp",
  "/MIMO/Layout/membermanage.webp",
  "/MIMO/Layout/moneymanage.webp",
  "/MIMO/Layout/moneymanage2.webp",
];

const MockupNode = MockupImages.map((image) => (
  <WebMockup images={image} key={image} />
));

const Mimo = () => {
  return (
    <>
      <MovieLayout
        movieLink="/movies/MIMO_Title.webm"
        text={
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[clamp(24px,5vw,48px)] font-bold text-center">
              모임을 쉽고 간편하게 MIMO
            </h1>
            <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
              <p className="text-[clamp(16px,2vw,21px)] text-center leading-relaxed font-light">
                <span className="font-semibold text-brand-primary">
                  모임 생성
                </span>{" "}
                부터{" "}
                <span className="font-semibold text-brand-primary">
                  회비 관리
                </span>
                와{" "}
                <span className="font-semibold text-brand-primary">
                  실시간 채팅
                </span>
                까지, <br className=" sm:hidden" />
                쉽고 간편한{" "}
                <span className="font-semibold text-brand-primary">
                  모임 관리
                </span>
                서비스를 제공합니다.
              </p>
            </div>
          </div>
        }
      />
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
        <section className="flex flex-col items-center gap-4">
          <div className="rounded-sm px-6 my-10 py-4 bg-white flex justify-center">
            <Image
              src="/MIMO/MIMO_LOGO.svg"
              alt="MIMO_logo"
              width={300}
              height={150}
            />
          </div>

          <div className="flex flex-col w-full gap-4 px-4 bg-black/5 rounded-sm p-4 sm:px-8 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-semibold">디자인</h3>
            <Carousel images={MockupNode} />
          </div>
        </section>
        <div className="flex w-full flex-col gap-8">
          <div className="flex text-xl font-semibold gap-2 w-full justify-center">
            <a
              href="https://github.com/lifehardmod/MIMO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white rounded-sm px-4 py-2 hover:text-gray-900 transition-colors"
            >
              <span>GitHub</span>
              <FaGithub />
            </a>
          </div>
          <ProjectOverview
            title="프로젝트 개요"
            list={[
              "기간 : 2025.01 - 2025.02, 7주",
              "역할 : Front-end 개발 50%, UX/UI 디자인 100%",
              "구현 정도 : 웹 배포 후 실 사용 테스트 및 최적화",
            ]}
          />
          <ProjectOverview
            title="기술 스택"
            list={[
              "React, TypeScript, Vite, npm",
              "스타일링 : Tailwind CSS",
              "서버 상태/캐싱 : React Query",
              "컴포넌트 개발 및 검증 : StoryBook",
            ]}
          />
          <div className="flex flex-col gap-10">
            <StoryBook />
            <Separator className="sm:my-16 my-8" />
            <AtomicDesign />
            <Separator className="sm:my-16 my-8" />
            <NestedLayout />
            {/* <Separator className="sm:my-16 my-8" />
            <ImprovementPoint /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mimo;
