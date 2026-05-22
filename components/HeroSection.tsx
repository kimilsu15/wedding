"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/weddingData";
import WeddingTextAnimation from "@/components/WeddingTextAnimation";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 배경 이미지 — z-0 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${weddingData.gallery[0].src})` }}
      />

      {/* 오버레이 — z-10 */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70 z-10" />

      {/* 장식 보더 — z-20 */}
      <div className="absolute inset-4 border border-white/20 pointer-events-none z-20" />
      <div className="absolute inset-6 border border-white/10 pointer-events-none z-20" />

      {/* 상단 장식 — z-20 */}
      <div
        className={`absolute top-12 flex flex-col items-center gap-2 z-20 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
        <span className="text-white/60 text-xs tracking-[0.3em] font-sans font-light">
          WEDDING INVITATION
        </span>
      </div>

      {/* 메인 콘텐츠 — z-30 (배경·오버레이 위) */}
      <div className="relative z-30 text-center px-8 w-full max-w-lg mx-auto">
        {/* ✅ We're getting Married! 애니메이션 */}
        <WeddingTextAnimation
          line1="We're getting"
          line2="Married!"
          duration={3200}
          delay={600}
          textColor="#f5e6c8"
        />

        {/* 날짜 */}
        <div
          className={`mt-6 transition-all duration-1000 delay-300 ${
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
          <div className="flex items-center justify-center gap-6 mb-12">
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
              <span className="text-gold-200 font-serif italic" style={{ fontSize: "1.4rem" }}>
                &amp;
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
      </div>

      {/* 하단 스크롤 인디케이터 — z-20 */}
      <div
        className={`absolute bottom-10 flex flex-col items-center gap-2 z-20 transition-all duration-1000 delay-1000 ${
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
