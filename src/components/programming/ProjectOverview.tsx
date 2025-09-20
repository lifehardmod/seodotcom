import { cn } from "@/lib/utils";

interface ContentItem {
  title?: string;
  description?: string;
  list?: string[];
}

const ProjectOverview = ({ title, description, list }: ContentItem) => {
  return (
    <section className="w-full px-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:px-8 sm:py-6">
      {title && (
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
      )}
      {description && (
        <p
          className={cn(
            "mb-4 leading-relaxed text-base sm:text-xl",
            list ? "mb-4" : "mb-0"
          )}
        >
          {description}
        </p>
      )}
      {list && (
        <ul className="list-none list-inside space-y-2 text-gray-50 text-base sm:text-lg font-light ">
          {list.map((listItem, listIndex) => (
            <li key={listIndex}>{listItem}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProjectOverview;
