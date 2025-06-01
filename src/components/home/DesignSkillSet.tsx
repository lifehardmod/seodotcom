import { DesignToolList } from "@/constant/SkillSetConst";
import SkillCardList from "./SkillCardList";
import SkillSection from "../resume/SkillSection";
import ImageCarousel from "../common/ImageCarousel";

const DesignSkillSet = () => {
  return (
    <SkillCardList skills={DesignToolList}>
      <SkillSection title="디자인 시스템 설계">
        <p>
          Auto Layout을 Flexbox 기반 HTML 구조와 유사한 레이아웃 설계에 적용하여{" "}
          <span className="font-semibold">
            개발자와 커뮤니케이션이 원활한 디자인 시스템 구현
          </span>
          을 지향합니다.
        </p>{" "}
        <p>
          다양한 상태와 속성을 가진 컴포넌트를 props 형태로 관리함으로써 팀의
          능률을 높이고, 디자인 시스템의 확장성을 높이는 것을 지향합니다.
        </p>
        <p>
          <span className="font-semibold">Figma</span>를 기반으로 디자인
          시스템을 구축하며, 컬러, 타이포그래피, 간격 등의 시각 요소를{" "}
          <span className="font-semibold">디자인 토큰</span>으로 추상화할 수
          있습니다.
        </p>{" "}
        <p>
          Variable과 Style 기능을 활용해{" "}
          <span className="font-semibold">컴포넌트 단위의 확장성과 일관성</span>
          을 확보할 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">Atomic Design</span> 개념을 적용하여
          컴포넌트 단위의 재사용성과 확장성을 높이는 것을 지향합니다.
        </p>
      </SkillSection>

      <SkillSection title="리서치 기반 UI 설계">
        <p>
          UX 설계 과정에서{" "}
          <span className="font-semibold">인터뷰, 설문조사, 관찰</span> 등
          사용자 리서치 방법론을 활용하여, 사용자의 니즈를 획득할 수 있습니다.
        </p>
        <p>
          최근에는 정성적 리서치 외에도{" "}
          <span className="font-semibold">
            Sentry 등 로깅 기반의 정량적 사용자 데이터
          </span>
          를 수집을 시도하고 있습니다.
        </p>
        <p>
          이를 통해 웹에서 사용자의 실제 행동 패턴을 파악하고, UI 제작 시 실제
          사용 흐름에 근거한 의사결정을 도출할 수 있습니다.
        </p>
        <div className="w-full mt-5">
          <ImageCarousel />
        </div>
      </SkillSection>

      <SkillSection title="그래픽 및 영상 제작 도구">
        <p>
          <span className="font-semibold">Illustrator</span>를 통해 벡터 기반의
          SVG 자산을 제작하여 웹, 앱에 최적화된 UI 리소스로 활용할 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">Photoshop</span>을 활용하여 픽셀
          기반의 사진 및 자산을 편집하고 제작할 수 있습니다.
        </p>
        <p>
          <span className="font-semibold">After Effect</span>와{" "}
          <span className="font-semibold">Premiere Pro</span>를 사용해 브랜드와
          어울리는 영상 콘텐츠와 모션그래픽을 제작할 수 있습니다.
        </p>
        <p>
          실제 기업 유튜브 콘텐츠 기획 및 영상 제작 프로젝트에 참여하여 다수의
          이해관계자와 커뮤니케이션하며 영상 콘텐츠를 제작한 경험이 있습니다.
        </p>
      </SkillSection>
    </SkillCardList>
  );
};

export default DesignSkillSet;
