import {
  ExplanationLayout,
  Explanation,
  DefaultSection,
} from "@/components/common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TEXT_STYLES } from "@/constant/util";

const NestedLayout = () => {
  return (
    <DefaultSection
      title="중첩 레이아웃을 이용한 레이아웃 구조화"
      description="중첩 레이아웃을 이용하여 일관성있는 UI 구현, 로직 관리를 했습니다."
    >
      <SyntaxHighlighter language="javascript">
        {`
        <Route path="/team">
            <Route index element={<Navigate to="/" replace />} />
            <Route path="create" element={<TeamCreate />} />
            <Route path=":teamId" element={<TeamLayout />}>
                 <Route index element={<TeamDetail />} />
                 <Route path="edit" element={<TeamEdit />} />
                 <Route path="review" element={<Review />} />
            ...
            </Route>
        </Route>

`}
      </SyntaxHighlighter>
      <ExplanationLayout title="중첩 레이아웃 활용">
        <Explanation>
          <span className={TEXT_STYLES.highlight}>
            DefaultLayout → TeamLayout
          </span>
          과 같은 중첩 레이아웃을 사용하여, 페이지 구조를 명확하게 분리했습니다.
        </Explanation>
        <Explanation>
          상위 레이아웃은 한 번만 렌더링되고, 하위{" "}
          <span className={TEXT_STYLES.highlight}>&lt;Outlet /&gt;</span>만
          교체되어{" "}
          <span className={TEXT_STYLES.highlight}>
            불필요한 전체 페이지 리렌더링을 최소화
          </span>
          했습니다.
        </Explanation>
        <Explanation>
          Layout 단계에서{" "}
          <span className={TEXT_STYLES.highlight}>권한 검증 로직</span>을
          구현하여, 인증되지 않은 사용자의 접근을 사전 차단했습니다.
        </Explanation>
      </ExplanationLayout>
      <SyntaxHighlighter language="javascript">
        {`
        //bodyLayout24
        <div className="flex h-fit w-full flex-col items-center gap-16 px-4 py-4 pl-8">
            {children}
        </div>

        //bodyLayout64
        <div className="flex h-fit w-full flex-col items-center gap-6 py-4 pt-4 pr-3 pl-8">
            {children}
        </div>

         //baseLayout
        <section className="flex h-full flex-col gap-2">{children}</section>

`}
      </SyntaxHighlighter>

      <ExplanationLayout title="상위 Layout을 활용한 UI/UX 일관성">
        <Explanation>
          중첩 라우팅 기반의 중첩 레이아웃뿐 아니라, 상위 Layout에서{" "}
          <span className={TEXT_STYLES.highlight}>children을 받아 재사용</span>
          하는 구조를 구현했습니다. 이를 통해 페이지별 UI/UX 일관성을 유지하고,
          반복되는 스타일 및 구조를 통합 관리할 수 있었습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default NestedLayout;
