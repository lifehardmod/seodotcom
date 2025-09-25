import {
  ExplanationLayout,
  Explanation,
  DefaultSection,
} from "@/components/common";
import { TEXT_STYLES } from "@/constant/util";
import Image from "next/image";
import { Star, StarHalf, User2 } from "lucide-react";

const Tag = () => {
  return (
    <div className="text-md border-blue-800 text-blue-600 h-fit w-fit rounded-sm border bg-white px-[6px] py-[2px] font-semibold whitespace-nowrap">
      태그
    </div>
  );
};

const RatingStar = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Star key="star-full-1" type="svg" id="Star" fill="orange" />
        <Star key="star-full-2" type="svg" id="Star" fill="orange" />
        <Star key="star-full-3" type="svg" id="Star" fill="orange" />
        <Star key="star-full-4" type="svg" id="Star" fill="orange" />
        <StarHalf key="star-half-5" type="svg" id="Star-Half" fill="orange" />
      </div>
      <span className={`text-md font-extrabold ${className}`}>
        {(4.5).toFixed(1)}
      </span>
    </div>
  );
};

const MemberCount = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-fit w-fit rounded-sm border-[1px] border-gray-500 bg-white px-2 py-1 ${className}`}
    >
      <div className="flex gap-1 items-center justify-center">
        <User2 name="User" fill="gray" width={20} height={20} />
        <div className="flex items-center text-sm font-semibold text-gray-700">
          {20}/{50}
        </div>
      </div>
    </div>
  );
};

const Thumbnail = () => {
  return (
    <div className="relative flex h-[11.25rem] w-[21.5rem] flex-col items-center justify-end rounded-2xl bg-gray-200">
      <Image
        src="/profile.webp"
        width={344}
        height={112.5}
        alt="profile"
        className="h-[11.25rem] w-[21.5rem] object-cover"
      />

      <MemberCount className="absolute bottom-4 right-3.5" />
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex h-[330px] w-[344px] flex-col gap-2 overflow-hidden rounded-2xl bg-white">
      {/* 카드의 클릭 영역: 썸네일, 제목, 내용 등이 포함 */}
      <div className="flex flex-col gap-2">
        <Thumbnail />
        <div className="flex flex-col gap-1 px-3">
          <div className="flex gap-1">
            <RatingStar className="text-black" />
          </div>
          <div className="text-lg font-extrabold text-black">
            모임 제목입니다.
          </div>
          <div className="text-md truncate font-normal text-black">
            모임 설명이 들어가는 부분입니다.
          </div>
        </div>
      </div>

      {/* 태그 영역: 각 태그는 개별 Link로 이동 */}
      <div className="flex gap-2 px-3 pb-2">
        <Tag />
      </div>
    </div>
  );
};

const ListContainer = () => {
  return (
    <div className="flex w-full flex-col gap-6 p-4">
      <div className="text-2xl flex h-fit w-fit gap-1 font-bold text-white">
        <span className="flex items-center">동네 근처 모임</span>
        <span className="font-normal">{">"}</span>
      </div>
      <section>
        <div className="flex gap-4 w-full overflow-x-auto flex-nowrap">
          <div className="flex-shrink-0">
            <Card />
          </div>
          <div className="flex-shrink-0">
            <Card />
          </div>
          <div className="flex-shrink-0">
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};

const AtomicDesign = () => {
  return (
    <DefaultSection
      title="Atomic Design"
      description="Atomic Design를 이용해 컴포넌트를 단위별로 개발하였습니다."
    >
      <div className="flex flex-col gap-16 sm:gap-6 mt-16">
        <div className="bg-black/40 sm:p-8 rounded-xl space-y-8 w-full">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            Atom 예시
          </h4>
          <div className="flex gap-2">
            <MemberCount /> <RatingStar /> <Tag />
          </div>
        </div>
        <div className="bg-black/40 sm:p-8 rounded-xl space-y-8 w-full">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            Molecule 예시
          </h4>
          <div className="flex gap-2">
            <Card />
          </div>
        </div>
        <div className="bg-black/40 sm:p-8 rounded-xl space-y-8 w-full">
          <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
            Organism 예시
          </h4>
          <ListContainer />
        </div>
      </div>
      <ExplanationLayout title="Atomic Design 사용 이유">
        <Explanation>
          UI를 <span className={TEXT_STYLES.highlight}>작은 단위부터 구성</span>
          하여 재사용성을 극대화하고, 컴포넌트 설계를 체계적으로 관리하기 위해
          도입했습니다.
        </Explanation>
        <Explanation>
          디자인 시스템과 코드의 일관성을 유지하고, 팀 단위 개발 시{" "}
          <span className={TEXT_STYLES.highlight}>
            협업 효율성을 높이기 위해
          </span>{" "}
          Atomic Design을 적용했습니다. (협업시 컴포넌트 구조를 이해하기 쉽다고
          생각됨)
        </Explanation>
      </ExplanationLayout>

      <ExplanationLayout title="성과">
        <Explanation>
          컴포넌트 단위 재사용이 용이해져, 새로운 페이지나 기능 추가 시 개발
          속도가 <span className={TEXT_STYLES.highlight}>단축</span>
          되었습니다.
        </Explanation>
        <Explanation>
          유지보수 과정에서{" "}
          <span className={TEXT_STYLES.highlight}>같은 UI 요소</span>를 여러
          곳에서 반복해서 쓰더라도 중앙에서 한 번만 수정하면 전체 반영되어{" "}
          <span className={TEXT_STYLES.highlight}>유지보수 속도</span>가
          빨라졌습니다.
        </Explanation>
        <Explanation>
          <span className={TEXT_STYLES.highlight}>디자인과 레이아웃</span>이
          통일되어 <span className={TEXT_STYLES.highlight}>UX 일관성</span>이
          확보되었습니다.
        </Explanation>
        <Explanation>
          <span className={TEXT_STYLES.highlight}>StoryBook</span>과 함께
          사용하여,{" "}
          <span className={TEXT_STYLES.highlight}>Props 조합 테스트</span>가
          용이했고,
          <span className={TEXT_STYLES.highlight}>작은 단위 컴포넌트</span>를
          합쳐 <span className={TEXT_STYLES.highlight}>통합 테스트</span>
          하는 과정도 효율적으로 수행할 수 있었습니다.
        </Explanation>
      </ExplanationLayout>
      <ExplanationLayout title="단점">
        <Explanation>
          컴포넌트를 원자 단위로 쪼개고 구조를 체계화하는 초기 설계 단계와
          Markup에서 많은 시간이 소요되었습니다.
        </Explanation>
        <Explanation>
          중앙에서 한 번만 수정하면 전체 반영되는 방식이 긍정적으로 사용될 때는
          간편했지만, 많은 연결 요소에서 수정이 필요할 때는 번거로웠습니다.
        </Explanation>
        <Explanation>
          초기 폴더 구조 설계를 잘못해, Component 아래에 atoms, molecules,
          organisms 폴더를 생성하여 모든 컴포넌트를 넣다 보니, 컴포넌트가
          증가할수록 관리가 복잡해졌습니다.
        </Explanation>
      </ExplanationLayout>
    </DefaultSection>
  );
};

export default AtomicDesign;
