import Devider from "../common/Devider";

interface ResumeCategoryProps {
  title: string;
  children: React.ReactNode;
}

const ResumeCategory = ({ title, children }: ResumeCategoryProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <h2 className="text-center font-semibold text-xl">{title}</h2>
      <Devider />
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

export default ResumeCategory;
