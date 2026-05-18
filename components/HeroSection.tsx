"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/weddingData";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${weddingData.gallery[0].src})`,
        }}
      />
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70" />

      {/* 장식 보더 */}
      <div className="absolute inset-4 border border-white/20 pointer-events-none" />
      <div className="absolute inset-6 border border-white/10 pointer-events-none" />

      {/* 상단 장식 */}
      <div
        className={`absolute top-12 flex flex-col items-center gap-2 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
        <span className="text-white/60 text-xs tracking-[0.3em] font-sans font-light">
          WEDDING INVITATION
        </span>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center px-8">
        {/* 날짜 */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/70 text-xs tracking-[0.4em] font-sans font-light mb-8">
            2026 · 08 · 15
          </p>
        </div>

        {/* 이름 */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="text-center">
              <p className="text-white/60 text-xs tracking-[0.2em] font-sans font-light mb-1">
                GROOM
              </p>
              <h1
                className="text-white font-serif font-light"
                style={{ fontSize: "clamp(2rem, 8vw, 3rem)", lineHeight: 1.1 }}
              >
                {weddingData.groom.name}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-8 bg-gold-300/60" />
              <span
                className="text-gold-200 font-serif italic"
                style={{ fontSize: "1.4rem" }}
              >
                &
              </span>
              <div className="w-px h-8 bg-gold-300/60" />
            </div>

            <div className="text-center">
              <p className="text-white/60 text-xs tracking-[0.2em] font-sans font-light mb-1">
                BRIDE
              </p>
              <h1
                className="text-white font-serif font-light"
                style={{ fontSize: "clamp(2rem, 8vw, 3rem)", lineHeight: 1.1 }}
              >
                {weddingData.bride.name}
              </h1>
            </div>
          </div>
        </div>

        {/* 영문 이름 */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/50 text-xs tracking-[0.25em] font-sans font-light mt-4">
            {weddingData.groom.english} · {weddingData.bride.english}
          </p>
        </div>

        {/* 장소 & 시간 */}
        <div
          className={`mt-12 transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block border border-white/25 px-8 py-4">
            <p className="text-white/90 text-sm font-serif font-light tracking-wider">
              {weddingData.wedding.date}
            </p>
            <p className="text-white/70 text-xs font-sans font-light mt-1 tracking-wider">
              {weddingData.wedding.time}
            </p>
            <div className="w-full h-px bg-white/20 my-3" />
            <p className="text-white/90 text-sm font-serif font-light">
              {weddingData.wedding.venue}
            </p>
          </div>
        </div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
      <div
        className={`absolute bottom-10 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/50 text-xs tracking-[0.3em] font-sans font-light">
          SCROLL
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
