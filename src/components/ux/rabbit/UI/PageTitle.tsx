interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="text-left mb-8 w-full">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-gray-100 text-xl">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
