import { NFTCard } from "../NFTCard";
import PageTitle from "./PageTitle";

const TEXT_STYLES = {
  highlight: "text-blue-400 font-semibold",
  normal: " font-light",
};

const Page1 = () => {
  return (
    <div className="w-full h-full flex flex-col p-8 rounded-lg gap-8">
      <PageTitle
        title="NFT Card 컴포넌트"
        subtitle="차용증을 구매하는 사용자에게 친화적인 데이터를 제공합니다."
      />
      <div className="flex-1 flex flex-col items-center justify-center gap-16">
        <NFTCard />
        <div className="space-y-8 w-full">
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
                1
              </span>
              은행 실무진 인터뷰를 통해 얻은 인사이트
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  프로젝트 진행 중 두 차례에 걸쳐 은행 실무진과 인터뷰를
                  진행하여{" "}
                  <span className={TEXT_STYLES.highlight}>
                    실현 가능성, 문제점, 기획적 측면
                  </span>
                  을 점검했습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  인터뷰를 통해 도출된 핵심 과제는{" "}
                  <span className={TEXT_STYLES.highlight}>
                    "대출자를 어떻게 모을 것인가"
                  </span>
                  였습니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
                2
              </span>
              핵심 과제 도출
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>
                    대출자가 플랫폼을 신뢰하고 참여
                  </span>
                  하도록 하기 위해,{" "}
                  <span className={TEXT_STYLES.highlight}>
                    대출 자산의 현금화 용이성과 채무 관리의 편리성
                  </span>
                  을 최우선으로 고려했습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>
                    채권을 구매해본 사용자
                  </span>{" "}
                  피드백을 반영하여 어떤 것이{" "}
                  <span className={TEXT_STYLES.highlight}>
                    채권 구매자에게 중요한지
                  </span>{" "}
                  파악했습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              디자인 의도
            </h4>
            <ul className="space-y-4 ">
              <li className="flex items-start w-full">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  채권을 구매해본 사용자 피드백을 반영하여,{" "}
                  <span className={TEXT_STYLES.highlight}>
                    현재 채권의 가격
                  </span>
                  과 <br />
                  <span className={TEXT_STYLES.highlight}>이자율</span>을 먼저
                  표현하여 수익의 기댓값을 표현했습니다.
                </p>
              </li>
              <li className="flex items-start w-full">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  직관적인 정보 구성을 통해{" "}
                  <span className={TEXT_STYLES.highlight}>신뢰도를 강화</span>
                  하고,
                  <br />
                  <span className={TEXT_STYLES.highlight}>구매를 유도</span>할
                  수 있는 구조로 설계했습니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              기대 효과
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  핵심 정보의 시각적 강조를 통해 구매자의 참여 유도
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">•</span>
                <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                  투명한 정보 제공으로 플랫폼 신뢰도 향상
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
