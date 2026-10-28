import pageFont from "@/lib/fonts/ux";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/ux");

import MovieLayout from "@/components/common/MovieLayout";
import PortfolioList from "@/components/shared/PortfolioList";
import UXlist from "@/constant/UXlist";
const Ux = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/ux" />
      <div>
        <MovieLayout
          movieLink="/movies/UX_Title.webm"
          text={
            <h1 className="flex flex-row md:gap-3 sm:gap-2 font-bold sm:text-3xl py-1 px-2 text-base md:text-4xl lg:text-5xl gap-1 lg:gap-4 items-center whitespace-nowrap flex-wrap ">
              {[
                { bold: "개발", normal: "과" },
                { bold: "디자인", normal: "의" },
                { bold: "균형", normal: "을" },
                { bold: "", normal: "고려한" },
                { bold: "디자인", normal: "을" },
                { bold: "", normal: "합니다." },
              ].map((item, index) => (
                <span key={index} className="flex">
                  {item.bold && <span>{item.bold}</span>}
                  <span className="font-normal  whitespace-nowrap">
                    {item.normal}
                  </span>{" "}
                </span>
              ))}
            </h1>
          }
        />
        <article className="flex flex-col gap-4 mt-20">
          <PortfolioList list={UXlist} />
        </article>
      </div>
    </div>
  );
};

export default Ux;
