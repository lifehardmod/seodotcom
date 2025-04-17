const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-start w-full">
        <p className="text-[100px] font-bold text-gray-100">UX/UI</p>
      </div>

      <video
        className="w-full h-[300px] rounded-lg shadow-lg object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src="/movies/Main_Title.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Home;
