import Card from "@/components/common/Card";

interface PortfolioListProps {
  list: {
    id: number;
    title: string;
    description: string;
    to: string;
    image: string;
    Tag: string[];
    isUpdated: boolean;
  }[];
}

const PortfolioList = ({ list }: PortfolioListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-20">
        {list.map((item) => (
          <li key={item.id}>
            <Card {...item} Tag={item.Tag || []} isUpdated={item.isUpdated} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PortfolioList;
