interface DeviderProps {
  className?: string;
}

const Devider = ({ className }: DeviderProps) => {
  return (
    <div
      className={`w-full h-[0.15px] bg-gray-300 mb-3 mt-1 ${className}`}
    ></div>
  );
};

export default Devider;
