"use client";

import Auction from "./detail/Auction";
import Detail from "./detail/detail";
import Home from "./detail/Home";
import List from "./detail/List";
import Sell from "./detail/Sell";
import Write from "./detail/Write";
import PageTitle from "./PageTitle";
import ResponsiveTabsWithScroll from "./ResponsiveTabsWithScroll";

const Page4 = () => {
  const tabs = [
    {
      id: 0,
      label: "Home",
      imageUrl: "/Rabbit/desktop/main.webp",
      scale: 1.5,
      detail: <Home />,
    },
    {
      id: 1,
      label: "차용증 작성",
      imageUrl: "/Rabbit/desktop/차용증작성.webp",
      scale: 1.2,
      detail: <Write />,
    },
    {
      id: 2,
      label: "나의 채무 리스트",
      imageUrl: "/Rabbit/desktop/나의채무리스트.webp",
      scale: 1.3,
      detail: <List />,
    },
    {
      id: 3,
      label: "차용증 판매",
      imageUrl: "/Rabbit/desktop/판매.webp",
      scale: 1.4,
      detail: <Sell />,
    },
    {
      id: 4,
      label: "차용증 경매",
      imageUrl: "/Rabbit/desktop/차용증.webp",
      scale: 1.2,
      detail: <Auction />,
    },
    {
      id: 5,
      label: "차용증 상세",
      imageUrl: "/Rabbit/desktop/차용증상세.webp",
      scale: 1.5,
      detail: <Detail />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-8 rounded-lg gap-8">
      <PageTitle
        title="상세 페이지"
        subtitle="채권, 채무 계약부터 거래까지의 플로우를 구성하였습니다."
      />
      <div className="flex-1 flex flex-col items-center justify-center gap-16">
        <div className="w-full space-y-6">
          <ResponsiveTabsWithScroll tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Page4;
