import { DefaultSection } from "@/components/common";
import Retrospect from "@/components/ux/rabbit/Retrospect";

const RabbitRetrospect = () => {
  return (
    <DefaultSection
      title="회고"
      description="프로젝트를 진행하며 느낀 점을 정리했습니다."
    >
      <Retrospect />
    </DefaultSection>
  );
};

export default RabbitRetrospect;
