const Explanation = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex">
      <span className="text-blue-400 mr-3 text-xl hidden sm:block">•</span>
      <p className={`text-base sm:text-lg leading-relaxed font-light`}>
        {children}
      </p>
    </li>
  );
};

export default Explanation;
