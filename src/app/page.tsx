import HomeAbout from "@/components/home/HomeAbout";
import HomeMain from "@/components/home/HomeMain";
import SkillSet from "@/components/home/SkillSet";
const Home = () => {
  return (
    <div className="flex flex-col md:px-10 px-2 gap-16">
      <HomeMain />
      <HomeAbout />
      <SkillSet />
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.1 }}
        >
          <source src="/movies/Mainvideo.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Home;
