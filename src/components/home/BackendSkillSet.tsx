import { BackendList } from "@/constant/SkillSetConst";
import SkillCardList from "./SkillCardList";
import SkillSection from "../resume/SkillSection";

const BackendSkillSet = () => {
  return (
    <SkillCardList skills={BackendList}>
      <SkillSection title="백엔드 이해 및 구현">
        <p>
          <span className="font-semibold">Java</span>를 기반으로 자료구조, 흐름
          제어, 예외 처리, 객체지향 설계 원칙에 대한 이해를 가지고 있습니다.
        </p>
        <p>
          <span className="font-semibold">Spring Framework</span>의 전반적인
          구조와 흐름에 대한 이해를 바탕으로, 컨트롤러-서비스-DAO 계층의 역할을
          구분하여 디버깅 및 로직 추적이 가능합니다.
        </p>
        <p>
          <span className="font-semibold">MyBatis</span>를 사용하여 DB와의
          연동을 구현한 경험이 있으며, SQL 매핑 XML 작성과 쿼리 최적화 경험이
          있습니다.
        </p>
        <p>
          <span className="font-semibold">SQLD 자격증</span>을 보유하여
          데이터베이스 정규화, 인덱스 활용, 조인 등 쿼리 작성의 이론적 기반을
          갖추고 있습니다.
        </p>
      </SkillSection>
    </SkillCardList>
  );
};

export default BackendSkillSet;
