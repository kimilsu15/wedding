import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정효 ♥ 예진 저희 결혼합니다",
  description: "2026년 8월 15일, 소중한 분들을 초대합니다.",
  openGraph: {
    title: "정효 ♥ 예진 저희 결혼합니다",
    description: "2026년 8월 15일, 소중한 분들을 초대합니다.",
    images: [
      {
        url: "/og-image.png",  // public 폴더에 이미지 추가
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
