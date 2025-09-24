import DefaultSection from "@/components/common/DefaultSection";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";
import ExplanationLayout from "@/components/common/ExplanationLayout";
import Explanation from "@/components/common/Explanation";

const CodeSplitting = () => {
  return (
    <DefaultSection
      title="코드 스플리팅"
      description="초기 로딩 속도 개선을 위해 페이지별 코드 스플리팅을 적용했습니다."
    >
      <SyntaxHighlighter language="javascript">
        {`
import DefaultLoadingFallback from "@/shared/ui/DefaultLoadingFallback";
import ErrorBoundary from "@/shared/ui/ErrorBoundary";
import { ComponentType, lazy, Suspense } from "react";

interface LazyComponentProps {
  fallback?: React.ReactNode;
}

export const withLazyComponent = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  options: LazyComponentProps = {},
) => {
  const LazyComponent = lazy(importFunc);

  return (props: P) => (
    <ErrorBoundary>
      <Suspense fallback={options.fallback || <DefaultLoadingFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript">
        {`//페이지 컴포넌트 동적 임포트
const AuctionHistory = withLazyComponent(
  () => import("@/pages/auction/ui/AuctionHistory"),
);
const AuctionCreate = withLazyComponent(
  () => import("@/pages/auction/ui/AuctionCreate"),
);
const AuctionList = withLazyComponent(
  () => import("@/pages/auction/ui/AuctionList"),
);
const AuctionDetail = withLazyComponent(
  () => import("@/pages/auction/ui/AuctionDetail"),
);
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript">
        {`
//적용 전
→ dist/assets/index-x0IGiL1h.js         1,741.58 kB │ gzip: 543.13 kB │ map: 7,925.07 kB


//적용 후
→ dist/assets/index-BUJYRM9M.js         1,184.76 kB │ gzip: 387.46 kB │ map: 5,724.35 kB
`}
      </SyntaxHighlighter>
      <ExplanationLayout>
        <Explanation>
          코드 스플리팅 적용 전, 초기 빌드 결과에서{" "}
          <span className={TEXT_STYLES.highlight}>index.js (1.7MB)</span> 번들
          파일의 크기가 크게 나타났습니다.
        </Explanation>
        <Explanation>
          이 문제를 해결하기 위해{" "}
          <span className={TEXT_STYLES.highlight}>lazy를 활용하여</span>{" "}
          <span className={TEXT_STYLES.highlight}>
            라우트 기반 코드 스플리팅
          </span>
          을 적용했습니다.
        </Explanation>
        <Explanation>
          사용자가 특정 페이지에 접속할 때만 해당 페이지에 필요한 청크를
          동적으로 로드하도록 구현하여,{" "}
          <span className={TEXT_STYLES.highlight}>
            초기 진입 시 불필요한 코드의 로딩을 방지
          </span>
          하고 초기 로딩 성능을 최적화했습니다.
        </Explanation>
      </ExplanationLayout>
      <ExplanationLayout>
        <Explanation>
          코드 스플리팅 적용 후, index.js의 크기가{" "}
          <span className={TEXT_STYLES.highlight}>
            1.74MB에서 1.18MB로 약 32% 감소
          </span>
          했습니다. 또한 여러 페이지 컴포넌트들이 개별 청크로 분리되어 전체적인
          번들 구조가 최적화되었습니다.
        </Explanation>
        <Explanation>
          <span className={TEXT_STYLES.highlight}>
            초기 페이지 로딩 속도를 개선
          </span>
          하여 사용자 경험을 향상시켰습니다. 사용자는 더 빠르게 첫 화면을 볼 수
          있으며, 이후 페이지 이동 시에도 필요한 리소스만 로드하여 효율적인
          렌더링이 가능해졌습니다.
        </Explanation>
        <Explanation>
          공통 로직을 담은{" "}
          <span className={TEXT_STYLES.highlight}>
            withLazyComponent를 생성
          </span>
          하여, 새로운 페이지가 추가될 때마다 일관되고 간편하게 코드 스플리팅을
          적용할 수 있도록 설계했습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default CodeSplitting;
