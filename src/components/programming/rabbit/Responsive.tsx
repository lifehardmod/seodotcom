import DefaultSection from "@/components/common/DefaultSection";
import ResponsiveTabs from "@/components/ux/rabbit/UI/ResponsiveTabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";

const tabs = [
  { id: 0, label: "입찰 내역 페이지" },
  { id: 1, label: "경매 리스트 페이지" },
  { id: 2, label: "경매 상세 페이지" },
  { id: 3, label: "받은 요청 페이지" },
];

const Responsive = () => {
  return (
    <DefaultSection
      title="반응형 디자인"
      description="다양한 디바이스 환경에서도 동일한 수준의 서비스를 이용할 수 있도록 반응형 웹을 구현했습니다."
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-8 mb-8">
        <div className="w-full">
          <ResponsiveTabs tabs={tabs} />
        </div>
        <div className="bg-black/40 p-8 rounded-xl space-y-8 w-full">
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
                등 어떤 기기를 사용하더라도 일관된 경험을 제공받을 수 있습니다.
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
      <SyntaxHighlighter language="javascript">
        {`import { useEffect, useState } from "react";

type BreakPoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const useMediaQuery = (
  breakpoint: BreakPoint,
  type: "min" | "max" = "min",
) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = \`(\${type}-width: \${breakpoints[breakpoint]})\`;
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [breakpoint, type]);

  return matches;
};

export default useMediaQuery;
`}
      </SyntaxHighlighter>
      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              전달받은 breakpoint에 따라 현재 화면이 해당 조건을 만족하는지
              boolean 값으로 반환하는 Hook입니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              window.matchMedia와 이벤트 리스너를 활용하여 화면 크기 변화에 따라
              실시간으로 상태를 갱신합니다.
            </p>
          </li>
        </ul>
      </div>
      <SyntaxHighlighter language="javascript">{`
const AuctionBidHistory = ({ data }: AuctionBidHistoryProps) => {
  const isDesktop = useMediaQuery("lg");

  if (!data || data.length === 0) {
    return (
      <div className="w-full overflow-hidden rounded-lg bg-gray-900 p-4">
        <div className="flex min-h-[300px] items-center justify-center text-center text-base text-gray-400">
          입찰 내역이 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-900">
      {isDesktop ? (
        <AuctionBidHistoryDesktop data={data} />
      ) : (
        <AuctionBidHistoryMobile data={data} />
      )}
    </div>
  );
};

`}</SyntaxHighlighter>
      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              useMediaQuery로 받은 값에 따라 데스크톱 또는 모바일 버전의
              컴포넌트를 렌더링하는 방향으로 사용하였습니다.
            </p>
          </li>
        </ul>
      </div>
      <SyntaxHighlighter language="javascript">{`
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    
    <div className="flex h-full flex-col gap-2 lg:flex-row">
    
    <div className="text font-medium whitespace-nowrap text-white sm:text-xl">

`}</SyntaxHighlighter>
      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              Tailwind CSS의 반응형 유틸리티(grid-cols-*, sm:, md:, lg: 등)를
              활용하여, 화면 크기에 따라 컬럼 수와 레이아웃이 자동으로
              조정되도록 구현함으로써 별도의 컴포넌트를 교체하지 않고도 다양한
              화면에서 일관된 UI를 유지할 수 있었습니다.
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white">의도</h4>
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
                <span className={TEXT_STYLES.highlight}>접근성</span> 최적화
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white">기대 효과</h4>
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
    </DefaultSection>
  );
};

export default Responsive;
