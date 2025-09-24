import DefaultSection from "@/components/common/DefaultSection";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";
import ExplanationLayout from "@/components/common/ExplanationLayout";
import Explanation from "@/components/common/Explanation";

const MSW = () => {
  return (
    <DefaultSection
      title="MSW"
      description="독립적인 프론트엔드 개발을 위해 MSW를 이용한 모킹을 구현했습니다."
    >
      <SyntaxHighlighter language="javascript">
        {`async function enableMocking() {
  // Vite의 환경변수를 사용하여 development 환경일 때만 동적 임포트를 통해 번들 크기 최적화
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./shared/lib/browser");
    return await worker.start();
  }
}

//handlers를 등록하며 worker 인스턴스 생성
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript">{`export const handlers = [
  // 경매 목록 조회
  http.get(\`\${VITE_API_URL}/\${VITE_API_VERSION}/auctions\`, ({ request }) => {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams) as AuctionListRequest;
    
    let filteredList = [...mockAuctionList.content];
  
    if (params.minPrice && Number(params.minPrice) !== 0) {
      filteredList = filteredList.filter(
        (item) => item.price >= Number(params.minPrice),
      );
    }

    if (params.maxPrice && Number(params.maxPrice) !== 0) {
      filteredList = filteredList.filter(
        (item) => item.price <= Number(params.maxPrice),
      );
    }

    ...


    // 페이지네이션 적용
    const pageNumber = params.pageNumber ? Number(params.pageNumber) : 0;
    const pageSize = params.pageSize ? Number(params.pageSize) : 10;
    const startIndex = pageNumber * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedList = filteredList.slice(startIndex, endIndex);
    const totalElements = filteredList.length;
    const totalPages = Math.ceil(totalElements / pageSize);
    const isLastPage = pageNumber >= totalPages - 1;

    const response: ApiResponse<AuctionListResponse> = {
      status: "SUCCESS",
      data: {
        content: paginatedList,
        pageNumber: pageNumber,
        pageSize: pageSize,
        totalElements: totalElements,
        totalPages: totalPages,
        last: isLastPage,
        hasNext: !isLastPage,
      },
    };

    return HttpResponse.json(response);
  })
`}</SyntaxHighlighter>

      <ExplanationLayout title="MSW">
        <Explanation>
          <span className={TEXT_STYLES.highlight}>정적 Mock</span>은 하드코딩된
          JSON을 그대로 반환하기 때문에, 요청 파라미터에 따라 결과가 달라지는
          시나리오는 검증할 수 없습니다. 따라서{" "}
          <span className={TEXT_STYLES.highlight}>MSW를 이용한 동적 Mock</span>
          을 구현했습니다.
        </Explanation>
        <Explanation>
          이를 통해{" "}
          <span className={TEXT_STYLES.highlight}>
            API의 Parameter에 따라 달라지는 결과
          </span>
          까지 확인할 수 있어, 실제 API와 유사한 환경에서 프론트엔드 기능을
          검증할 수 있었습니다.
        </Explanation>
        <Explanation>
          또한 MSW는{" "}
          <span className={TEXT_STYLES.highlight}>네트워크 수준에서 동작</span>
          하기 때문에 실제 렌더링 중에 Promise를 throw하여, Suspense에 따르는
          Fallback UI까지 테스트할 수 있었습니다.
        </Explanation>
      </ExplanationLayout>
      <ExplanationLayout title="성과">
        <Explanation>
          이전에는{" "}
          <span className={TEXT_STYLES.highlight}>
            백엔드 API가 완성되기 전까지 Mock Data를 하드코딩
          </span>
          하거나, ApiResponse가 단순 Mock 데이터를 반환하도록 구현했습니다. 이로
          인해 추후 실제 API 개발 시 코드를 다시 수정해야 하는 번거로움이
          있었고,{" "}
          <span className={TEXT_STYLES.highlight}>
            백엔드 개발 지연이 프론트엔드 개발 지연
          </span>
          으로 이어지는 경험도 있었습니다.
        </Explanation>
        <Explanation>
          하지만, <span className={TEXT_STYLES.highlight}>MSW를 이용</span>
          하여 API 명세서를 보고 API를 먼저 만든 후 테스트를 통해 프론트엔드 API
          호출이 올바르게 구현된 것을 확인할 수 있었습니다. 따라서{" "}
          <span className={TEXT_STYLES.highlight}>
            백엔드와 독립적인 프론트엔드 개발
          </span>
          이 가능했고, 백엔드 API 개발 지연에 따른 프론트엔드 개발 지연이
          발생하지 않았습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default MSW;
