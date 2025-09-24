const ExplanationLayout = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-8 w-full px-2 py-2 mt-4 mb-16 sm:px-8">
      {title && (
        <h4 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h4>
      )}
      <ul className="space-y-6">{children}</ul>
    </div>
  );
};

export default ExplanationLayout;
