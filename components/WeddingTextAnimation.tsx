"use client";

import { useEffect, useRef, useState } from "react";

interface WeddingTextAnimationProps {
  line1?: string;
  line2?: string;
  duration?: number;
  delay?: number;
  textColor?: string;
  className?: string;
}

export default function WeddingTextAnimation({
  line1 = "We're getting",
  line2 = "Married!",
  duration = 3000,
  delay = 0,
  textColor = "#f5e6c8",
  className = "",
}: WeddingTextAnimationProps) {
  const line1Ref = useRef<SVGTextElement>(null);
  const line2Ref = useRef<SVGTextElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const animate = (
      el: SVGTextElement | null,
      animDuration: number,
      startDelay: number
    ) => {
      if (!el) return;

      // 폰트 로드 후 길이를 정확히 측정하기 위해 짧게 대기
      requestAnimationFrame(() => {
        const length = el.getComputedTextLength();
        if (length === 0) return; // 폰트 미로드 시 방어

        // 인라인 스타일로 직접 제어 (CSS transition 간섭 없음)
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;
        el.style.opacity = "1";

        // 강제 리플로우 — 시작값 확정
        void el.getBoundingClientRect();

        // transition 적용 후 목표값으로
        el.style.transition = [
          `stroke-dashoffset ${animDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${startDelay}ms`,
          `fill ${animDuration * 0.6}ms ease ${startDelay + animDuration * 0.4}ms`,
        ].join(", ");

        el.style.strokeDashoffset = "0";
        el.style.fill = textColor; // stroke 다 그려진 후 fill 채움
      });
    };

    const line1Duration = duration * 0.55;
    const line2Duration = duration * 0.55;
    const line2StartDelay = duration * 0.45;

    animate(line1Ref.current, line1Duration, 0);
    animate(line2Ref.current, line2Duration, line2StartDelay);
  }, [started, duration, textColor]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        .wedding-svg-text {
          font-family: 'Great Vibes', cursive;
          fill: transparent;
          stroke: ${textColor};
          stroke-width: 1px;
          opacity: 0;
          filter: drop-shadow(0 0 8px rgba(245, 230, 200, 0.6));
          paint-order: stroke fill;
        }
      `}</style>

      <svg
        viewBox="0 0 520 165"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label={`${line1} ${line2}`}
        role="img"
      >
        <text
          ref={line1Ref}
          x="260"
          y="72"
          fontSize="72"
          textAnchor="middle"
          className="wedding-svg-text"
        >
          {line1}
        </text>

        <text
          ref={line2Ref}
          x="260"
          y="150"
          fontSize="72"
          textAnchor="middle"
          className="wedding-svg-text"
        >
          {line2}
        </text>
      </svg>
    </div>
  );
}