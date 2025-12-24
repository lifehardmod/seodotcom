interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <div className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-normal border border-gray-300 rounded-sm px-4 py-1 mt-2">
      {label}
    </div>
  );
};

export default Tag;
