"use client";

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

// ─── 계좌 항목 타입 ───────────────────────────────────────────
export interface AccountItem {
  role: string;       // "신랑" | "신랑 아버지" | ...
  bank: string;       // "카카오뱅크"
  account: string;    // "1111-1111-1111-1111"
  holder: string;     // "김도연"
  kakaoPayLink?: string; // 카카오페이 송금 링크
}

// ─── 복사 버튼 ───────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 border border-gray-200 rounded text-gray-500 hover:bg-gray-50 transition-colors"
      style={{ fontSize: "0.75rem", minWidth: "52px" }}
    >
      {copied ? "완료!" : "복사"}
    </button>
  );
}

// ─── 카카오페이 버튼 ─────────────────────────────────────────
function KakaoPayButton({ link }: { link: string }) {
  const handleClick = () => {
    // 1. 카카오페이 앱 딥링크 시도
    const appScheme = link.startsWith("kakaopay://") ? link : `kakaopay://send?${link}`;
    window.location.href = link; // 송금 링크(https://qr.kakaopay.com/...) 그대로 사용
 
    // 2. 일정 시간 후 앱이 없으면 스토어로 이동
    const timer = setTimeout(() => {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isAndroid = /Android/i.test(navigator.userAgent);
 
      if (isIOS) {
        window.location.href = "https://apps.apple.com/kr/app/kakaopay/id1315064630";
      } else if (isAndroid) {
        window.location.href = "market://details?id=com.kakaopay.app";
      } else {
        // PC — 카카오페이 웹으로
        window.open(link, "_blank");
      }
    }, 1500);
 
    // 페이지가 숨겨지면(앱이 열리면) 타이머 취소
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
  };
 
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 px-3 py-1.5 rounded text-black font-bold transition-opacity hover:opacity-80"
      style={{ backgroundColor: "#FEE500", fontSize: "0.75rem" }}
      aria-label="카카오페이로 송금"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#3A1D1D"/>
        <path d="M12 5C8.13 5 5 7.69 5 11c0 2.11 1.3 3.97 3.26 5.08L7.5 19l3.34-2.18c.38.05.77.08 1.16.08 3.87 0 7-2.69 7-6s-3.13-6-7-6z" fill="#FEE500"/>
      </svg>
      pay
    </button>
  );
}

// ─── 계좌 단일 행 ─────────────────────────────────────────────
function AccountRow({ item }: { item: AccountItem }) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-gray-100 last:border-b-0">
      {/* 좌측: 정보 */}
      <div className="flex flex-col gap-0.5">
        <p className="text-gray-800 font-serif" style={{ fontSize: "0.9rem" }}>
          {item.role}
        </p>
        <p className="text-gray-400 font-sans font-light" style={{ fontSize: "0.78rem" }}>
          {item.account}
        </p>
        <p className="text-gray-400 font-sans font-light" style={{ fontSize: "0.78rem" }}>
          {item.bank} {item.holder}
        </p>
      </div>

      {/* 우측: 버튼 */}
      <div className="flex flex-col items-end gap-1.5 flex-shrink-0 ml-4">
        <CopyButton text={item.account} />
        {/* {item.kakaoPayLink && <KakaoPayButton link={item.kakaoPayLink} />} */}
      </div>
    </div>
  );
}

// ─── 아코디언 그룹 ────────────────────────────────────────────
interface AccordionGroupProps {
  label: string;
  items: AccountItem[];
  defaultOpen?: boolean;
}

function AccordionGroup({ label, items, defaultOpen = false }: AccordionGroupProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      {/* 헤더 */}
      <button
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-gray-700 font-sans font-light" style={{ fontSize: "0.9rem" }}>
          {label}
        </span>
        {/* 화살표 */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* 내용 — max-height 트랜지션으로 슬라이드 */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight ?? 600}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-5 pb-2">
          {items.map((item, i) => (
            <AccountRow key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 메인 섹션 ────────────────────────────────────────────────
export default function AccountSection() {
  const titleFade = useFadeIn();
  const cardFade  = useFadeIn(0.05);

  return (
    <section className="bg-white py-20 px-6">
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
          마음 전하실 곳
        </h2>
      </div>

      {/* 아코디언 */}
      <div
        ref={cardFade.ref}
        className={`max-w-sm mx-auto flex flex-col gap-3 transition-all duration-700 delay-100 ${
          cardFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <AccordionGroup
          label="신랑측"
          items={weddingData.accounts.groom}
        />
        <AccordionGroup
          label="신부측"
          items={weddingData.accounts.bride}
        />
      </div>
    </section>
  );
}