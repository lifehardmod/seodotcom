import Image from "next/image";

const WebMockup = ({ images }: { images: string }) => {
  return (
    <div className="w-full aspect-[3/2] bg-white">
      <div className="h-full bg-white overflow-y-scroll">
        <Image
          src={images}
          alt={images}
          className="px-[30px] pt-[20px]"
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
};

export default WebMockup;
