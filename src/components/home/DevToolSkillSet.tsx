import { DevToolList } from "@/constant/SkillSetConst";
import SkillCardList from "./SkillCardList";
import SkillSection from "../resume/SkillSection";

const DevToolSkillSet = () => {
  return (
    <SkillCardList skills={DevToolList}>
      <SkillSection title="협업 및 형상 관리">
        <p>
          <span className="font-semibold">Git</span>을 활용해 브랜치 전략에 따른
          장점을 파악하여, 프로젝트에 선택적으로 적용할 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">Git 형상관리</span>를 통해 프로젝트의
          변경 이력을 관리하며 프로젝트의 안정성을 높일 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">Jira</span>를 사용해 Story Point
          기반의 작업 단위 분할 및 우선순위 설정을 할 수 있습니다. 이를 통해
          프로젝트 진척도를 추적하고, 데이터를 기반으로 한 의사결정을 할 수
          있습니다.
        </p>
      </SkillSection>
    </SkillCardList>
  );
};

export default DevToolSkillSet;
