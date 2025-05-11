import Common from "./Common";

const Write = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common
        images={[
          "/Rabbit/phone/2.webp",
          "/Rabbit/phone/3.webp",
          "/Rabbit/phone/4.webp",
        ]}
      />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              2
            </span>
            차용증 작성과 계약 페이지 설계
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                블록체인 기반 차용증 거래 서비스 특성상,{" "}
                <span className={TEXT_STYLES.highlight}>신뢰</span>와{" "}
                <span className={TEXT_STYLES.highlight}>편리성</span>이
                중요했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                법무사로부터 법적 조언을 받아{" "}
                <span className={TEXT_STYLES.highlight}>필수 사항</span>과{" "}
                <span className={TEXT_STYLES.highlight}>선택 사항</span>을
                명확히 구분하여 구성하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                해당 계약서가{" "}
                <span className={TEXT_STYLES.highlight}>법적 효력</span>을
                가지도록 설계하여 사용자들이 안전하고 신뢰할 수 있는 계약을
                체결할 수 있도록 하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                특히, 사용자가 잘못된 계약을 작성하지 않도록{" "}
                <span className={TEXT_STYLES.highlight}>이자율</span>과{" "}
                <span className={TEXT_STYLES.highlight}>상환 방법</span> 등 주요
                법적 요소를 검토하고 반영했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이를 통해 복잡한 법적 요소를 사용자가 쉽게 이해할 수 있도록
                돕고, <span className={TEXT_STYLES.highlight}>신뢰성</span>을
                제공하였습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Write;
