const SkillSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`p-6 py-4 bg-black/70 z-1 rounded-sm border border-gray-200/50 hover:border-gray-600/50 transition-colors`}
    >
      <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700/50 pb-2">
        {title}
      </h3>
      <div className="space-y-2 font-extralight leading-relaxed text-lg text-gray-50">
        {children}
      </div>
    </div>
  );
};

export default SkillSection;
