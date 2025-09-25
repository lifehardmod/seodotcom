import {
  ExplanationLayout,
  Explanation,
  DefaultSection,
} from "@/components/common";
import { LoadingProvider } from "@/contexts/LoadingContext";
import UXImproveContent from "./UXImproveContent";
import { TEXT_STYLES } from "@/constant/util";

const UXImprorve = () => {
  return (
    <DefaultSection
      title="UX 개선"
      description="UX 개선을 통해 사용자 이탈율을 줄였습니다."
    >
      <LoadingProvider>
        <UXImproveContent />
      </LoadingProvider>
      <ExplanationLayout title="문제 상황">
        <Explanation>
          <span className={TEXT_STYLES.highlight}>
            블록체인 네트워크에 직접 접속하여
          </span>{" "}
          데이터를 받아오거나, 트랜잭션 처리 및 NFT 발행을 수행해야 하는 특성상{" "}
          <span className={TEXT_STYLES.highlight}>
            데이터 로딩 시간이 길어지는 문제
          </span>
          가 있었습니다.
        </Explanation>
        <Explanation>
          로딩이 길어지는 구간에서 사용자 이탈이 발생했으며, 사용자가 로딩
          화면을{" "}
          <span className={TEXT_STYLES.highlight}>단순 렉으로 오인 </span>
          하고 새로고침하거나{" "}
          <span className={TEXT_STYLES.highlight}>페이지를 이탈했습니다.</span>
        </Explanation>
      </ExplanationLayout>

      <ExplanationLayout title="해결 방안">
        <Explanation>
          <span className={TEXT_STYLES.highlight}>스켈레톤 UI를 도입</span>하여
          데이터를 불러오는 동안, 화면 구조를 미리 보여주는방식으로
          개선했습니다.
        </Explanation>
        <Explanation>
          또한, <span className={TEXT_STYLES.highlight}>Overlay를 통해</span>{" "}
          사용자가 이탈하면 안되는, 로직이 진행되는 상황임을 인지시켰습니다.
        </Explanation>
        <Explanation>
          <span className={TEXT_STYLES.highlight}>시각적 피드백</span>을 통해
          사용자는 진행 상황을 인지할 수 있었고, 그 결과 로딩 구간에서의 사용자
          <span className={TEXT_STYLES.highlight}>
            이탈률을 90% 이상 줄이는 성과
          </span>
          를 거두었습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default UXImprorve;
