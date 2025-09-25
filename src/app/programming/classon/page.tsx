import Image from "next/image";
import ProjectOverview from "@/components/programming/ProjectOverview";
import Carousel from "@/components/common/Carousel";

const PPTImages = [
  "/ClassOn/Layout/Login.webp",
  "/ClassOn/Layout/Main.webp",
  "/ClassOn/Layout/learningList.webp",
  "/ClassOn/Layout/learningDetail.webp",
  "/ClassOn/Layout/chat.webp",
  "/ClassOn/Layout/worksheetdetail.webp",
  "/ClassOn/Layout/assignment.webp",
  "/ClassOn/Layout/attendance.webp",
  "/ClassOn/Layout/attendanceQR.webp",
];
const classon = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-4  my-16">
        <div className="rounded-sm px-6 my-10 py-4 bg-white flex justify-center">
          <Image
            src="/ClassOn/ClassOn_Logo.webp"
            alt="rabbit_logo"
            width={500}
            height={300}
          />
        </div>
        <h1 className="text-[clamp(24px,5vw,48px)] font-bold text-center">
          교사의 <span className="font-semibold text-brand-primary">업무</span>
          는 간편하게,
          <br />
          학생의 <span className="font-semibold text-brand-primary">학습</span>
          은 효과적으로 ClassOn
        </h1>
        <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
          <p className="text-[clamp(16px,2vw,21px)] text-center leading-relaxed font-light">
            교사의
            <span className="font-semibold text-brand-primary"> 수업 운영</span>
            과{" "}
            <span className="font-semibold text-brand-primary">학습 관리</span>
            를<br /> 하나의 플랫폼에서 통합적으로 처리할 수 있는{" "}
            <span className="font-semibold text-brand-primary">
              교육 ERP 시스템
            </span>
          </p>
        </div>
      </section>
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
        <section className="flex flex-col items-center gap-4">
          <div className="flex flex-col w-full gap-4 px-4 bg-black/5 rounded-sm p-4 sm:px-8 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-semibold">디자인</h3>
            <Carousel images={PPTImages} />
          </div>
        </section>
        <div className="flex w-full flex-col gap-8">
          <ProjectOverview
            title="프로젝트 개요"
            list={[
              "기간 : 2025.05 - 2025.06, 6주",
              "역할 : Front-end 개발 100%, UX/UI 디자인 100%",
              "구현 정도 : 웹 배포 후 실 사용 테스트 및 최적화",
            ]}
          />
          <ProjectOverview
            title="기술 스택"
            list={[
              "React, TypeScript, Vite",
              "스타일링 : Tailwind CSS",
              "서버 상태/캐싱 : React Query",
            ]}
          />
          <div className="flex flex-col gap-10"></div>
        </div>
      </div>
    </>
  );
};

export default classon;
