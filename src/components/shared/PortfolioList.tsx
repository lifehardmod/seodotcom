import Card from "@/components/common/Card";

interface PortfolioListProps {
  list: {
    id: number;
    title: string;
    description: string;
    to: string;
    image: string;
    tags: string[];
    isUpdated: boolean;
  }[];
}

const PortfolioList = ({ list }: PortfolioListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 md:gap-y-20">
        {list.map((item) => {
          const { id, title, description, to, image, tags, isUpdated } = item;
          return (
            <li key={id}>
              <Card
                id={id}
                title={title}
                description={description}
                to={to}
                image={image}
                tags={tags || []}
                isUpdated={isUpdated}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PortfolioList;
