import Image from "next/image";

const WebMockup = ({
  images,
  width,
  height,
}: {
  images: string;
  width: number;
  height: number;
}) => {
  return (
    <div className=" w-full aspect-[3/2] bg-white">
      <div className="h-full w-full bg-white overflow-y-scroll">
        <Image
          src={images}
          alt="MIMO 서비스 화면"
          className="w-full h-auto px-[30px] pt-[20px]"
          sizes="(max-width: 640px) calc(100vw - 124px), (max-width: 1440px) calc(100vw - 156px), 1284px"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default WebMockup;
