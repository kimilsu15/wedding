"use client";

import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/lib/weddingData";
import LineBreakText from "@/util/Linebreaktext";

// ─── 스크롤 fade-in 훅 ───────────────────────────────────────
function useFadeIn(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── 타임라인 아이템 타입 ─────────────────────────────────────
export interface StoryItem {
  /** 이미지 경로 */
  imageSrc: string;
  /** 소제목 (e.g. "첫 만남") */
  label: string;
  /** 강조 텍스트 — 골드 색상 */
  highlight?: string;
  /** 본문 설명 */
  description: string;
  /** 이미지 위치: 짝수 아이템은 오른쪽, 홀수는 왼쪽 (자동) */
  imagePosition?: "left" | "right";
}

// ─── 단일 타임라인 행 ─────────────────────────────────────────
function StoryRow({ item, index }: { item: StoryItem; index: number }) {
  const { ref, visible } = useFadeIn(0.15);

  // 짝수(0,2,...) → 이미지 왼쪽 / 홀수(1,3,...) → 이미지 오른쪽
  const imageOnLeft = item.imagePosition
    ? item.imagePosition === "left"
    : index % 2 === 0;

  const textBlock = (
    <div className={`flex-1 flex flex-col gap-1 ${imageOnLeft ? "text-right items-end" : "text-left items-start"}`}>
      <p className="text-gray-700 font-serif" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1rem)" }}>
        {item.label}
      </p>
      {item.highlight && (
        <p className="font-sans font-light" style={{ fontSize: "clamp(0.78rem, 3vw, 0.88rem)", color: "#c9a96e" }}>
          {item.highlight}
        </p>
      )}
      {/* <p
        className="text-gray-500 font-sans font-light leading-relaxed"
        style={{ fontSize: "clamp(0.78rem, 3vw, 0.88rem)" }}
      >
        {item.description}
      </p> */}
      <LineBreakText text={item.description} className="text-gray-500 font-sans font-light leading-relaxed text-xs" />
    </div>
  );

  const imageBlock = (
    <div className="flex-1" style={{ maxWidth: "160px" }}>
      <img
        src={item.imageSrc}
        alt={item.label}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );

  return (
    <div
      ref={ref}
      className={`flex items-center gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* 왼쪽 영역 */}
      <div className="flex-1 flex justify-end pr-5">
        {imageOnLeft ? imageBlock : textBlock}
      </div>

      {/* 중앙 타임라인 도트 */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: "#c9a96e" }}
        />
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex-1 flex justify-start pl-5">
        {imageOnLeft ? textBlock : imageBlock}
      </div>
    </div>
  );
}

// ─── 메인 섹션 ────────────────────────────────────────────────
export default function StorySection() {
  const titleFade = useFadeIn(0.2);

  return (
    <section className="bg-white py-20 px-4">
      {/* 제목 */}
      <div
        ref={titleFade.ref}
        className={`text-center mb-14 transition-all duration-700 ${
          titleFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2
          className="text-gray-800 font-serif"
          style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.05em" }}
        >
          우리의 이야기
        </h2>
      </div>

      {/* 타임라인 */}
      <div className="relative max-w-sm mx-auto">
        {/* 세로 중앙선 */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{ backgroundColor: "#e8ddd0" }}
        />

        <div className="flex flex-col gap-14 relative z-10">
          {weddingData.story.map((item, i) => (
            <StoryRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}