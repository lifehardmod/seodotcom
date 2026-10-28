"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Component, type ReactNode, useState } from "react";

const RabbitCoin = dynamic(() => import("./RabbitCoin"), {
  ssr: false,
  loading: () => (
    <p role="status" className="flex h-full items-center justify-center">
      3D 모델을 불러오는 중입니다.
    </p>
  ),
});

class ModelBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p role="status" className="p-8 text-center">
        이 환경에서는 3D 미리보기를 표시할 수 없습니다.
      </p>
    ) : (
      this.props.children
    );
  }
}

export default function LazyRabbitCoin() {
  const [active, setActive] = useState(false);
  return (
    <div className="relative h-full w-full">
      {active ? (
        <>
          <ModelBoundary>
            <RabbitCoin />
          </ModelBoundary>
          <button
            type="button"
            onClick={() => setActive(false)}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-black/80 px-4 py-2 text-sm"
          >
            3D 닫기
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group relative flex h-full w-full items-center justify-center rounded-lg border border-white/10 focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="RABBIT 3D 코인 보기"
        >
          <Image
            src="/thumbnail/RabbitThumbNail.png"
            alt="RABBIT 프로젝트"
            fill
            sizes="(max-width: 767px) 300px, 600px"
            className="object-contain p-4 opacity-80 group-hover:opacity-100"
          />
          <span className="absolute bottom-4 rounded bg-black/90 px-4 py-2 text-sm text-white">
            3D 코인 보기
          </span>
        </button>
      )}
    </div>
  );
}
