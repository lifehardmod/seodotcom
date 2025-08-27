import Image from "next/image";
import ImageLayout from "@/components/A7M3/ImageLayout";

const A7M3 = () => {
  return (
    <section>
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden mt-8">
        <ImageLayout />
        <section className="flex flex-col items-center gap-4 w-full px-4 mt-20">
          {[4, 5, 6, 7, 8, 9, 10, 11].map((num, idx) => (
            <figure key={idx} className="w-full">
              <Image
                src={`/A7M3/${num}.webp`}
                alt={`${num}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </section>
      </div>
    </section>
  );
};

export default A7M3;
