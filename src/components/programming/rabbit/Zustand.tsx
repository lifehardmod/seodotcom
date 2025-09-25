import {
  ExplanationLayout,
  Explanation,
  DefaultSection,
} from "@/components/common";
import { TEXT_STYLES } from "@/constant/util";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Zustand = () => {
  return (
    <DefaultSection
      title="Zustand를 이용한 상태관리"
      description="Zustand를 활용해 상태 관리를 구현하고, props drilling을 제거했습니다."
    >
      <SyntaxHighlighter language="javascript">
        {`export const useAuctionFilterStore = create<AuctionFilterState>((set) => ({
  maxPrice: "",
  minPrice: "",
  maxIr: "",
  minIr: "",
  maxRate: "",
  repayType: [],
  matTerm: "",
  matStart: "",
  matEnd: "",
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxIr: (maxIr) => set({ maxIr }),
  setMinIr: (minIr) => set({ minIr }),
  setMaxRate: (maxRate) => set({ maxRate }),
  setRepayType: (repayType) => set({ repayType }),
  setMatTerm: (matTerm) => set({ matTerm }),
  setMatStart: (matStart) => set({ matStart }),
  setMatEnd: (matEnd) => set({ matEnd }),
}));
...
  const minPrice = useAuctionFilterStore((state) => state.minPrice);
  const maxPrice = useAuctionFilterStore((state) => state.maxPrice);
  const maxIr = useAuctionFilterStore((state) => state.maxIr);
  const minIr = useAuctionFilterStore((state) => state.minIr);
  const maxRate = useAuctionFilterStore((state) => state.maxRate);
  const repayType = useAuctionFilterStore((state) => state.repayType);
  const matTerm = useAuctionFilterStore((state) => state.matTerm);
  const matStart = useAuctionFilterStore((state) => state.matStart);
  const matEnd = useAuctionFilterStore((state) => state.matEnd);
};`}
      </SyntaxHighlighter>

      <ExplanationLayout title="Zustand 사용 이유와 성과">
        <Explanation>
          Page → Filter → 세부 컴포넌트로 내려가는{" "}
          <span className={TEXT_STYLES.highlight}>props drilling</span>을
          제거하기 위해, Zustand 전역 상태를 활용했습니다.
        </Explanation>
        <Explanation>
          필터 상태 변경 시 필요한 컴포넌트만 리렌더링하도록{" "}
          <span className={TEXT_STYLES.highlight}>셀렉터 기반 구독</span>을
          적용하여 성능을 최적화했습니다.
        </Explanation>
        <Explanation>
          각 섹션은 독립적인 상태를 유지하면서,{" "}
          <span className={TEXT_STYLES.highlight}>
            store를 통해 상태를 읽고 갱신
          </span>
          할 수 있어, API 호출 시 모든 필터 조건을 쉽게 통합할 수 있었습니다.
          이를 통해 props 전달과 상태 관리 복잡성을 줄였습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default Zustand;
