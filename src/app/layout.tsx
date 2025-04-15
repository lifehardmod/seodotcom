import { pretendard } from "@/fonts/pretendard";
import Footer from "@/components/common/Footer";
import Header from "@/app/components/Header";
import "@/styles/globals.css";

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
      <body className={`${pretendard.variable} antialiased`}>
        <Header />
        <main className="flex-1 h-fit px-4 py-8 min-h-[700px] max-w-[1440px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
