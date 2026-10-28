import type { Metadata } from "next";

export const SITE_URL = "https://www.seojuwon.work";

// Publish a draft by completing its content, linking it from navigation,
// then setting index to true. The sitemap uses this same registry.
export const SEO_PAGES = {
  "/": {
    title: "서주원 · 프론트엔드 개발자 포트폴리오",
    description:
      "사용자의 흐름을 이해하고 직접 구현하는 프론트엔드 개발자 서주원입니다. React·TypeScript 개발 프로젝트, UX/UI 설계 경험과 이력서를 소개합니다.",
    index: true,
  },
  "/programming": {
    title: "개발 프로젝트 · 서주원",
    description:
      "서주원의 프론트엔드 개발 프로젝트입니다. NFT 차용증 거래 서비스 RABBIT, 모임 관리 서비스 MIMO와 두더지 웹 게임의 구현 경험을 소개합니다.",
    index: true,
  },
  "/programming/rabbit": {
    title: "RABBIT · NFT 차용증 서비스 개발 · 서주원",
    description:
      "React와 TypeScript로 구현한 NFT 기반 차용증 거래 서비스 RABBIT. MSW API 모킹, 반응형 웹, 코드 분할, Zustand 상태 관리와 UX 개선 과정을 정리했습니다.",
    index: true,
  },
  "/programming/mimo": {
    title: "MIMO · 모임 관리 서비스 개발 · 서주원",
    description:
      "모임 생성부터 회비 관리, 실시간 채팅까지 지원하는 MIMO 개발 프로젝트. Storybook, Atomic Design과 중첩 레이아웃을 활용한 UI 구현 경험을 소개합니다.",
    index: true,
  },
  "/resume": {
    title: "이력서 · 프론트엔드 개발자 서주원",
    description:
      "프론트엔드 개발자이자 UX/UI 디자이너 서주원의 이력서입니다. React·TypeScript 기술 역량, 프로젝트 경험, 교육과 자격 사항을 확인할 수 있습니다.",
    index: true,
  },
  "/programming/classon": {
    title: "ClassOn · 교육 ERP 개발 · 서주원",
    description:
      "교사의 수업 운영과 학생의 학습 관리를 통합하는 ClassOn 프로젝트. React·TypeScript 기반 프론트엔드와 UX/UI 디자인 작업을 소개합니다.",
    index: false,
  },
  "/programming/duduji": {
    title: "두더지 게임 · 웹 게임 프로젝트 · 서주원",
    description:
      "사과게임 형식의 두더지 웹 게임 프로젝트입니다. React를 활용한 웹 게임을 외부 서비스에서 직접 플레이할 수 있습니다.",
    index: false,
  },
  "/ux": {
    title: "UX/UI 디자인 프로젝트 · 서주원",
    description:
      "개발과 디자인을 함께 고려한 서주원의 UX/UI 포트폴리오. RABBIT, Assembly, A7M3 카메라 인터페이스 프로젝트를 소개합니다.",
    index: false,
  },
  "/ux/rabbit": {
    title: "RABBIT · UX/UI 디자인 · 서주원",
    description:
      "NFT 기반 차용증 거래 서비스 RABBIT의 기획, 디자인 시스템, 화면 설계와 회고입니다. 거래 흐름과 반응형 인터페이스를 살펴볼 수 있습니다.",
    index: false,
  },
  "/ux/assembly": {
    title: "Assembly · 데스크탑 추천 UX/UI · 서주원",
    description:
      "사용자에게 맞는 데스크탑 조립을 돕는 Assembly의 UX/UI 디자인 프로젝트입니다. 모바일 서비스의 화면 구성과 프로토타입을 소개합니다.",
    index: false,
  },
  "/ux/a7m3": {
    title: "A7M3 · 카메라 인터페이스 개선 · 서주원",
    description:
      "A7M3 카메라 조작의 불편함을 개선하기 위한 UI 디자인 프로젝트입니다. 카메라 인터페이스 개선안과 프로토타입을 살펴볼 수 있습니다.",
    index: false,
  },
  "/blog": {
    title: "블로그 준비 중 · 서주원",
    description:
      "서주원의 개발 블로그를 준비하고 있습니다. 현재 공개된 개발 프로젝트와 이력서는 포트폴리오 메뉴에서 확인할 수 있습니다.",
    index: false,
  },
} as const;

export type PagePath = keyof typeof SEO_PAGES;

export function pageMetadata(path: PagePath): Metadata {
  const page = SEO_PAGES[path];
  const url = new URL(path, SITE_URL).href;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: page.index, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "서주원 포트폴리오",
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: `${SITE_URL}/profile.webp`,
          width: 400,
          height: 500,
          alt: "프론트엔드 개발자 서주원",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
      images: [`${SITE_URL}/profile.webp`],
    },
  };
}
