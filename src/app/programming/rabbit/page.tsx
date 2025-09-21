import MovieLayout from "@/components/common/MovieLayout";
import RabbitCoin from "@/components/ux/rabbit/RabbitCoin";
import Image from "next/image";
import ProjectOverview from "@/components/programming/ProjectOverview";
import PlanningSection from "@/components/shared/PlanningSection";
import { PPTImages } from "@/constant/ImageDir";
import {
  MSW,
  Responsive,
  CodeSplitting,
  Zustand,
  Tailwind,
  UXImprorve,
  RabbitRetrospect,
} from "@/components/programming/rabbit";
import Devider from "@/components/common/Devider";

const Rabbit = () => {
  return (
    <>
      <MovieLayout
        movieLink="/movies/Rabbit_Title.webm"
        text={
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[clamp(24px,5vw,48px)] font-bold text-center">
              NFT 기반 차용증 거래 서비스 RABBIT
            </h1>
            <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
              <p className="text-[clamp(16px,2vw,21px)] text-center leading-relaxed font-light">
                <span className="font-semibold text-brand-primary">
                  블록체인
                </span>{" "}
                기반의{" "}
                <span className="font-semibold text-brand-primary">
                  차용증 거래
                </span>{" "}
                서비스로, <br className=" sm:hidden" />
                투명하고 안전한{" "}
                <span className="font-semibold text-brand-primary">
                  P2P 대출
                </span>
                서비스를 제공합니다.
              </p>
            </div>
          </div>
        }
      />
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
        <section className="flex flex-col items-center gap-4">
          <div className="w-[clamp(300px,50vw,600px)] h-auto aspect-square">
            <RabbitCoin />
          </div>
          <Image
            src="/logo.svg"
            alt="rabbit_logo"
            width={500}
            height={250}
            className="pb-36 px-4"
          />
        </section>
        <div className="flex w-full flex-col gap-8">
          <ProjectOverview
            title="프로젝트 개요"
            list={[
              "기간 : 2025.03 - 2024.04, 6주",
              "역할 : Front-end 개발 50%, UX/UI 디자인 100%",
              "구현 정도 : 웹 배포 후 실 사용 테스트 및 최적화",
              "성과 : 디지털인증협회 블록체인 & AI 해커톤 예선 진출 (전국 20팀), 카카오뱅크 Finnect 챌린지 예선 진출 (서울권 8팀)",
            ]}
          />
          <ProjectOverview
            title="기술 스택"
            list={[
              "React, TypeScript, Vite",
              "스타일링 : Tailwind CSS",
              "상태관리 : Zustand",
              "서버 상태/캐싱 : React Query",
              "테스트 및 API 모킹 : MSW",
            ]}
          />
          <PlanningSection title="기획" Images={PPTImages} />
          <div className="flex flex-col gap-10">
            <MSW />
            <Devider />
            <Responsive />
            <Devider />
            <CodeSplitting />
            <Devider />
            <Zustand />
            <Devider />
            <Tailwind />
            <Devider />
            <UXImprorve />
            <Devider />
            <RabbitRetrospect />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rabbit;
