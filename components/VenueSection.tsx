"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/lib/weddingData";

// ─── 스크롤 fade-in 훅 ───────────────────────────────────────
function useFadeIn(threshold = 0.15) {
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

// ─── 달력 유틸 ───────────────────────────────────────────────
function getCalendarDays(year: number, month: number) {
  // month: 1-based
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=일
  const lastDate = new Date(year, month, 0).getDate();
  const days: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= lastDate; d++) days.push(d);
  return days;
}

const DAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

// ─── 메인 컴포넌트 ────────────────────────────────────────────
export default function VenueSection() {
  const title    = useFadeIn();
  const info     = useFadeIn();
  const photo    = useFadeIn();
  const calendar = useFadeIn();

  // weddingData에서 날짜 파싱
  const weddingDate = new Date(weddingData.wedding.isoDate); // e.g. "2026-05-29"
  const year  = weddingDate.getFullYear();
  const month = weddingDate.getMonth() + 1;
  const day   = weddingDate.getDate();

  const calDays = getCalendarDays(year, month);

  return (
    <section className="bg-white py-20 px-6">

      {/* ── 예식 안내 제목 ── */}
      <div
        ref={title.ref}
        className={`text-center mb-6 transition-all duration-700 ${
          title.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2
          className="text-gray-800 font-serif"
          style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.05em" }}
        >
          예식 안내
        </h2>
      </div>

      {/* ── 날짜 / 장소 ── */}
      <div
        ref={info.ref}
        className={`text-center mb-8 transition-all duration-700 delay-100 ${
          info.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p
          className="text-gray-600 font-sans font-light leading-relaxed"
          style={{ fontSize: "clamp(0.82rem, 3vw, 0.9rem)" }}
        >
          {weddingData.wedding.dateLabel}
          <br />
          {weddingData.wedding.venue}
        </p>
      </div>

      {/* ── 사진 ── */}
      <div
        ref={photo.ref}
        className={`relative w-full max-w-sm mx-auto aspect-[4/5] overflow-hidden rounded-sm mb-12 transition-all duration-700 delay-150 ${
          photo.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Image
          src={weddingData.gallery[1]?.src ?? weddingData.gallery[0].src}
          alt="웨딩 사진"
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 400px"
          style={{objectPosition:"left"}}
        />
      </div>

      {/* ── 달력 ── */}
      <div
        ref={calendar.ref}
        className={`max-w-sm mx-auto transition-all duration-700 delay-200 ${
          calendar.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* 월 표시 */}
        <p
          className="text-center text-gray-700 font-serif mb-5"
          style={{ fontSize: "clamp(0.95rem, 3.5vw, 1.1rem)" }}
        >
          {month}월
        </p>

        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 mb-2">
          {DAY_LABELS.map((label, i) => (
            <div
              key={label}
              className={`text-center text-xs font-sans font-light pb-2 ${
                i === 0 ? "text-rose-400" : i === 6 ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* 날짜 구분선 */}
        <div className="w-full h-px bg-gray-100 mb-3" />

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-y-3">
          {calDays.map((d, i) => {
            const colIndex = i % 7;
            const isWeddingDay = d === day;
            const isSun = colIndex === 0;
            const isSat = colIndex === 6;

            return (
              <div key={i} className="flex items-center justify-center">
                {d === null ? null : (
                  <span
                    className={`
                      flex items-center justify-center w-8 h-8 rounded-full text-sm font-sans
                      ${isWeddingDay
                        ? "bg-gray-800 text-white font-medium"
                        : isSun
                        ? "text-rose-400 font-light"
                        : isSat
                        ? "text-blue-400 font-light"
                        : "text-gray-600 font-light"
                      }
                    `}
                  >
                    {d}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}