import DefaultSection from "@/components/common/DefaultSection";
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

      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          Zustand 사용 이유와 성과
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              Page → Filter → 세부 컴포넌트로 내려가는 props drilling을 제거하기
              위해, Zustand 전역 상태를 활용했습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              필터 상태 변경 시 필요한 컴포넌트만 리렌더링하도록 셀렉터 기반
              구독을 적용하여 성능을 최적화했습니다
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              각 섹션은 독립적인 UI를 유지하면서, store를 통해 상태를 읽고
              갱신할 수 있어, API 호출 시 모든 필터 조건을 쉽게 통합할 수
              있었습니다. 이를 통해 props 전달과 상태 관리 복잡성을 줄였습니다.
            </p>
          </li>
        </ul>
      </div>
    </DefaultSection>
  );
};

export default Zustand;
