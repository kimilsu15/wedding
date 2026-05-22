"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { weddingData } from "@/lib/weddingData";

// ─── 스크롤 fade-in 훅 ───────────────────────────────────────
function useFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Lightbox ─────────────────────────────────────────────────
interface LightboxProps {
  images: { src: string; alt?: string }[];
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  // 키보드 이벤트
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* 닫기 버튼 */}
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="닫기"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* 이미지 */}
      <div
        className="relative flex items-center justify-center w-full h-full px-14"
        onClick={e => e.stopPropagation()}
      >
        {/* 이전 */}
        <button
          className="absolute left-3 text-white/60 hover:text-white transition-colors p-2"
          onClick={prev}
          aria-label="이전"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* 현재 이미지 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current].src}
          alt={images[current].alt ?? `갤러리 ${current + 1}`}
          className="max-h-[80vh] max-w-full object-contain select-none"
          draggable={false}
        />

        {/* 다음 */}
        <button
          className="absolute right-3 text-white/60 hover:text-white transition-colors p-2"
          onClick={next}
          aria-label="다음"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* 페이지 카운터 */}
      <p className="absolute bottom-6 text-white/50 text-sm font-sans font-light tracking-widest">
        {current + 1} / {images.length}
      </p>
    </div>
  );
}

// ─── 메인 갤러리 섹션 ─────────────────────────────────────────
export default function GallerySection() {
  const titleFade = useFadeIn();
  const gridFade  = useFadeIn(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = weddingData.gall; // { src: string; alt?: string }[]

  // 3열 균등 분배 — 위→아래 순서로 열에 채움
  const total = images.length;
  const base  = Math.floor(total / 3);
  const extra = total % 3; // 나머지는 앞 열에 1장씩 추가

  // 각 열이 담당하는 global index 범위
  const colSizes  = [base + (extra > 0 ? 1 : 0), base + (extra > 1 ? 1 : 0), base];
  const colStarts = [0, colSizes[0], colSizes[0] + colSizes[1]];

  const col0 = images.slice(colStarts[0], colStarts[0] + colSizes[0]);
  const col1 = images.slice(colStarts[1], colStarts[1] + colSizes[1]);
  const col2 = images.slice(colStarts[2], colStarts[2] + colSizes[2]);

  // 클릭한 열·행 → global index 변환
  const toGlobal = (colIdx: number, rowIdx: number) => colStarts[colIdx] + rowIdx;

  return (
    <section className="bg-white py-20 px-4">
      {/* 제목 */}
      <div
        ref={titleFade.ref}
        className={`text-center mb-10 transition-all duration-700 ${
          titleFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2
          className="text-gray-800 font-serif"
          style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.05em" }}
        >
          갤러리
        </h2>
      </div>

      {/* 3열 Masonry 그리드 */}
      <div
        ref={gridFade.ref}
        className={`max-w-lg mx-auto transition-all duration-700 delay-100 ${
          gridFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-3 gap-1">
          {/* 열 0 */}
          <div className="flex flex-col gap-1">
            {col0.map((img, rowIdx) => (
              <GalleryThumb
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxIndex(toGlobal(0, rowIdx))}
                delay={rowIdx * 80}
                visible={gridFade.visible}
              />
            ))}
          </div>

          {/* 열 1 */}
          <div className="flex flex-col gap-1">
            {col1.map((img, rowIdx) => (
              <GalleryThumb
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxIndex(toGlobal(1, rowIdx))}
                delay={rowIdx * 80 + 40}
                visible={gridFade.visible}
              />
            ))}
          </div>

          {/* 열 2 */}
          <div className="flex flex-col gap-1">
            {col2.map((img, rowIdx) => (
              <GalleryThumb
                key={img.src}
                src={img.src}
                alt={img.alt}
                onClick={() => setLightboxIndex(toGlobal(2, rowIdx))}
                delay={rowIdx * 80 + 80}
                visible={gridFade.visible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

// ─── 썸네일 ───────────────────────────────────────────────────
interface GalleryThumbProps {
  src: string;
  alt?: string;
  onClick: () => void;
  delay: number;
  visible: boolean;
}

function GalleryThumb({ src, alt, onClick, delay, visible }: GalleryThumbProps) {
  return (
    <button
      className={`w-full overflow-hidden group focus:outline-none transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
      aria-label={alt ?? "갤러리 사진 보기"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? "갤러리"}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
}