import { ExternalLink } from "lucide-react";
const HomeAbout = () => {
  return (
    <section className="container flex justify-start w-full flex-col gap-5 text-lg md:text-xl font-light">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">안녕하세요!</p>
        <p>
          사용자의 흐름을 이해하고, 직접 구현하는{" "}
          <span className="font-bold text-green-400">프론트엔드 개발자</span>
          이자 <span className="font-bold text-green-400">
            UX/UI 디자이너
          </span>{" "}
          <span className="font-bold">서주원</span>
          입니다.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          <span className="font-semibold">Visual Communication Design</span>을
          전공하였고
        </p>
        <p>
          <a
            href="https://www.ssafy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-gray-300 cursor-pointer inline-flex items-center gap-1"
          >
            삼성 청년 SW 아카데미
            <ExternalLink size={16} />
          </a>
          에서 웹 개발을 익혔습니다.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
