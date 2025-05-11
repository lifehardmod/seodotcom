import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import MobileNav from "@/components/common/MobileNav";

export const metadata = {
  title: "SeoJuWon",
  description: "서주원 포트폴리오입니다.",
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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
