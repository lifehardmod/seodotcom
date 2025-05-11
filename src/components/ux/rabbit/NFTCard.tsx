"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type DummyNFTData = {
  auctionId: string;
  nftImageUrl: string;
  endDate: string;
  price: number;
  la: number;
  ir: number;
  createdAt: string;
  repayType: string;
  totalAmount: number;
  matDt: string;
  dir: number;
  earlypayFee: number;
  creditScore: number;
  defCnt: number;
};

const dummyData: DummyNFTData = {
  auctionId: "1",
  nftImageUrl: "/NFT.png",
  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  price: 1000000,
  la: 500000,
  ir: 5,
  createdAt: new Date().toISOString(),
  repayType: "일시상환",
  totalAmount: 1500000,
  matDt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  dir: 10,
  earlypayFee: 2,
  creditScore: 750,
  defCnt: 0,
};

function useCountdown(endDate: string): string {
  const [time, setTime] = useState("00일 00분 00초");

  useEffect(() => {
    const calculateTimeLeft = (): string => {
      const end = new Date(endDate).getTime();
      const now = new Date().getTime();
      const difference = end - now;

      if (difference <= 0) {
        return "00일 00분 00초";
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${String(days).padStart(2, "0")}일 ${String(hours).padStart(
        2,
        "0"
      )}분 ${String(seconds).padStart(2, "0")}초`;
    };

    setTime(calculateTimeLeft());
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return time;
}

type NFTCardProps = {
  item?: DummyNFTData;
};

export const NFTCard = ({ item = dummyData }: NFTCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const countdown = useCountdown(item.endDate);

  return (
    <div className="group bg-black-glass border-white-glass shadow-glow z-10 flex h-fit w-[326px] flex-col items-center gap-3 rounded-lg border px-3 pt-4 pb-7 md:w-[300px] 2xl:w-[326px]">
      <div className="relative h-full w-full rounded-sm">
        <NFTCardInfo item={item} className="z-10 bg-gray-900" />
        <div className="relative h-[300px] w-full overflow-hidden rounded-sm">
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-700" />
          )}
          <img
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            src={item.nftImageUrl}
            alt="NFT"
            className={cn(
              "h-full w-full object-cover transition-opacity duration-500",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>

      <span className="flex w-fit justify-center gap-2 text-[18px]">
        경매 종료까지
        <div className="w-fit justify-center">{countdown}</div>
      </span>
      <div className="bg-radial-accent flex w-full flex-col items-center gap-1 rounded-sm px-4 py-3">
        <span className="font-semibold">현재 입찰가</span>
        <div>
          <span
            className={cn(
              "text-brand-gradient font-partial",
              item.price.toString().length < 10 ? "text-xl" : "text-base"
            )}
          >
            {item.price.toLocaleString()} ₩
          </span>
        </div>
        <div className="font-bit mt-3 flex w-full justify-between text-sm">
          <div className="items-cen flex flex-col">
            <span>원금</span>
            <div>
              <span>{item.la.toLocaleString()}</span>
              <span className="text-brand-primary">₩</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span>이자율</span>
            <span>{item.ir}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NFTcardInfoProps {
  className?: string;
  item: DummyNFTData;
}

export const NFTCardInfo = ({ className, item }: NFTcardInfoProps) => {
  return (
    <div
      className={cn(
        "absolute flex h-full w-full flex-col justify-between px-6 py-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ",
        className
      )}
    >
      <div className="flex justify-between">
        <span>최초 등록일</span>
        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="flex justify-between">
        <span>종류</span>
        <span>{item.repayType}</span>
      </div>
      <div className="flex justify-between">
        <span>만기 수취액</span>
        <div>
          <span>{item.totalAmount.toLocaleString()} ₩</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>만기일</span>
        <span>{new Date(item.matDt).toLocaleDateString()}</span>
      </div>
      <div className="flex justify-between">
        <span>연체 이자율</span>
        <div>
          <span>{item.dir}</span>%
        </div>
      </div>
      <div className="flex justify-between">
        <span>중도 상환 수수료</span>
        <span>{item.earlypayFee}%</span>
      </div>
      <div className="flex justify-between">
        <span>신용 점수</span>
        <span>{item.creditScore}</span>
      </div>
      <div className="flex justify-between">
        <span>연체</span>
        <span>{item.defCnt}</span>
      </div>
    </div>
  );
};
