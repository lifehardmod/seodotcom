import Header from "@/components/common/Header";
import "@/styles/globals.css";
import MobileNav from "@/components/common/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/common/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FeedbackDialog from "@/components/shared/FeedbackDialog";
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/seo";
import pretendard from "@/lib/fonts/common";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "서주원 포트폴리오",
  authors: [{ name: "서주원" }],
  creator: "서주원",
  publisher: "서주원",
  verification: {
    google: "mqjx8l72kbaE1-3zoDgN3Cj4mLqywNQ-xmPesIKynLE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <Header />
        <main className="flex-1 w-full h-fit px-4 py-4 max-w-[1440px] mx-auto mt-0 md:mt-28">
          {children}
        </main>
        <FeedbackDialog />
        <MobileNav />
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
