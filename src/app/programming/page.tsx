import MovieLayout from "@/components/common/MovieLayout";
import PortfolioList from "@/components/shared/ui/PortfolioList";
import ProgrammingList from "@/constant/ProgrammingList";
import UXlist from "@/constant/UXlist";

const Programming = () => {
  return (
    <div>
      <MovieLayout
        movieLink="/movies/UX_Title.webm"
        text={
          <div className="flex flex-row md:gap-3 sm:gap-2 font-bold sm:text-3xl py-1 px-2 text-base md:text-4xl lg:text-5xl gap-1 lg:gap-4 items-center whitespace-nowrap flex-wrap ">
            {[
              { bold: "사용자", normal: "에게" },
              { bold: "좋은", normal: "경험을" },
              { bold: " 제공하기", normal: "위해" },
              { bold: "", normal: "노력합니다." },
            ].map((item, index) => (
              <div key={index} className="flex">
                {item.bold && <h1>{item.bold}</h1>}
                <h1 className="font-normal  whitespace-nowrap">
                  {item.normal}
                </h1>
              </div>
            ))}
          </div>
        }
      />
      <article className="flex flex-col gap-4 mt-20">
        <PortfolioList list={ProgrammingList} />
      </article>
    </div>
  );
};

export default Programming;
