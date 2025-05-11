import Common from "./Common";

const List = () => {
  const TEXT_STYLES = {
    highlight: "text-blue-400 font-semibold",
    normal: " font-light",
  };
  return (
    <div className="w-full">
      <Common
        Image={[
          "/Rabbit/phone/5.webp",
          "/Rabbit/phone/6.webp",
          "/Rabbit/phone/6-1.webp",
        ]}
      />
      <div className="space-y-8 w-full">
        <div className="bg-black/40 p-8 rounded-xl">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">
              3
            </span>
            채무 관리 페이지 설계
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채무 관리 페이지는 서비스 설계에서 가장 중요하게 여겼던{" "}
                <span className={TEXT_STYLES.highlight}>채권자 유입</span>을
                촉진하기 위해 구성하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                채권자가 보유한 채권을 체계적으로 관리할 수 있도록{" "}
                <span className={TEXT_STYLES.highlight}>직관적 UI</span>를
                구현하여, 채권 관리의 편의성을 높였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                특히, <span className={TEXT_STYLES.highlight}>월별 상환액</span>
                과 <span className={TEXT_STYLES.highlight}>상환일</span>을
                한눈에 파악할 수 있도록 시각적으로 표현하여 관리 부담을
                줄였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                상세 페이지에서는 채권의 구체적인 정보를 확인할 수 있으며,{" "}
                <span className={TEXT_STYLES.highlight}>계약서</span>는 분산
                저장된 PDF 형태로 제공하여 필요 시 언제든지 안전하게 열람할 수
                있도록 하였습니다.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 text-xl">•</span>
              <p className={`text-lg leading-relaxed ${TEXT_STYLES.normal}`}>
                이러한 구성은 채권자가 서비스에 지속적으로 유입될 수 있도록
                돕고, <span className={TEXT_STYLES.highlight}>사용자 만족</span>
                을 높이는 데 기여했습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
