import pageFont from "@/lib/fonts/home";
import DecorativeVideo from "@/components/common/DecorativeVideo";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/");

import HomeAbout from "@/components/home/HomeAbout";
import HomeMain from "@/components/home/HomeMain";
import SkillSet from "@/components/home/SkillSet";

const Home = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/" />
      <section className="flex flex-col md:px-10 px-2 gap-16">
        <HomeMain />
        <HomeAbout />
        <SkillSet />
        <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
          <DecorativeVideo src="/movies/Mainvideo.webm" opacity={0.1} />
        </div>
      </section>
    </div>
  );
};

export default Home;
