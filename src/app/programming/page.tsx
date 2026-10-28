import pageFont from "@/lib/fonts/programming";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/programming");

import MovieLayout from "@/components/common/MovieLayout";
import PortfolioList from "@/components/shared/PortfolioList";
import ProgrammingList from "@/constant/ProgrammingList";

const Programming = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/programming" />
      <div>
        <MovieLayout
          movieLink="/movies/UX_Title.webm"
          text={
            <h1 className="flex flex-row md:gap-3 sm:gap-2 font-bold sm:text-3xl py-1 px-2 text-base md:text-4xl lg:text-5xl gap-1 lg:gap-4 items-center whitespace-nowrap flex-wrap ">
              {[
                { bold: "사용자", normal: "에게" },
                { bold: "좋은", normal: "경험을" },
                { bold: " 제공하기", normal: "위해" },
                { bold: "", normal: "노력합니다." },
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
          <PortfolioList list={ProgrammingList} />
        </article>
      </div>
    </div>
  );
};

export default Programming;
