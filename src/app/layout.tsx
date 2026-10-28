import Header from "@/components/common/Header";
import "@/styles/globals.css";
import MobileNav from "@/components/common/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/common/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { SEO_PAGES, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import pretendard from "@/lib/fonts/common";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_PAGES["/"].title,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
