export default function video() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">개발 중입니다</h1>
        <div className="animate-pulse mt-8">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="mt-8">
          <a
            href="https://seojw.myportfolio.com/16540dd23563a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            기존 포트폴리오 사이트로 이동하기
          </a>
        </div>
      </div>
    </div>
  );
}
