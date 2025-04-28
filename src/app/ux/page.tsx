import Card from "@/components/common/Card";
import MovieLayout from "@/components/common/MovieLayout";
import PortfolioList from "@/components/shared/ui/PortfolioList";
import UXlist from "@/constant/UXlist";
const Ux = () => {
  return (
    <div>
      <MovieLayout
        movieLink="/movies/UX_Title.webm"
        text={
          <div className="flex flex-row md:gap-3 sm:gap-2 font-bold sm:text-3xl py-1 px-2 text-base md:text-4xl lg:text-5xl gap-1 lg:gap-4 items-center whitespace-nowrap flex-wrap ">
            {[
              { bold: "개발", normal: "과" },
              { bold: "디자인", normal: "의" },
              { bold: "균형", normal: "을" },
              { bold: "", normal: "고려한" },
              { bold: "디자인", normal: "을" },
              { bold: "", normal: "합니다." },
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
      <article className="flex flex-col gap-4 mt-10">
        <PortfolioList />
      </article>
    </div>
  );
};

export default Ux;
