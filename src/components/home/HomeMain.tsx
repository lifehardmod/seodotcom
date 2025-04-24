import { motion } from "framer-motion";

const HomeMain = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-[120px] font-bold -mb-8 caret-transparent"
      >
        UX/UI 디자이너
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full text-[120px] font-bold -mb-8 caret-transparent"
      >
        서주원
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full text-[120px] font-bold caret-transparent"
      >
        포트폴리오입니다.
      </motion.span>
    </div>
  );
};
export default HomeMain;
