import type { Metadata } from "next";

export const SITE_URL = "https://www.seojuwon.work";
export const SITE_NAME = "서주원";
export const AUTHOR_ROLE = "소프트웨어 개발자";
export const SITE_DESCRIPTION =
  "개발자 서주원의 개인 사이트입니다. 소프트웨어를 만들며 만난 문제와 해결 과정, 배운 점을 기록하고 프로젝트와 이력을 공유합니다.";

// Publish a draft by completing its content, linking it from navigation,
// then setting index to true. The sitemap uses this same registry.
export const SEO_PAGES = {
  "/": {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    index: true,
  },
  "/programming": {
    title: "개발 자료 준비 중 · 서주원",
    description:
      "서주원의 개발 프로젝트 자료를 준비 중입니다. 프로젝트 설명을 다시 정리하고 있습니다.",
    index: false,
  },
  "/programming/rabbit": {
    title: "RABBIT 개발 자료 준비 중 · 서주원",
    description:
      "RABBIT 프로젝트의 개발 자료를 다시 정리하고 있습니다.",
    index: false,
  },
  "/programming/mimo": {
    title: "MIMO 개발 자료 준비 중 · 서주원",
    description:
      "MIMO 프로젝트의 개발 자료를 다시 정리하고 있습니다.",
    index: false,
  },
  "/resume": {
    title: `이력서 준비 중 · ${SITE_NAME}`,
    description: "서주원의 이력서를 다시 정리하고 있습니다.",
    index: false,
  },
  "/programming/classon": {
    title: "ClassOn 개발 자료 준비 중 · 서주원",
    description:
      "ClassOn 프로젝트의 개발 자료를 다시 정리하고 있습니다.",
    index: false,
  },
  "/programming/duduji": {
    title: "두더지 게임 개발 자료 준비 중 · 서주원",
    description:
      "두더지 게임의 개발 자료를 다시 정리하고 있습니다.",
    index: false,
  },
  "/ux": {
    title: "UX/UI 디자인 프로젝트 · 서주원",
    description:
      "서주원의 UX/UI 디자인 프로젝트입니다. RABBIT, Assembly, A7M3 카메라 인터페이스의 기획과 설계 과정을 소개합니다.",
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
    title: "Blog · 서주원",
    description:
      "개발 중 직접 부딪힌 문제와 해결 과정을 기록합니다. 코드와 근거를 바탕으로 배운 점을 나눕니다.",
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
      siteName: SITE_NAME,
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: `${SITE_URL}/profile.webp`,
          width: 400,
          height: 500,
          alt: `${SITE_NAME} 프로필`,
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
