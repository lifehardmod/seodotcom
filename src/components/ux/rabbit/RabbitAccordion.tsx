import type { ReactNode } from "react";

interface Section {
  title: string;
  content: {
    title?: string;
    description?: string;
    image?: string;
    list?: string[];
    component?: ReactNode;
  }[];
}

export default function RabbitAccordion({ sections }: { sections: Section[] }) {
  return (
    <div className="w-full space-y-4 pb-20 sm:px-4">
      {sections.map((section, index) => (
        <details
          key={section.title}
          open={index === 0}
          className="rounded-lg bg-white/5 p-4 sm:p-6"
        >
          <summary className="cursor-pointer text-xl font-semibold focus-visible:outline-2">
            {section.title}
          </summary>
          <div className="space-y-8 pt-6">
            {section.content.map((item, i) => (
              <section key={i} className="space-y-4">
                {item.title && (
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h2>
                )}
                {item.description && (
                  <p className="leading-relaxed">{item.description}</p>
                )}
                {item.list && (
                  <ul className="list-inside list-disc space-y-2">
                    {item.list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )}
                {item.component}
              </section>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
