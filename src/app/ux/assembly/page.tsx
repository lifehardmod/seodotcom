import MovieLayout from "@/components/common/MovieLayout";
import Image from "next/image";

const Assembly = () => {
  return (
    <section>
      <MovieLayout
        movieLink="/Assembly/Assembly_Title.webm"
        text={
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[clamp(28px,5vw,48px)] font-bold">
              자신에게 가장 잘 맞는 데스크탑 추천 서비스 Assembly{" "}
            </h1>
            <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
              <p className="text-[clamp(16px,2vw,28px)] text-center leading-relaxed font-light">
                <span className="font-semibold text-brand-primary">키워드</span>
                를 기반으로{" "}
                <span className="font-semibold text-brand-primary">
                  사용자에게 가장 잘 맞는
                </span>{" "}
                데스크탑을 추천합니다.
              </p>
            </div>
          </div>
        }
      />
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/Assembly/AssemblyLogo.svg"
            alt="assembly"
            width={500}
            height={250}
            className="py-30"
          />
        </div>
        <Image
          src="/Assembly/Assembly.webp"
          alt="assembly"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Assembly;
