import Resume from "@/components/resume/Resume";

const ResumePage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <button className="border-2 border-white rounded-sm px-4 py-2 hover:bg-gray-600  transition-all duration-300 cursor-pointer mb-6">
        이력서 다운로드
      </button>
      <Resume />
    </section>
  );
};

export default ResumePage;
