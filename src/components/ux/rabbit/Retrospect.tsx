import Image from "next/image";

const STYLES = {
  container: "w-full flex-col flex gap-16",
  title: "text-2xl font-semibold mb-8",
  image: "w-full",
  contentContainer: "mt-8 space-y-6 gap-4 flex flex-col",
  section: "mb-6",
  sectionTitle: "text-xl font-semibold mb-2",
  paragraph: "text-gray-100 leading-relaxed",
  highlight: "text-blue-400 font-medium",
} as const;

const Retrospect = () => {
  return (
    <div className={STYLES.container}>
      <section>
        <h3 className={STYLES.title}>Jira를 통한 프로젝트 일정 관리</h3>
        <div className="relative w-full">
          <Image
            src="/Rabbit/Jira.webp"
            alt="Jira"
            width={1567}
            height={535}
            className="w-full h-auto"
          />
        </div>
        <div className={STYLES.contentContainer}>
          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>프로젝트 일정 관리 방식</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                이번 프로젝트에서는 Jira를 활용하여 일정 관리를 진행하였습니다.
              </span>{" "}
              초기 계획 단계에서 1시간을 1 Story Point로 설정하고, 주 40시간을
              기준으로 업무를 배분하였습니다. 각 이슈를 스스로 설정하여 40시간을
              맞추도록 했기 때문에, 프로젝트를 체계적으로 분할하는 능력을 키울
              수 있었습니다.
            </p>
          </div>

          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>데이터 기반 프로젝트 관리</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                Jira를 사용하면서 가장 좋았던 점은 데이터를 기반으로 프로젝트를
                진행할 수 있었다는 것입니다.
              </span>{" "}
              프로젝트를 수행하다 보면 예상치 못한 문제가 발생하거나 일정이
              지연되는 경우가 종종 있습니다. 이러한 상황에서 팀 간 갈등이 생기기
              쉽지만, Jira를 통해 진행 상황과 이슈를 명확히 관리하다 보니
              불필요한 갈등을 줄일 수 있었습니다.
            </p>
          </div>

          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>스프린트 회고와 분석</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                특히, 스프린트가 완료되지 못한 경우 Week 회고를 통해 원인을
                분석할 수 있었습니다.
              </span>{" "}
              스토리 포인트를 지나치게 타이트하게 설정했는지, 단순히 작업이
              지연되었는지 등을 데이터를 통해 명확히 파악할 수 있었습니다.
              이러한 과정을 통해 진짜 일정 관리의 문제인지, 아니면 개인적인
              책임이 있는지를 구분할 수 있었습니다.
            </p>
          </div>

          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>데이터 기반 소통의 효과</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                데이터를 기반으로 업무를 관리하다 보니, 의견이 갈릴 여지가
                줄어들었습니다.
              </span>{" "}
              단순히 주관적 판단이 아니라 Jira의 이슈 기록을 바탕으로 문제를
              분석하고 해결 방법을 모색할 수 있었습니다. 덕분에 일정 지연이
              발생했을 때도 감정적으로 대응하지 않고, 객관적인 분석을 통해
              팀워크를 유지할 수 있었습니다.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className={STYLES.title}>개발과 디자인의 균형</h3>
        <div className="relative w-full">
          <Image
            src="/Rabbit/seporia.webp"
            alt="Seporia"
            width={1127}
            height={381}
            className="w-full h-auto"
          />
        </div>
        <div className={STYLES.contentContainer}>
          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>
              블록체인을 사용하며 겪은 문제
            </h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                세포리아 테스트넷에 실제 코인을 발행하여 프로젝트를
                진행하였습니다.
              </span>{" "}
              블록체인 네트워크에 데이터를 저장하고 트랜잭션을 처리하는 과정에서
              예상치 못한 문제가 발생했습니다. 특히, 블록체인의 특성상 트랜잭션
              처리 속도를 기술적으로 줄이는 것이 불가능하다는 현실을
              마주했습니다. 평균 10초 이상 소요되는 트랜잭션 처리 시간은 사용자
              경험 측면에서 큰 문제로 다가왔습니다.
            </p>
          </div>
          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>기술적 한계와 디자인적 접근</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                처음에는 기술적으로 문제를 해결하려 했지만, 블록체인 특성상 처리
                시간을 줄이는 것은 사실상 불가능했습니다.
              </span>{" "}
              이때 필요한 것은 기술적 해결이 아니라 디자인적 접근이었습니다.
              따라서 UI/UX 측면에서 문제를 완화하기 위해 스켈레톤 화면과 플로우
              안내 메시지를 추가하여, 사용자가 로딩 중에도 진행 상황을
              직관적으로 이해할 수 있도록 구성했습니다. 이러한 디자인적 접근을
              통해 대기 시간이 길더라도 불편함을 최소화할 수 있었습니다.
            </p>
          </div>
          <div className={STYLES.section}>
            <h4 className={STYLES.sectionTitle}>기술과 디자인의 조화</h4>
            <p className={STYLES.paragraph}>
              <span className={STYLES.highlight}>
                프로젝트를 진행하며, 내가 맡은 분야가 아니더라도 이해해야 한다는
                점을 배웠습니다.
              </span>{" "}
              블록체인을 구현하는 역할은 아니였지만 블록체인 트랜잭션 발행이나
              데이터 조회 같은 기술적인 내용을 깊이 파악하지 못하면, 화면을
              만드는 것도 어려운 일이 될 수 있다고 느꼈습니다. 직접 담당하지
              않는 기술 분야라도, 프로젝트의 전체 맥락에서 어떤 영향을 줄 수
              있는지 충분히 이해해야 한다고 생각했습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retrospect;
