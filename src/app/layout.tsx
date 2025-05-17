// import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import MobileNav from "@/components/common/MobileNav";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: "SeoJuWon",
  description: "서주원 포트폴리오입니다.",
  keywords: [
    "포트폴리오",
    "개발자",
    "프론트엔드",
    "웹 개발",
    "서주원",
    "UX/UI",
    "서주원닷컴",
    "seojuwon",
  ],
  authors: [{ name: "서주원" }],
  creator: "서주원",
  publisher: "서주원",
  robots: "index, follow",
  openGraph: {
    title: "SeoJuWon",
    description: "서주원 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "SeoJuWon",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoJuWon",
    description: "서주원 포트폴리오입니다.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "mqjx8l72kbaE1-3zoDgN3Cj4mLqywNQ-xmPesIKynLE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "Pretendard, sans-serif" }}>
        <div className="hidden md:flex justify-center fixed top-0 left-0 right-0 z-50 items-center shadow-xl shadow-black bg-black">
          <Header />
        </div>
        <main className="flex-1 w-full h-fit px-4 py-4 max-w-[1440px] mx-auto mt-0 md:mt-28">
          {children}
        </main>
        <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
          <MobileNav />
        </div>
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
