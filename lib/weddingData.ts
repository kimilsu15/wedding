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
    phone: "010-9129-8957",
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
    venue: "국민연금웨딩홀 1층 컨벤션(CONVENTION)홀 ",
    venueDetail: "부산 연제구 중앙대로 1000",
    venuePhone: "02-1234-5678",
    mapUrl: "https://map.kakao.com",
    latitude: 37.527086,
    longitude: 127.049367,
     isoDate: "2026-08-15",                          // Date 파싱용 (달력 자동 계산)
    dateLabel: "2026년 8월 15일 금요일 오후 2시 30분", // 화면에 표시할 텍스트

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
      src: "/images/hero/heroSection.jpg",
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
    src: "/images/gallery/SEN_0052.png",
    alt: "웨딩 사진 1",
    featured: true,
  },
  {
    id: 2,
    src: "/images/gallery/SEN_0353.png",
    alt: "웨딩 사진 2",
  },
  {
    id: 4,
    src: "/images/gallery/SEN_0608.png",
    alt: "웨딩 사진 4",
  },
  {
    id: 6,
    src: "/images/gallery/SEN_0791.png",
    alt: "웨딩 사진 6",
  },
  {
    id: 7,
    src: "/images/gallery/SEN_0827.png",
    alt: "웨딩 사진 7",
  },
  {
    id: 9,
    src: "/images/gallery/SEN_1054.png",
    alt: "웨딩 사진 9",
  },
  {
    id: 11,
    src: "/images/gallery/SEN_1344.png",
    alt: "웨딩 사진 11",
  },
  {
    id: 12,
    src: "/images/gallery/SEN_1361.png",
    alt: "웨딩 사진 12",
  },
  {
    id: 13,
    src: "/images/gallery/SEN_1509.png",
    alt: "웨딩 사진 13",
  },
  {
    id: 14,
    src: "/images/gallery/SEN_1690.png",
    alt: "웨딩 사진 14",
  },
  {
    id: 16,
    src: "/images/gallery/SEN_2075.png",
    alt: "웨딩 사진 16",
  },
  {
    id: 17,
    src: "/images/gallery/SEN_2173.png",
    alt: "웨딩 사진 17",
  },
  {
    id: 20,
    src: "/images/gallery/SEN_2345.png",
    alt: "웨딩 사진 20",
  },
  {
    id: 22,
    src: "/images/gallery/SEN_2408.png",
    alt: "웨딩 사진 22",
  },
  {
    id: 24,
    src: "/images/gallery/SEN_2473.png",
    alt: "웨딩 사진 24",
  },
  {
    id: 25,
    src: "/images/gallery/SEN_2522.png",
    alt: "웨딩 사진 25",
  },
  {
    id: 26,
    src: "/images/gallery/SEN_2539.png",
    alt: "웨딩 사진 26",
  },
  {
    id: 28,
    src: "/images/gallery/SEN_2902.png",
    alt: "웨딩 사진 28",
  },
  {
    id: 30,
    src: "/images/gallery/SEN_3033.png",
    alt: "웨딩 사진 30",
  },
  {
    id: 32,
    src: "/images/gallery/SEN_3218.png",
    alt: "웨딩 사진 32",
  },
  {
    id: 33,
    src: "/images/gallery/SEN_3319.png",
    alt: "웨딩 사진 33",
  },
  {
    id: 34,
    src: "/images/gallery/SEN_3434.png",
    alt: "웨딩 사진 34",
  },
  {
    id: 37,
    src: "/images/gallery/SEN_3556.png",
    alt: "웨딩 사진 37",
  },
  {
    id: 38,
    src: "/images/gallery/SEN_3622.png",
    alt: "웨딩 사진 38",
  }
],

  story: [
    {
      imageSrc: "/images/timeline/first_timeLine.jpg",
      label: "첫 만남",
      highlight: undefined,
      description: "저희는 미식축구 동아리에서/br처음 만났어요.",
      // imagePosition 미지정 → index 0 = 이미지 왼쪽
    },
    {
      imageSrc: "/images/timeline/second_timeLine.jpg",
      label: "1주년",
      highlight: "함께한 1년",
      description: "서로를 알아가는 시간/br이었어요.",
      // index 1 = 이미지 오른쪽
    },
    {
      imageSrc: "/images/timeline/fifth_timeLine.png",
      label: "5주년",
      highlight: undefined,
      description: "함께 보낸 시간만큼/br사랑 이상의/br마음을 가지게 되었어요.",
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
      description: "저희는 이날 결혼해요./br저희의 시작을/br축하해주세요.",
      // index 3 = 이미지 오른쪽
    },
  ],

  // 계좌 정보
  accounts: {
    groom: [
      {
        role: "신랑",
        bank: "신한은행",
        account: "110484028651",
        holder: "이정효",
        kakaoPayLink: "https://qr.kakaopay.com/...", // 카카오페이 송금 링크 (없으면 삭제)
      },
    ],
    bride: [
      {
        role: "신부",
        bank: "농협은행",
        account: "351-0358-2085-53",
        holder: "김예진",
        kakaoPayLink: "https://qr.kakaopay.com/...",
      },
      {
        role: "신부 아버지",
        bank: "카카오뱅크",
        account: "1111-1111-1111-1111",
        holder: "김형복",
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
