"use client";

import { useEffect, useState } from "react";

// ─── 경과 시간 계산 ───────────────────────────────────────────
interface Elapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcElapsed(from: Date, to: Date): Elapsed {
  let years  = to.getFullYear()  - from.getFullYear();
  let months = to.getMonth()     - from.getMonth();
  let days   = to.getDate()      - from.getDate();
  let hours  = to.getHours()     - from.getHours();
  let minutes= to.getMinutes()   - from.getMinutes();
  let seconds= to.getSeconds()   - from.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours   < 0) { hours   += 24; days--; }
  if (days    < 0) {
    // 이전 달의 마지막 날 계산
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months  < 0) { months += 12; years--; }

  return { years, months, days, hours, minutes, seconds };
}

// ─── 단위 카드 ────────────────────────────────────────────────
function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="font-serif text-gray-800 tabular-nums"
        style={{ fontSize: "clamp(1.4rem, 6vw, 2rem)", lineHeight: 1 }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-gray-400 font-sans font-light" style={{ fontSize: "0.65rem", letterSpacing: "0.08em" }}>
        {label}
      </span>
    </div>
  );
}

// ─── 구분자 ───────────────────────────────────────────────────
function Sep() {
  return (
    <span className="text-gray-300 font-light self-start pt-1" style={{ fontSize: "1.2rem" }}>
      :
    </span>
  );
}

// ─── 메인 컴포넌트 ────────────────────────────────────────────
interface DdayCounterProps {
  /** 시작일 (ISO 형식 "YYYY-MM-DD") */
  startDate?: string;
  /** 섹션 제목 */
  title?: string;
}

export default function DdayCounter({
  startDate = "2017-06-09",
  title = "우리가 함께한 시간",
}: DdayCounterProps) {
  const from = new Date(startDate);
  const [elapsed, setElapsed] = useState<Elapsed | null>(null);

  useEffect(() => {
    const tick = () => setElapsed(calcElapsed(from, new Date()));
    tick(); // 즉시 1회 실행

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startDate]);

  return (
    <section className="bg-white py-16 px-6">
      {/* 제목 */}
      <p
        className="text-center text-gray-400 font-sans font-light tracking-[0.15em] mb-2"
        style={{ fontSize: "0.7rem" }}
      >
        {new Date(startDate).toLocaleDateString("ko-KR", {
          year: "numeric", month: "long", day: "numeric",
        })}부터
      </p>
      <h2
        className="text-center text-gray-700 font-serif mb-10"
        style={{ fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.04em" }}
      >
        {title}
      </h2>

      {/* 타이머 — elapsed가 null이면(SSR) 빈 자리 유지 */}
      <div className="max-w-sm mx-auto">
        {/* 연 / 월 / 일 */}
        <div className="flex items-end justify-center gap-3 mb-6">
          <Unit value={elapsed?.years   ?? 0} label="년" />
          <Sep />
          <Unit value={elapsed?.months  ?? 0} label="개월" />
          <Sep />
          <Unit value={elapsed?.days    ?? 0} label="일" />
        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-gray-200 text-xs">♥</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* 시 / 분 / 초 */}
        <div className="flex items-end justify-center gap-3">
          <Unit value={elapsed?.hours   ?? 0} label="시간" />
          <Sep />
          <Unit value={elapsed?.minutes ?? 0} label="분" />
          <Sep />
          <Unit value={elapsed?.seconds ?? 0} label="초" />
        </div>
      </div>
    </section>
  );
}