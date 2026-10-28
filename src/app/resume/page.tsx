import pageFont from "@/lib/fonts/resume";
import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/common/PageStructuredData";

export const metadata = pageMetadata("/resume");

import Resume from "@/components/resume/Resume";

const ResumePage = () => {
  return (
    <div
      className={`${pageFont.className} ${pageFont.variable}`}
      style={{ display: "contents" }}
    >
      <PageStructuredData path="/resume" />
      <section className="min-h-screen flex flex-col items-center">
        {/* <button className="border-2 border-white rounded-sm px-4 py-2 hover:bg-gray-600  transition-all duration-300 cursor-pointer mb-6">
        이력서 다운로드
      </button> */}
        <Resume />
      </section>
    </div>
  );
};

export default ResumePage;
