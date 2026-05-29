"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/lib/weddingData";
import LineBreakText from "@/util/Linebreaktext";

// ─── 스크롤 fade-in 훅 ───────────────────────────────────────
function useFadeIn(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 한 번 보이면 해제 (반복 재생 X)
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── 메인 섹션 ───────────────────────────────────────────────
export default function GreetingSection() {
  const title    = useFadeIn();
  const para1    = useFadeIn();
  const divider  = useFadeIn();
  const para2    = useFadeIn();
  const heartDiv = useFadeIn();
  const cards    = useFadeIn();

  return (
    <section className="bg-white py-20 px-6">
      {/* ── 인사말 ── */}
      <div className="text-center mb-16">

        {/* 제목 */}
        <div
          ref={title.ref}
          className={`transition-all duration-700 ${
            title.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2
            className="text-gray-800 font-serif mb-8"
            style={{ fontSize: "clamp(1.1rem, 4vw, 1.35rem)", letterSpacing: "0.04em" }}
          >
            소중한 분들을 초대합니다.
          </h2>
        </div>

        {/* 첫 번째 문단 */}
        <div
          ref={para1.ref}
          className={`transition-all duration-700 delay-150 ${
            para1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p
            className="text-gray-500 leading-loose font-sans font-light text-sm"
          >
            2017년 6월 9일,
            <br />
            서로의 하루가 되기로 한 두사람  
            <br />
            <br />
            아홉 번의 계절을 함께 지나
            <br />
            평생의 한 팀이 되려 합니다.
            <br />
            <br />
            저희의 가장 빛나는 순간에 함께하시어
            <br />
            따뜻한 축복으로 두사람의 앞날을 밝혀주세요.
          </p>
        </div>
      </div>

      {/* ── 구분선 ♥ ── */}
      <div
        ref={heartDiv.ref}
        className={`flex items-center gap-4 mb-12 px-2 transition-all duration-700 ${
          heartDiv.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-gray-300 text-xs tracking-widest font-sans">♥</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* ── 신랑 / 신부 카드 ── */}
      <div
        ref={cards.ref}
        className={`grid grid-cols-2 gap-5 max-w-sm mx-auto transition-all duration-700 delay-100 ${
          cards.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <PersonCard
          role="신랑"
          name={weddingData.groom.name}
          phone={weddingData.groom.phone}
          birth={weddingData.groom.birth}
          tags={weddingData.groom.tags}
          imageSrc={weddingData.groom.imageSrc}
          imageAlt={`신랑 ${weddingData.groom.name}`}
          fadeDelay="delay-0"
          resolution={weddingData.groom.resolution}
          parents={weddingData.groom.parents}
        />
        <PersonCard
          role="신부"
          name={weddingData.bride.name}
          phone={weddingData.bride.phone}
          birth={weddingData.bride.birth}
          tags={weddingData.bride.tags}
          imageSrc={weddingData.bride.imageSrc}
          imageAlt={`신부 ${weddingData.bride.name}`}
          fadeDelay="delay-150"
          resolution={weddingData.bride.resolution}
          parents={weddingData.bride.parents}
        />
      </div>
    </section>
  );
}

// ─── 개인 카드 컴포넌트 ───────────────────────────────────────
interface PersonCardProps {
  role: string;
  name: string;
  phone: string;
  birth: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  fadeDelay?: string;
  resolution: string;
  parents: string;
}

function PersonCard({
  role, name, phone, birth, tags, imageSrc, imageAlt, fadeDelay = "", resolution, parents
}: PersonCardProps) {
  // 카드 자체는 부모 grid가 fade되므로 내부 사진만 살짝 스케일 효과
  return (
    <div className={`flex flex-col gap-3 transition-all duration-700 ${fadeDelay}`}>
      {/* 사진 */}
      <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-100 group">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 200px"
        />
      </div>

      {/* 정보 */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-gray-400 text-sm font-sans">{role}</span>
          <span
            className="text-gray-800 font-serif"
            style={{ fontSize: "clamp(0.9rem, 3.5vw, 1rem)" }}
          >
            {name}
          </span>
          <a
            href={`tel:${phone}`}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={`${name}에게 전화하기`}
          >
            <PhoneIcon />
          </a>
        </div>

        {/* <p className="text-gray-400 text-sm font-sans">{birth}</p> */}
        <div className="w-8 h-px bg-gray-200" />

        <div className="space-y-0.5 mb-3">
          {tags.map((tag) => (
            <p key={tag} className="text-gray-500 text-sm font-sans font-light">
              {tag}
            </p>
          ))}
        </div>
        <LineBreakText text={resolution} className="text-gray-400 text-sm font-sans" />
        <p className="text-gray-400 text-sm font-sans">{parents}</p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}