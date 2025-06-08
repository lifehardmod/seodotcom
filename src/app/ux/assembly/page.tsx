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
              NFT 기반 차용증 거래 서비스 RABBIT
            </h1>
            <div className="flex flex-col items-center gap-2 max-w-[800px] px-4">
              <p className="text-[clamp(16px,2vw,28px)] text-center leading-relaxed font-light">
                <span className="font-semibold text-brand-primary">
                  블록체인
                </span>{" "}
                기반의{" "}
                <span className="font-semibold text-brand-primary">
                  차용증 거래
                </span>{" "}
                서비스로,
                <br className="hidden sm:block" />
                투명하고 안전한{" "}
                <span className="font-semibold text-brand-primary">
                  P2P 대출
                </span>
                서비스를 제공합니다.
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
