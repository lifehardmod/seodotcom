import Common from "./Common";

const Sell = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common
        Image={[
          "/Rabbit/phone/9.webp",
          "/Rabbit/phone/9-1.webp",
          "/Rabbit/phone/9-2.webp",
        ]}
      />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              4
            </span>
            채권 판매 페이지 설계
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채권 판매 페이지는 채권자가 보유한 채권을{" "}
                <span className={TEXT_STYLES.highlight}>현금화</span>할 수
                있도록 경매를 생성하는 데 중점을 두었습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채권자는 보유 채권의 정보를 확인하고,{" "}
                <span className={TEXT_STYLES.highlight}>만기 수취액</span>과{" "}
                <span className={TEXT_STYLES.highlight}>시작 금액</span>을
                비교하여 경매를 등록할 수 있도록 구성하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 구조를 통해 채권자는 채권의 가치와 시작 금액을{" "}
                <span className={TEXT_STYLES.highlight}>직관적 비교</span>하며
                경매를 설정할 수 있어 판매 결정이 용이합니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                또한, <span className={TEXT_STYLES.highlight}>절차 간소화</span>
                를 통해 채권자가 신속하게 판매를 진행할 수 있도록
                설계하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이 페이지를 통해 채권자에게{" "}
                <span className={TEXT_STYLES.highlight}>유연한 현금화</span>를
                제공하여 서비스 이용률을 높이는 효과를 기대할 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sell;
