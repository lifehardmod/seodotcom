"use client";
import React, { useState, useEffect } from "react";
import { Bug, Sparkles } from "lucide-react";

interface Bug {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

interface ClickEffect {
  x: number;
  y: number;
  id: number;
}

const NotYet = () => {
  const [score, setScore] = useState(0);
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [bestScore, setBestScore] = useState(0);
  const [clickEffect, setClickEffect] = useState<ClickEffect | null>(null);

  // 버그 생성
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      const newBug: Bug = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
        emoji: ["🐛", "🪲", "🦗", "🕷️"][Math.floor(Math.random() * 4)],
      };
      setBugs((prev) => [...prev, newBug]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameActive]);

  // 타이머
  useEffect(() => {
    if (!gameActive || timeLeft <= 0) {
      if (timeLeft <= 0) {
        setGameActive(false);
        setBestScore((prev) => Math.max(prev, score));
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameActive, timeLeft, score]);

  // 버그 자동 제거
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      setBugs((prev) => prev.filter((bug) => Date.now() - bug.id < 3000));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setBugs([]);
    setTimeLeft(30);
    setGameActive(true);
  };

  const catchBug = (bugId: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickEffect({ x, y, id: Date.now() });
    setTimeout(() => setClickEffect(null), 600);

    setBugs((prev) => prev.filter((bug) => bug.id !== bugId));
    setScore((prev) => prev + 10);
  };

  return (
    <div className="flex items-center justify-center bg-black p-8">
      <div className="max-w-2xl w-full">
        {/* 메인 카드 */}
        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              개발중입니다...ㅠㅠ
            </h1>
          </div>

          {/* 미니게임 */}
          <div className="bg-gray-800 rounded-2xl p-6">
            {!gameActive && timeLeft === 30 ? (
              <div className="text-center">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-110 shadow-lg"
                >
                  게임 시작!
                </button>
                {bestScore > 0 && (
                  <p className="mt-4 text-sm text-gray-300">
                    최고 점수: {bestScore}점
                  </p>
                )}
              </div>
            ) : gameActive ? (
              <div>
                <div className="flex justify-between mb-4 text-sm font-bold">
                  <span className="text-white">점수: {score}</span>
                  <span className="text-white">남은 시간: {timeLeft}초</span>
                </div>
                <div className="relative h-64 bg-gray-700 rounded-xl border-2 border-dashed border-gray-500 overflow-hidden">
                  {bugs.map((bug) => (
                    <button
                      key={bug.id}
                      onClick={(e) => catchBug(bug.id, e)}
                      className="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform cursor-pointer animate-bounce"
                      style={{
                        left: `${bug.x}%`,
                        top: `${bug.y}%`,
                        animation: `bounce 1s infinite`,
                      }}
                    >
                      {bug.emoji}
                    </button>
                  ))}
                  {clickEffect && (
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        left: clickEffect.x - 15,
                        top: clickEffect.y - 15,
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white animate-ping" />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-2">게임 끝!</p>
                <p className="text-lg mb-4 text-gray-300">
                  획득 점수: {score}점
                </p>
                {score > bestScore && score > 0 && (
                  <p className="text-sm text-green-400 font-bold mb-4">
                    🎉 신기록 달성! 🎉
                  </p>
                )}
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-110 shadow-lg"
                >
                  다시 하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotYet;
