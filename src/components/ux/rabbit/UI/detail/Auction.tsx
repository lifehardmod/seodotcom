import Common from "./Common";

const Auction = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common Image={["/Rabbit/phone/11.webp", "/Rabbit/phone/11-1.webp"]} />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              5
            </span>
            경매 리스트 페이지 설계
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                경매 리스트 페이지는 채권 구매자가 원하는 채권을{" "}
                <span className={TEXT_STYLES.highlight}>직관적 선택</span>할 수
                있도록 구성하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채권 구매 경험이 있는 사용자 피드백을 반영하여,{" "}
                <span className={TEXT_STYLES.highlight}>중요 정보</span>를
                우선적으로 배치했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                특히, <span className={TEXT_STYLES.highlight}>채권 가격</span>과{" "}
                <span className={TEXT_STYLES.highlight}>이자율</span>을 가장
                먼저 표시하여 수익성을 직관적으로 파악할 수 있도록 했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 정보 위계 구성을 통해 구매자가{" "}
                <span className={TEXT_STYLES.highlight}>수익 기댓값</span>을
                명확히 인지할 수 있으며, 구매 결정을 유도할 수 있도록
                설계하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                또한, <span className={TEXT_STYLES.highlight}>필터</span>를
                제공하여 사용자가 자신에게 적합한 채권을 손쉽게 찾을 수 있도록
                하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 구조를 통해{" "}
                <span className={TEXT_STYLES.highlight}>구매 편의성</span>을
                높이고, <span className={TEXT_STYLES.highlight}>신뢰성</span>을
                강조하여 플랫폼 참여율을 향상시켰습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Auction;
