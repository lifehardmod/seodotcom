import MovieLayout from "@/components/common/MovieLayout";
import Image from "next/image";

const Assembly = () => {
  return (
    <section>
      <MovieLayout
        movieLink="/Assembly/Assembly_Title.webm"
        text={
          <h1 className="text-[clamp(28px,5vw,48px)] font-bold flex flex-col items-center">
            <span className="font-semibold">
              사용자에게 가장 잘 맞는 데스크탑 추천 서비스
            </span>
            <span> Assembly</span>
          </h1>
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
