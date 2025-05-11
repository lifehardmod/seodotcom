interface CommonProps {
  Image: string[];
}

const Common = ({ Image }: CommonProps) => {
  const ImageList = Image.map((image) => (
    <div key={image} className="w-[378px] h-auto">
      <img src={image} alt="image" />
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
