import DefaultSection from "@/components/common/DefaultSection";
import { LoadingProvider } from "@/contexts/LoadingContext";
import UXImproveContent from "./UXImproveContent";

const UXImprorve = () => {
  return (
    <DefaultSection
      title="UX 개선"
      description="UX 개선을 통해 사용자 이탈율을 줄였습니다."
    >
      <LoadingProvider>
        <UXImproveContent />
      </LoadingProvider>
      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          문제 상황
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              블록체인 네트워크에 직접 접속하여 데이터를 받아오거나, 트랜잭션
              처리 및 NFT 발행을 수행해야 하는 특성상 데이터 로딩 시간이
              길어지는 문제가 있었습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              로딩이 길어지는 구간에서 사용자 이탈이 빈번하게 발생했으며,
              사용자가 로딩 화면을 단순 렉으로 오인하고 새로고침하거나 페이지를
              이탈했습니다.
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-black/40 py-8 mb-12 rounded-xl space-y-8 w-full px-8">
        <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
          해결 방안
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              스켈레톤 UI를 도입하여 데이터를 불러오는 동안, 화면 구조를 미리
              보여주는방식으로 개선했습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              또한, Overlay를 통해 사용자가 이탈하면 안되는, 로직이 진행되는
              상황임을 인지시켰습니다.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            <p className="text-xl">
              시각적 피드백을 통해 사용자는 진행 상황을 인지할 수 있었고, 그
              결과 로딩 구간에서의 사용자 이탈률을 90% 이상 줄이는 성과를
              거두었습니다.
            </p>
          </li>
        </ul>
      </div>
    </DefaultSection>
  );
};

export default UXImprorve;
