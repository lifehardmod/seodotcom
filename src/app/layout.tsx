// import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import MobileNav from "@/components/common/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/common/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FeedbackDialog from "@/components/shared/FeedbackDialog";
export const metadata = {
  title: "SeoJuWon",
  description: "사용자의 흐름을 이해하고 직접 구현하는 프론트엔드 개발자 서주원의 포트폴리오입니다. 프론트엔드 프로젝트를 소개합니다.",
  authors: [{ name: "서주원" }],
  creator: "서주원",
  publisher: "서주원",
  robots: "index, follow",
  alternates: {
    canonical: "https://seojuwon.work",
  },
  openGraph: {
    title: "SeoJuWon",
    description: "사용자의 흐름을 이해하고 직접 구현하는 프론트엔드 개발자 서주원의 포트폴리오입니다. 프론트엔드 프로젝트를 소개합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "SeoJuWon",
    images: [
      {
        url: "https://seojuwon.work/profile.webp", // 또는 실제 이미지 URL
        width: 1200,
        height: 630,
        alt: "SeoJuWon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoJuWon",
    description: "서주원 포트폴리오입니다.",
  },
  verification: {
    google: "mqjx8l72kbaE1-3zoDgN3Cj4mLqywNQ-xmPesIKynLE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "Pretendard, sans-serif" }}>
        <Header />
        <main className="flex-1 w-full h-fit px-4 py-4 max-w-[1440px] mx-auto mt-0 md:mt-28">
          {children}
        </main>
        <FeedbackDialog />
        <MobileNav />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
