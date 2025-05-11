"use client";
import { Skeleton } from "../skeleton";
import { NFTSkeleton } from "../NFTSkeleton";
import PageTitle from "./PageTitle";
import { useLoading } from "@/contexts/LoadingContext";
import SignatureLoader from "../SignatureLoader";
import { useState } from "react";

const TEXT_STYLES = {
  highlight: "text-blue-400 font-semibold",
  normal: "text-white font-medium",
};

const Page3 = () => {
  const { startLoading } = useLoading();
  const [isLoading1, setIsLoading1] = useState(false);

  const handleStartLoading = () => {
    startLoading([
      "차용증 거래 처리 중...",
      "블록체인 네트워크 확인 중...",
      "거래 정보 검증 중...",
      "잠시만 기다려주세요...",
    ]);
  };

  const handleLoading1 = () => {
    setIsLoading1(true);
    setTimeout(() => setIsLoading1(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col p-8 rounded-lg gap-8">
      <PageTitle
        title="스켈레톤 디자인 및 로딩 최적화"
        subtitle="사용자가 데이터 로딩을 자연스럽게 받아들일 수 있도록 구현"
      />

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* 스켈레톤 UI 데모 섹션 */}
        <div className="w-full flex flex-row space-y-6 justify-between gap-10">
          <NFTSkeleton />
          <div className="flex flex-col gap-2 rounded-lg p-4 w-full">
            <div className="flex flex-col gap-2 rounded-lg p-4 w-full">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
            <SignatureLoader />
          </div>
        </div>
        {/* 로딩 예시 섹션 */}
        <div className="grid grid-cols-2 gap-8 mb-8 w-full ">
          {/* 일반 로딩 스피너 예시 */}
          <div className="bg-black/40 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">
              일반 로딩 스피너
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg min-h-[200px] flex flex-col items-center justify-center">
              {isLoading1 ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-white">데이터를 불러오는 중...</p>
                </div>
              ) : (
                <div className="text-center">
                  <button
                    onClick={handleLoading1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    로딩 시작
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 스켈레톤 UI 예시 */}
          <div className="bg-black/40 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">개선 버전</h3>
            <div className="bg-gray-800 p-6 rounded-lg min-h-[200px] flex items-center justify-center">
              <button
                onClick={handleStartLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                로딩 시작
              </button>
            </div>
          </div>
        </div>
        {/* 로딩 시작 버튼 */}
        {/* 문제 상황 및 해결 방안 섹션 */}
        <div className="space-y-8">
          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center mr-4 text-lg">
                1
              </span>
              문제 상황
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-blue-100 mr-3 text-xl">•</span>
                <p className={`text-lg leading-8 ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>
                    블록체인 네트워크
                  </span>
                  에 직접 접속하여{" "}
                  <span className={TEXT_STYLES.highlight}>
                    데이터를 받아오거나, 트랜잭션 처리 및 NFT 발행
                  </span>
                  을 수행해야 하는 특성상{" "}
                  <span className={TEXT_STYLES.highlight}>
                    데이터 로딩 시간이 길어지는
                  </span>{" "}
                  문제가 있었습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-100 mr-3 text-xl">•</span>
                <p className={`text-lg leading-8 ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>Sentry 로깅</span>{" "}
                  결과, 로딩이 길어지는 구간에서{" "}
                  <span className={TEXT_STYLES.highlight}>
                    사용자 이탈이 빈번하게 발생
                  </span>
                  했으며, 사용자가 로딩 화면을 단순 렉으로 오인하고
                  새로고침하거나 페이지를 이탈했습니다.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-8 rounded-xl">
            <h4 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <span className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center mr-4 text-lg">
                2
              </span>
              해결 방안
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-blue-100 mr-3 text-xl">•</span>
                <p className={`text-lg leading-8 ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>스켈레톤 UI</span>를
                  도입하여 데이터를 불러오는 동안,
                  <span className={TEXT_STYLES.highlight}>
                    {" "}
                    화면 구조를 미리 보여주는
                  </span>
                  방식으로 개선했습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-100 mr-3 text-xl">•</span>
                <p className={`text-lg leading-8 ${TEXT_STYLES.normal}`}>
                  <span className={TEXT_STYLES.highlight}>시각적 피드백</span>을
                  통해 사용자는{" "}
                  <span className={TEXT_STYLES.highlight}>
                    진행 상황을 인지
                  </span>
                  할 수 있었고, 그 결과 로딩 구간에서의 사용자 이탈률을{" "}
                  <span className={TEXT_STYLES.highlight}>90% 이상</span> 줄이는
                  성과를 거두었습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
