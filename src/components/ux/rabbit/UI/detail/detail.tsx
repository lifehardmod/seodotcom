import Common from "./Common";

const Detail = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common images={["/Rabbit/phone/10.webp", "/Rabbit/phone/10-1.webp"]} />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              4
            </span>
            채권 상세 페이지 설계
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채권 상세 페이지는{" "}
                <span className={TEXT_STYLES.highlight}>모든 정보</span>를
                한눈에 확인하고 입찰할 수 있도록 구성하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                블록체인 네트워크에 직접 접속하여{" "}
                <span className={TEXT_STYLES.highlight}>데이터 조회</span>
                함으로써 정보의 신뢰성을 확보했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                블록체인 데이터 조회에{" "}
                <span className={TEXT_STYLES.highlight}>10초</span>가 소요되는
                문제를 해결하기 위해,{" "}
                <span className={TEXT_STYLES.highlight}>정보 우선순위</span>를
                재배치했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                블록체인 조회 정보는{" "}
                <span className={TEXT_STYLES.highlight}>페이지 하단</span>에
                배치하고, 사용자가 다른 주요 정보를 먼저 확인할 수 있도록
                설계했습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 구조를 통해{" "}
                <span className={TEXT_STYLES.highlight}>자연스러운 탐색</span>이
                가능하며, 블록체인 데이터 조회 대기 시간을 효과적으로 보완할 수
                있었습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
