// 여기서 청첩장 내용을 수정하세요
export const weddingData = {
  // 신랑 신부 정보
  groom: {
    name: "이정효",
    lastName: "이",
    firstName: "정효",
    english: "Junghyo Lee",
    father: "이인수",
    mother: "오희순",
    phone: "010-1234-5678",
    birth : "94년 8월 30일",
    tags: ["유머러스함", "운동 러버"],
    resolution : "소나무같은 남편이/br되겠습니다",
    parents : "이인수·오희순의 장남",
    imageSrc: "/images/wedding_info/groom.jpg"
  },
  bride: {
    name: "김예진",
    lastName: "김",
    firstName: "예진",
    english: "Yejin Kim",
    father: "김형복",
    mother: "심연미",
    phone: "010-3378-2724",
    birth: "96년 6월 8일",
    tags: ["웃음이많음", "밥 러버"],
    resolution : "햇살같은 아내가/br되겠습니다",
    parents : "김형복·심연미의 장녀",
    imageSrc: "/images/wedding_info/bride.jpg"
  },

  // 결혼식 정보
  wedding: {
    date: "2026년 8월 15일 토요일",
    dateObj: new Date("2026-08-15T11:30:00"),
    time: "오전 14시 30분",
    venue: "국민연금공단 1층 컨벤션홀",
    venueDetail: "부산 연제구 중앙대로 1000",
    venuePhone: "02-1234-5678",
    mapUrl: "https://map.kakao.com",
    latitude: 37.527086,
    longitude: 127.049367,
     isoDate: "2026-08-15",                          // Date 파싱용 (달력 자동 계산)
    dateLabel: "2026년 8월 15일 금요일 오전 11시 30분", // 화면에 표시할 텍스트

    // 교통 정보
    subway: "7호선 청담역 2번 출구 도보 5분",
    bus: "간선버스 146, 341 | 청담역 정류장 하차",
    parking: "지하 주차장 이용 가능 (2시간 무료)",
  },

  // 인사말
  greeting: {
    title: "소중한 분들을 초대합니다.",
    message: `2017년 6월 9일,
서로의 하루가 되기로 한 두사람

아홉 번의 계절을 함께 지나,
2026년 8월 15일
평생의 한 팀이 되려 합니다.

저희의 가장 빛나는 순간에 함께하시어
따뜻한 축복으로 두사람의 앞날을 밝혀주세요.`, 
  },
  

  // 갤러리 이미지 (실제 이미지 URL로 교체)
  gallery: [
    {
      id: 1,
      src: "/images/hero/heroSection.png",
      alt: "웨딩 사진 1",
      featured: true,
    },
    {
      id: 2,
      src: "/images/wedding_info/wedding_info.jpg",
      alt: "웨딩 사진 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400&q=80",
      alt: "웨딩 사진 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80",
      alt: "웨딩 사진 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
      alt: "웨딩 사진 5",
    },
  ],

  gall: [
  {
    id: 1,
    src: "/images/gallery/SEN_0052.jpg",
    alt: "웨딩 사진 1",
    featured: true,
  },
  {
    id: 2,
    src: "/images/gallery/SEN_0353.jpg",
    alt: "웨딩 사진 2",
  },
  {
    id: 3,
    src: "/images/gallery/SEN_0449.jpg",
    alt: "웨딩 사진 3",
  },
  {
    id: 4,
    src: "/images/gallery/SEN_0608.jpg",
    alt: "웨딩 사진 4",
  },
  {
    id: 5,
    src: "/images/gallery/SEN_0669.jpg",
    alt: "웨딩 사진 5",
  },
  {
    id: 6,
    src: "/images/gallery/SEN_0791.jpg",
    alt: "웨딩 사진 6",
  },
  {
    id: 7,
    src: "/images/gallery/SEN_0827.jpg",
    alt: "웨딩 사진 7",
  },
  {
    id: 8,
    src: "/images/gallery/SEN_0892.jpg",
    alt: "웨딩 사진 8",
  },
  {
    id: 9,
    src: "/images/gallery/SEN_1054.jpg",
    alt: "웨딩 사진 9",
  },
  {
    id: 10,
    src: "/images/gallery/SEN_1082.jpg",
    alt: "웨딩 사진 10",
  },
  {
    id: 11,
    src: "/images/gallery/SEN_1344.jpg",
    alt: "웨딩 사진 11",
  },
  {
    id: 12,
    src: "/images/gallery/SEN_1361.jpg",
    alt: "웨딩 사진 12",
  },
  {
    id: 13,
    src: "/images/gallery/SEN_1509.jpg",
    alt: "웨딩 사진 13",
  },
  {
    id: 14,
    src: "/images/gallery/SEN_1690.jpg",
    alt: "웨딩 사진 14",
  },
  {
    id: 15,
    src: "/images/gallery/SEN_1904.jpg",
    alt: "웨딩 사진 15",
  },
  {
    id: 16,
    src: "/images/gallery/SEN_2075.jpg",
    alt: "웨딩 사진 16",
  },
  {
    id: 17,
    src: "/images/gallery/SEN_2173.jpg",
    alt: "웨딩 사진 17",
  },
  {
    id: 18,
    src: "/images/gallery/SEN_2276.jpg",
    alt: "웨딩 사진 18",
  },
  {
    id: 19,
    src: "/images/gallery/SEN_2315.jpg",
    alt: "웨딩 사진 19",
  },
  {
    id: 20,
    src: "/images/gallery/SEN_2345.jpg",
    alt: "웨딩 사진 20",
  },
  {
    id: 21,
    src: "/images/gallery/SEN_2380.jpg",
    alt: "웨딩 사진 21",
  },
  {
    id: 22,
    src: "/images/gallery/SEN_2408.jpg",
    alt: "웨딩 사진 22",
  },
  {
    id: 23,
    src: "/images/gallery/SEN_2432.jpg",
    alt: "웨딩 사진 23",
  },
  {
    id: 24,
    src: "/images/gallery/SEN_2473.jpg",
    alt: "웨딩 사진 24",
  },
  {
    id: 25,
    src: "/images/gallery/SEN_2522.jpg",
    alt: "웨딩 사진 25",
  },
  {
    id: 26,
    src: "/images/gallery/SEN_2539.jpg",
    alt: "웨딩 사진 26",
  },
  {
    id: 27,
    src: "/images/gallery/SEN_2673.jpg",
    alt: "웨딩 사진 27",
  },
  {
    id: 28,
    src: "/images/gallery/SEN_2902.jpg",
    alt: "웨딩 사진 28",
  },
  {
    id: 29,
    src: "/images/gallery/SEN_2994.jpg",
    alt: "웨딩 사진 29",
  },
  {
    id: 30,
    src: "/images/gallery/SEN_3033.jpg",
    alt: "웨딩 사진 30",
  },
  {
    id: 31,
    src: "/images/gallery/SEN_3116.jpg",
    alt: "웨딩 사진 31",
  },
  {
    id: 32,
    src: "/images/gallery/SEN_3218.jpg",
    alt: "웨딩 사진 32",
  },
  {
    id: 33,
    src: "/images/gallery/SEN_3319.jpg",
    alt: "웨딩 사진 33",
  },
  {
    id: 34,
    src: "/images/gallery/SEN_3434.jpg",
    alt: "웨딩 사진 34",
  },
  {
    id: 35,
    src: "/images/gallery/SEN_3450.jpg",
    alt: "웨딩 사진 35",
  },
  {
    id: 36,
    src: "/images/gallery/SEN_3470.jpg",
    alt: "웨딩 사진 36",
  },
  {
    id: 37,
    src: "/images/gallery/SEN_3556.jpg",
    alt: "웨딩 사진 37",
  },
  {
    id: 38,
    src: "/images/gallery/SEN_3622.jpg",
    alt: "웨딩 사진 38",
  }
],

  story: [
    {
      imageSrc: "/images/timeline/first_timeLine.jpg",
      label: "첫 만남",
      highlight: undefined,
      description: "저희는 미식축구 동아리에서\n처음 만났어요.",
      // imagePosition 미지정 → index 0 = 이미지 왼쪽
    },
    {
      imageSrc: "/images/timeline/second_timeLine.jpg",
      label: "1주년",
      highlight: "함께한 1년",
      description: "서로를 알아가는 시간\n이었어요.",
      // index 1 = 이미지 오른쪽
    },
    {
      imageSrc: "/images/timeline/third_timeLine.jpg",
      label: "9주년",
      highlight: "함께한 9년",
      description: "우리는 결혼을 결심했어요.",
      // index 2 = 이미지 왼쪽
    },
    {
      imageSrc: "/images/timeline/fourth_timeLine.jpg",
      label: "WeddingDay",
      highlight: undefined,
      description: "저희는 이날 결혼해요.\n저희의 시작을\n축하해주세요.",
      // index 3 = 이미지 오른쪽
    },
  ],

  // 계좌 정보
  accounts: {
    groom: [
      {
        role: "신랑",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "김도연",
        kakaoPayLink: "https://qr.kakaopay.com/...", // 카카오페이 송금 링크 (없으면 삭제)
      },
      {
        role: "신랑 아버지",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "김종혁",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
      {
        role: "신랑 어머니",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "최은혜",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
    ],
    bride: [
      {
        role: "신부",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "이지유",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
      {
        role: "신부 어머니",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "이주영",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
      {
        role: "신부 어머니",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "강지은",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
    ],
  },
  location: {
    venueName: "국민연금웨딩홀",
    venueDetail: "1층 컨벤션홀",
    address: "부산광역시 연제구 중앙대로 1000 W웨딩 국민연금 부산 웨딩홀",
    lat: 35.177860 ,   // ← 실제 위도로 교체
    lng: 129.075639,  // ← 실제 경도로 교체
    transport: [
      {
        title: "버스",
        lines: [
          "29번, 86번, 87번, 99번, 110-1번, 131번, 141번, 179번",
        ],
      },
      {
        title: "지하철",
        lines: [
          "1호선 시청역 하차(2번 출구 이용)",
        ],
      },
      {
        title: "주차",
        lines: [
          "국민연금 빌딩 지하2층~4층(3시간 무료주차)",
        ],
      },
    ],
  },
};
