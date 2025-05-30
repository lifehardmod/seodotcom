import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

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
      </div>{" "}
      <div className="flex flex-col gap-1">
        <p>
          자세한 내용은{" "}
          <Link
            href="/resume"
            className="font-semibold cursor-pointer inline-flex items-center gap-1 text-green-400 hover:text-green-700 transition-colors"
          >
            이력서
            <FileText size={16} />
          </Link>
          를 참고해주세요.
        </p>
        <p>Skill에 대한 자세한 정보도 이력서에 명시되어 있습니다.</p>
      </div>
    </section>
  );
};

export default HomeAbout;
