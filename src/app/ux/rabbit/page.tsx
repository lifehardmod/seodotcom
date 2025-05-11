import MovieLayout from "@/components/common/MovieLayout";
import RabbitCoin from "@/components/ux/rabbit/RabbitCoin";
import RabbitAccordion from "@/components/ux/rabbit/RabbitAccordion";
import RabbitCarousel from "@/components/ux/rabbit/RabbitCarousel";
import DesignSystem from "@/components/ux/rabbit/DesignSystem";
import Page1 from "@/components/ux/rabbit/UI/Page1";
import Page2 from "@/components/ux/rabbit/UI/Page2";
import Page3 from "@/components/ux/rabbit/UI/Page3";
import { LoadingProvider } from "@/contexts/LoadingContext";
import Page4 from "@/components/ux/rabbit/UI/Page4";
import Retrospect from "@/components/ux/rabbit/Retrospect";
const Rabbit = () => {
  const accordionSections = [
    {
      title: "기획",
      content: [
        {
          title: "프로젝트 개요",
          list: [
            "기간: 2025.03 - 2024.04, 6주",
            "역할: UI/UX 디자인 100%, Front-end 개발 50%",
            "구현 정도: 웹 배포 후 실 사용 테스트 및 최적화",
            "사용 툴: Figma, Jira, React, Sentry",
          ],
          component: (
            <RabbitCarousel
              images={[
                "/ppt/rabbit/1.webp",
                "/ppt/rabbit/2.webp",
                "/ppt/rabbit/3.webp",
                "/ppt/rabbit/4.webp",
                "/ppt/rabbit/5.webp",
                "/ppt/rabbit/6.webp",
                "/ppt/rabbit/7.webp",
                "/ppt/rabbit/8.webp",
                "/ppt/rabbit/9.webp",
                "/ppt/rabbit/10.webp",
                "/ppt/rabbit/11.webp",
              ]}
              enableScroll={false}
            />
          ),
        },
      ],
    },
    {
      title: "디자인 시스템",
      content: [
        {
          title: "디자인 시스템",
          description:
            "일관된 사용자 경험을 위한 디자인 시스템을 구축했습니다.",
          component: <DesignSystem />,
        },
      ],
    },
    {
      title: "UI",
      content: [
        {
          title: "UI 설계",
          component: (
            <RabbitCarousel
              images={[
                <Page1 key="page1" />,
                <Page2 key="page2" />,
                <Page3 key="page3" />,
                <Page4 key="page4" />,
              ]}
            />
          ),
        },
      ],
    },
    {
      title: "회고",
      content: [
        {
          title: "성과",
          list: [
            "Jira를 통한 프로젝트 일정 관리",
            "블록체인 시스템에 대한 이해",
            "개발과 디자인의 균형",
          ],
          component: <Retrospect />,
        },
      ],
    },
  ];

  return (
    <LoadingProvider>
      <div>
        <MovieLayout
          movieLink="/movies/Rabbit_Title.webm"
          text={
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-[clamp(28px,5vw,48px)] font-bold">
                NFT 기반 차용증 거래 서비스 RABBIT
              </h1>
              <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
                <p className="text-[clamp(16px,2vw,28px)] text-center leading-relaxed font-light">
                  <span className="font-semibold text-brand-primary">
                    블록체인
                  </span>{" "}
                  기반의{" "}
                  <span className="font-semibold text-brand-primary">
                    차용증 거래
                  </span>{" "}
                  서비스로,
                  <br className="hidden sm:block" />
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
          <div className="h-[400px] w-full mb-16">
            <RabbitCoin />
          </div>
          <RabbitAccordion sections={accordionSections} />
        </div>
      </div>
    </LoadingProvider>
  );
};

export default Rabbit;
