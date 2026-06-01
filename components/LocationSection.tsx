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

// ─── 카카오맵 타입 선언 ───────────────────────────────────────
declare global {
  interface Window {
    kakao: any;
  }
}

// ─── 카카오맵 컴포넌트 ───────────────────────────────────────
function KakaoMap({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

    const initMap = () => {
      if (!mapRef.current || !window.kakao?.maps) return;
      window.kakao.maps.load(() => {
        const coords  = new window.kakao.maps.LatLng(lat, lng);
        const map     = new window.kakao.maps.Map(mapRef.current, {
          center: coords,
          level: 4,
        });
        const marker  = new window.kakao.maps.Marker({ position: coords });
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:6px 10px;font-size:12px;font-family:sans-serif;white-space:nowrap;">${name}</div>`,
        });
        infowindow.open(map, marker);
      });
    };

    // 이미 로드된 경우
    if (window.kakao?.maps) {
      initMap();
      return;
    }

    // 스크립트 동적 삽입
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, [lat, lng, name]);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-sm overflow-hidden"
      style={{ height: "220px" }}
      aria-label="지도"
    />
  );
}

// ─── 내비 버튼 ───────────────────────────────────────────────
interface NavButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function NavButton({ href, icon, label }: NavButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-sm text-gray-600 hover:bg-gray-50 transition-colors"
      style={{ fontSize: "0.82rem" }}
    >
      {icon}
      <span className="font-sans font-light">{label}</span>
    </a>
  );
}

// ─── 교통편 블록 ─────────────────────────────────────────────
function TransportBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <p className="text-gray-700 font-serif mb-2" style={{ fontSize: "0.95rem" }}>
        {title}
      </p>
      {lines.map((line, i) => (
        <p key={i} className="text-gray-500 font-sans font-light" style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>
          {line}
        </p>
      ))}
    </div>
  );
}

// ─── 메인 섹션 ────────────────────────────────────────────────
export default function LocationSection() {
  const titleFade  = useFadeIn();
  const addrFade   = useFadeIn();
  const mapFade    = useFadeIn(0.05);
  const navFade    = useFadeIn();
  const transFade  = useFadeIn();

  const { lat, lng, venueName, venueDetail, address, transport } = weddingData.location;

  // 내비 딥링크
  const encodedName = encodeURIComponent(venueName);
  const kakao  = `kakaomap://look?p=${lat},${lng}`;

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
          오시는 길
        </h2>
      </div>

      {/* 장소명 & 주소 */}
      <div
        ref={addrFade.ref}
        className={`text-center mb-6 transition-all duration-700 delay-100 ${
          addrFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <p className="text-gray-700 font-serif" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1rem)" }}>
            {venueName}
          </p>
          {/* <a href={`tel:`} aria-label="전화하기" className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a> */}
        </div>
        <p className="text-gray-500 font-sans font-light" style={{ fontSize: "clamp(0.78rem, 3vw, 0.88rem)" }}>
          {venueDetail}
        </p>
        <p className="text-gray-500 font-sans font-light mt-1" style={{ fontSize: "clamp(0.78rem, 3vw, 0.88rem)" }}>
          {address}
        </p>
      </div>

      {/* 카카오맵 */}
      <div
        ref={mapFade.ref}
        className={`max-w-lg mx-auto mb-4 transition-all duration-700 delay-150 ${
          mapFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <KakaoMap lat={lat} lng={lng} name={venueName} />
      </div>

      {/* 내비 버튼 */}
      <div
        ref={navFade.ref}
        className={`max-w-lg mx-auto mb-10 transition-all duration-700 delay-200 ${
          navFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* <div className="flex gap-2">
          <NavButton
            href={tmap}
            label="티맵"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#2871EA"/>
                <path d="M12 5l1.5 4.5H18l-3.75 2.73 1.43 4.4L12 14l-3.68 2.63 1.43-4.4L6 9.5h4.5L12 5z" fill="white"/>
              </svg>
            }
          />
          <NavButton
            href={kakao}
            label="카카오내비"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#FEE500"/>
                <path d="M12 5C8.13 5 5 7.69 5 11c0 2.11 1.3 3.97 3.26 5.08L7.5 19l3.34-2.18c.38.05.77.08 1.16.08 3.87 0 7-2.69 7-6s-3.13-6-7-6z" fill="#3A1D1D"/>
              </svg>
            }
          />
          <NavButton
            href={naver}
            label="네이버지도"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#03C75A"/>
                <path d="M13.5 7h-3v4.25L7 7H4.5v10H7.5v-4.25L11 17h2.5V7z" fill="white" transform="translate(1.5,0)"/>
              </svg>
            }
          />
        </div> */}
      </div>

      {/* 구분선 */}
      <div className="max-w-lg mx-auto flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-gray-200 text-xs">♥</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* 교통 정보 */}
      <div
        ref={transFade.ref}
        className={`max-w-lg mx-auto space-y-7 transition-all duration-700 delay-100 ${
          transFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {transport.map((item) => (
          <TransportBlock key={item.title} title={item.title} lines={item.lines} />
        ))}
      </div>
    </section>
  );
}