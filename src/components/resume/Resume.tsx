import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import ResumeItem from "./ResumeItem";
import ResumeCategory from "./ResumeCategory";
import Image from "next/image";
const Resume = () => {
  return (
    <section className="bg-white w-full max-w-4xl h-full py-8 px-12 pb-20 text-black">
      <h1 className="text-black text-center font-bold text-3xl">이력서</h1>
      {/* 본문 감싸기*/}
      <div className="flex flex-col gap-16">
        {/* 상단임 이름, 프로필 이미지, 소개, 연락처 */}
        <div className="flex flex-row justify-between">
          {/* 이름, 프로필 이미지, 소개 (왼쪽)*/}
          <div className="flex flex-row justify-start items-end gap-2 -ml-5">
            <Image
              src="/profile.webp"
              alt="profile"
              className="rounded-full w-40 h-40"
              width={500}
              height={500}
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-black text-center font-bold text-2xl">
                서주원
              </span>
              <div className="flex flex-col text-gray-900 pt-1">
                <span className="text-lg font-medium">
                  UX/UI 디자이너, 프론트엔드 개발자
                </span>
                <span className="text-lg font-light text-gray-600 -mt-1">
                  1998.02.07 (만 27세)
                </span>
              </div>
            </div>
          </div>
          {/* 연락처 및 소셜 미디어 (오른쪽) */}
          <div className="flex flex-col items-end justify-end text-gray-600">
            <a
              href="https://github.com/lifehardmod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <span>lifehardmod</span>
              <FaGithub />
            </a>
            <div className="flex items-center gap-2">
              <span>010-2272-3062</span>
              <FaPhone />
            </div>
            <div className="flex items-center gap-2">
              <span>tjwndnjs7@naver.com</span>
              <FaEnvelope />
            </div>
          </div>
        </div>
        {/* 중단 진입부임 경력사항, 학력, 자격사항, 프로젝트 */}
        <div className="flex flex-row items-start justify-center gap-12">
          {/*왼쪽 부분*/}
          <div className="flex flex-col gap-12 flex-1">
            {/* 학력 */}
            <ResumeCategory title="학력">
              <ResumeItem
                title="중앙대학교 예술대학 디자인학부 시각디자인 전공 졸업"
                date="2018.03 ~ 2024.02"
                content="평점 평균 4.06 / 4.5"
              />
              <ResumeItem
                title="소하고등학교 졸업"
                date="2013.03 - 2016.02"
                content="인문 계열"
              />
            </ResumeCategory>
            {/* 수상 및 자격 */}
            <ResumeCategory title="수상 및 자격 사항">
              <ResumeItem
                title="SQL Developer"
                date="2024.12"
                content="한국데이터산업진흥원"
              />
              <ResumeItem
                title="삼성 청년 SW 아카데미 프로젝트 우수상"
                date="2024.11.29"
                content="생성형 AI를 이용한 운동 및 식단 자동 추천 서비스"
                extra="수여기관 삼성전자주식회사"
              />
            </ResumeCategory>
            {/* 교내 활동 */}
            <ResumeCategory title="교내 활동">
              <ResumeItem
                title="학과 영상 동아리 '5501' 활동"
                date="2018.03 - 2022.07"
                content="중앙대학교 시각디자인 전공 재학 중, 학과 영상 동아리 활동에 참여하여 모션 그래픽 작업물을 공유하고 상호 피드백을 주고받으며 인사이트를 쌓았습니다. 이후에는 후배들을 대상으로 모션 그래픽 교육을 진행하였습니다."
              />
              <ResumeItem
                title="중앙대학교 디자인 봉사단"
                date="2021.09 - 2021.12"
                content="봉사 활동의 일환으로 학교 프로그램 및 각종 홍보물 제작에 참여하였습니다. 중앙대학교 사회봉사단 로고 및 식당 메뉴판 등을 디자인 하였습니다."
              />
            </ResumeCategory>
          </div>
          {/*오른쪽 부분*/}
          <div className="flex flex-col gap-12 flex-1">
            {/* 교육 사항 */}
            <ResumeCategory title="교육">
              <ResumeItem
                title="삼성 청년 SW 아카데미"
                date="2024.07 ~ 2025.06"
                content="JAVA 트랙을 수강하며 개발 역량을 체계적으로 쌓았고, 동시에 UX/UI 설계와 프론트엔드 구현을 직접 수행하였습니다. 디자인과 개발 양측의 관점을 모두 경험함으로써, 설계가 코드로 구현되는 과정을 실제로 체감하였고, 개발 관점에서 디자인이 어떤 제약과 기회를 갖는지에 대한 현실적인 이해를 갖게 되었습니다."
              />
            </ResumeCategory>
            {/* 대외 활동 */}
            <ResumeCategory title="대외 활동">
              <ResumeItem
                title="광명시 청년 위원회 2기 위원, 3기 위원장 위촉"
                date="2021.07.03 ~ 2025.07.02"
                content="현재 청년 정책 자문 활동을 하는 위원회에서 청년 위원장으로 활동 중입니다. 광명시 청년들의 실제 필요를 반영한 정책을 제안하고, 행정 담당자 및 다양한 이해관계자들과 협의하는 과정을 통해 의견을 설득력 있게 전달하고, 서로 다른 입장을 조율하는 커뮤니케이션 역량을 기르고 있습니다."
              />
              <ResumeItem
                title="컴투스 대학생 서포터즈"
                date="2023.07 ~ 2023.12"
                content="컴투스 채용 유튜브 채널의 영상을 기획·촬영·편집하였습니다. V-log, 정보성 콘텐츠, 예능 기획 등 다양한 포맷을 다뤘습니다. 활동을 통해 다양한 이해관계자와 커뮤니케이션하며 업무를 분담하여 하나의 목표를 이루는 방법을 배웠습니다."
              />
              <ResumeItem
                title="광명시 청년생각펼침 공모사업 ‘디자이너’ 팀 선정"
                date="2022.05"
                content="디자인을 전공하는 학생들에게 경제적인 도움을 주기 위해, 직접 팀을 만들어, 공모사업에 지원하여 선정되었습니다. 팀장 및 회계의 역할로, 기획서 및 성과 보고서를 작성하였습니다."
              />
              <ResumeItem
                title="광명시 청년성과발굴형 공모사업 ‘스포티파이’ 팀 선정"
                date="2021.05"
                content="청년 주거 문제 해결을 위한 공모사업에 참여하였으며, 디자이너로서 기획, 제작, 보고서 작성 등 실무를 담당하였습니다."
              />
            </ResumeCategory>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
