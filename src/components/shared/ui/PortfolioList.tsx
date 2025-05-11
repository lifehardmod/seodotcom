import Card from "@/components/common/Card";

import UXlist from "@/constant/UXlist";

const PortfolioList = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-20">
        {UXlist.map((item) => (
          <li key={item.id}>
            <Card {...item} Tag={item.Tag || []} isExternal={item.isExternal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
