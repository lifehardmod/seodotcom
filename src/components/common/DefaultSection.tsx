interface DefaultSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DefaultSection = ({
  title,
  description,
  children,
}: DefaultSectionProps) => {
  return (
    <section className="w-full bg-white/5 backdrop-blur-sm rounded-sm px-3 py-3 sm:px-8 sm:py-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
      <p className="mb-4 leading-relaxed text-base sm:text-xl">{description}</p>
      {children}
    </section>
  );
};
export default DefaultSection;
