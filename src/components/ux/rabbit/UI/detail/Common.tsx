import Image from "next/image";

interface CommonProps {
  images: string[];
}

const Common = ({ images }: CommonProps) => {
  const ImageList = images.map((image) => (
    <div key={image} className="relative w-[378px] aspect-[9/17]">
      <Image src={image} alt="image" fill className="object-cover" />
    </div>
  ));
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <span className="text-2xl text-white font-semibold">모바일 UI</span>
      <div className="flex flex-row gap-4">{ImageList}</div>
    </div>
  );
};

export default Common;
