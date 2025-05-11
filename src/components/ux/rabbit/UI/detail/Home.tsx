import Common from "./Common";

const Home = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common images={["/Rabbit/phone/1.webp", "/Rabbit/phone/2.webp"]} />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              1
            </span>
            메인 페이지 설계 이유
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                NFT 기반 차용증 거래 서비스의 메인 페이지에는{" "}
                <span className={TEXT_STYLES.highlight}>인터랙티브 UI</span>와{" "}
                <span className={TEXT_STYLES.highlight}>3D Coin</span>을
                활용했습니다. 블록체인과 NFT 기술은 그 자체로 기술적이고
                복잡하여 일반 사용자에게 생소할 수 있습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 특성을 고려하여, 메인 페이지에서{" "}
                <span className={TEXT_STYLES.highlight}>기술적 특성</span>을
                직관적으로 표현하고 강조하기 위해 인터랙티브한 시각 요소를
                사용했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                특히, 3D Coin은{" "}
                <span className={TEXT_STYLES.highlight}>블록체인 상징</span>으로
                활용하여 기술적 특성을 강조했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                또한, 인터랙티브 UI를 통해 사용자가{" "}
                <span className={TEXT_STYLES.highlight}>블록체인 계약</span>을
                보다 쉽게 이해하도록 돕고, 오프라인에서 이루어지던 계약서 작성이
                어떻게 온라인으로 구현될 수 있는지 직관적으로 전달했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 접근은{" "}
                <span className={TEXT_STYLES.highlight}>사용자 관심</span>을
                유도하고{" "}
                <span className={TEXT_STYLES.highlight}>서비스 신뢰성</span>을
                높이는 데 기여했습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
