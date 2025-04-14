import { pretendard } from "@/app/fonts/pretendard";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "SeoJuWon.com",
  description: "서주원 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} antialiased max-w-[1440px] mx-auto`}
      >
        <Header />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
