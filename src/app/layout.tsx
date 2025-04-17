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
        <div className="hidden md:block">
          <Header />
        </div>

        <main className="flex-1 h-fit px-4 py-8 min-h-[700px] max-w-[1440px] mx-auto">
          {children}
        </main>
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <Footer />
      </body>
    </html>
  );
}
