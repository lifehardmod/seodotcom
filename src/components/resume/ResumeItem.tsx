interface ResumeItemProps {
  title: string;
  date: string;
  content?: string;
  extra?: string;
}

const ResumeItem = ({ title, date, content, extra }: ResumeItemProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-700 font-light">{date}</span>
      <span className="font-semibold -mt-[3px]">{title}</span>
      <p className="leading-5 text-gray-600 text-sm">{content}</p>
      {extra && <p className="mt-1 leading-tight text-sm">{extra}</p>}
    </div>
  );
};

export default ResumeItem;
