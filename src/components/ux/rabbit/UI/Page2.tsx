"use client";

import PageTitle from "./PageTitle";
import ResponsiveTabs from "./ResponsiveTabs";

const TEXT_STYLES = {
  highlight: "text-blue-400 font-semibold",
  normal: "font-light",
};

const Page2 = () => {
  const tabs = [
    { id: 0, label: "입찰 내역 페이지" },
    { id: 1, label: "경매 리스트 페이지" },
    { id: 2, label: "경매 상세 페이지" },
    { id: 3, label: "받은 요청 페이지" },
  ];

  return (
    <div className="w-full h-full flex flex-col p-8 rounded-lg gap-8">
      <PageTitle
        title="반응형 디자인"
        subtitle="사용자들이 다양한 디바이스 환경에서도 동일한 수준의 서비스를 이용할 수 있도록 반응형 디자인을 도입했습니다."
      />
      <div className="flex-1 flex flex-col items-center justify-center gap-16">
        <div className="w-full space-y-6">
          <ResponsiveTabs tabs={tabs} />
        </div>

        <div className="space-y-8 w-full">
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
              반응형 디자인
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  사용자는{" "}
                  <span className={TEXT_STYLES.highlight}>
                    데스크톱, 태블릿, 스마트폰
                  </span>{" "}
                  등 어떤 기기를 사용하더라도 일관된 경험을 제공받을 수
                  있습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>
                    채무와 채권 관리 업무
                  </span>
                  를 언제 어디서나 원활하게 수행할 수 있어 사용자 편의성과
                  접근성을 크게 향상시켰습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              디자인 의도
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  모든 디바이스에서{" "}
                  <span className={TEXT_STYLES.highlight}>
                    일관된 사용자 경험
                  </span>{" "}
                  제공
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>
                    핵심 기능의 접근성
                  </span>{" "}
                  최적화
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              기대 효과
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  사용자 만족도 및 서비스 접근성 향상
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  다양한 디바이스에서의 원활한 서비스 이용
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
