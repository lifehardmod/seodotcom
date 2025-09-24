"use client";

import { NFTSkeleton } from "@/components/ux/rabbit/NFTSkeleton";
import { Skeleton } from "@/components/ux/rabbit/skeleton";
import { useLoading } from "@/contexts/LoadingContext";
import { useState } from "react";

const UXImproveContent = () => {
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
    <div className="w-full h-full flex flex-col p-4 md:p-8 rounded-lg gap-4 md:gap-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* 스켈레톤 UI 데모 섹션 */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6 md:mb-8">
          <div className="flex-shrink-0">
            <NFTSkeleton />
          </div>
          <div className="flex flex-col gap-2 rounded-lg p-4 w-full">
            <div className="flex flex-col gap-2 rounded-lg p-4 w-full">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        </div>
        {/* 로딩 예시 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8 w-full">
          {/* 일반 로딩 스피너 예시 */}
          <div className="bg-black/40 p-4 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              일반 로딩 스피너
            </h3>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg min-h-[200px] flex flex-col items-center justify-center">
              {isLoading1 ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-white text-sm md:text-base">
                    데이터를 불러오는 중...
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <button
                    onClick={handleLoading1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base"
                  >
                    로딩 시작
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 스켈레톤 UI 예시 */}
          <div className="bg-black/40 p-4 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              개선 버전
            </h3>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg min-h-[200px] flex items-center justify-center">
              <button
                onClick={handleStartLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base"
              >
                로딩 시작
              </button>
            </div>
          </div>
        </div>
        {/* 로딩 시작 버튼 */}
      </div>
    </div>
  );
};
export default UXImproveContent;
