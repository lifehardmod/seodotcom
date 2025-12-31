import { FrontendList } from "@/constant/SkillSetConst";
import SkillSection from "../resume/SkillSection";
import SkillCardList from "./SkillCardList";

const FrontendSkillSet = () => {
  return (
    <SkillCardList skills={FrontendList}>
      <SkillSection title="프로젝트 설계 및 구현">
        <p>
          <span className="font-semibold">React 기반 SPA 프로젝트</span>를
          처음부터 끝까지 직접 설계하고 구현할 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">
            폴더 구조 구성, 라우팅 설정, 컴포넌트 설계, 상태 관리, API 연동,
            라이브러리 선택 등
          </span>{" "}
          전체 개발 흐름을 스스로 조직하고 구현할 수 있습니다.
        </p>
      </SkillSection>

      <SkillSection title="TypeScript">
        <p>
          <span className="font-semibold">TypeScript</span> 환경에서 개발하여,
          런타임 오류를 사전에 방지하고, 컴포넌트 간 데이터 흐름의 명확성과
          안정성 확보에 집중합니다.
        </p>
        <p>
          <span className="font-semibold">불필요한 타입 추론</span>은
          최소화하고, 정적 타입 언어에 가까운 명시적 타입 선언을 통해 예측
          가능한 코드와 유지보수성을 추구합니다.
        </p>
      </SkillSection>

      <SkillSection title="상태 관리">
        <p>
          <span className="font-semibold">Zustand</span>를 사용해 상태 관리를
          구현하고 있습니다.
        </p>
        <p>
          <span className="font-semibold">셀렉터 기반</span>의 구독 최적화를
          통해 렌더링 성능을 고려한 상태 분리를 실현하고 있습니다.
        </p>
        <p>
          전역 상태는 공유가 필요한 데이터에만 제한하고, 로컬 상태는 컴포넌트
          내부에 캡슐화하여 필요한 값만 구독함으로써 렌더링 성능을 효율적으로
          제어할 수 있습니다.
        </p>
      </SkillSection>

      <SkillSection title="웹 표준 및 스타일링">
        <p>
          HTML을 사용할 때 시멘틱 태그를 기반으로 설계하여 콘텐츠의 의미와 계층
          구조가 명확히 드러나도록 할 수 있습니다.
        </p>
        <p>
          CSS는 Tailwind CSS의 유틸리티 클래스를 활용하여 디자인 시스템의
          일관성을 유지하고, 재사용 가능한 UI를 구성하는 방향을 선호합니다.
        </p>
      </SkillSection>

      <SkillSection title="디자인 시스템">
        <p>
          UI/UX 디자인 경험을 바탕으로 컬러, 간격, 타이포그래피 등 핵심 디자인
          토큰을 체계적으로 정의하고, 시각적 일관성과 설계 기준을 유지할 수
          있습니다.
        </p>
        <p>
          정의한 토큰은 Tailwind 설정에 반영하여, 일관된 UI 구성과 재사용 가능한
          컴포넌트 기반 디자인 시스템을 구현할 수 있습니다.
        </p>
        <p>
          디자인 토큰 기반 설계를 직접 코드에 반영할 수 있으며, 디자인과 개발
          간의 간극을 줄이는 데 강점을 가지고 있습니다.
        </p>
      </SkillSection>
    </SkillCardList>
  );
};

export default FrontendSkillSet;
