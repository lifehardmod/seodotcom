"use client";

import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Coin from "./Coin";
import Lights from "./Lights";
// 코인 컨테이너 컴포넌트
const CoinContainer = () => {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const scaleRef = useRef(1);

  useFrame(() => {
    if (!groupRef.current) return;

    // 뷰포트에 맞는 동적 스케일 계산 (코인 지름: 20 단위)
    const fitScale = (Math.min(viewport.width, viewport.height) * 0.8) / 20;
    // 부드럽게 스케일 보간 및 안정적 범위 클램프
    const clampedTarget = THREE.MathUtils.clamp(fitScale, 0.2, 1.2);
    scaleRef.current = THREE.MathUtils.lerp(
      scaleRef.current,
      clampedTarget,
      0.1,
    );
    groupRef.current.scale.setScalar(scaleRef.current);

    // 마우스 위치를 -1에서 1 사이의 값으로 정규화하여 약한 시차 회전
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.05,
      0.05,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.05,
      0.05,
    );
  });

  return (
    <group ref={groupRef}>
      <Coin scale={1} />
    </group>
  );
};

// 메인 코인 컴포넌트
const RabbitCoin = () => {
  const container = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () =>
      setAnimate(visible && !document.hidden && !motion.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (container.current) observer.observe(container.current);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div ref={container} className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={animate ? "always" : "demand"}
        camera={{
          position: [0, 8, 28],
          fov: 70,
        }}
      >
        <Lights />
        <CoinContainer />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={10}
          maxDistance={30}
          autoRotate={false}
        />
        <Environment resolution={128} frames={1}>
          <Lightformer intensity={3} position={[0, 8, 5]} scale={[20, 10, 1]} />
          <Lightformer
            intensity={2}
            position={[-10, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[10, 20, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
};

export default RabbitCoin;
