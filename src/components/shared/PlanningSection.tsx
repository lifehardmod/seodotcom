"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import Carousel from "../common/Carousel";

interface PlanningSectionProps {
  title: string;
  Images: string[];
}

const PlanningSection = ({ title, Images }: PlanningSectionProps) => {
  return (
    <section className="w-full not-last:px-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:px-8 sm:py-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="h-fit">
            <h3 className="text-xl sm:text-2xl font-semibold h-fit">{title}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <Carousel images={Images} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PlanningSection;
