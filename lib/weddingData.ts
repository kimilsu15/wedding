// 여기서 청첩장 내용을 수정하세요
export const weddingData = {
  // 신랑 신부 정보
  groom: {
    name: "이정효",
    lastName: "이",
    firstName: "정효",
    english: "Junghyo Lee",
    father: "이xx",
    mother: "박xx",
    phone: "010-1234-5678",
  },
  bride: {
    name: "김예진",
    lastName: "김",
    firstName: "예진",
    english: "Yejin Kim",
    father: "김형복",
    mother: "심연미",
    phone: "010-3378-2724",
  },

  // 결혼식 정보
  wedding: {
    date: "2026년 8월 15일 토요일",
    dateObj: new Date("2026-08-15T11:30:00"),
    time: "오전 11시 30분",
    venue: "부산",
    venueDetail: "부산 중구 어쩌구 저쩌구",
    venuePhone: "02-1234-5678",
    mapUrl: "https://map.kakao.com",
    latitude: 37.527086,
    longitude: 127.049367,

    // 교통 정보
    subway: "7호선 청담역 2번 출구 도보 5분",
    bus: "간선버스 146, 341 | 청담역 정류장 하차",
    parking: "지하 주차장 이용 가능 (2시간 무료)",
  },

  // 인사말
  greeting: {
    title: "저희 결혼합니다",
    message: `서로 다른 길을 걸어온 두 사람이
이제 하나의 길을 함께 걷고자 합니다.

오랫동안 기다려온 그 날,
소중한 분들의 축복 속에서
새로운 시작을 맞이하려 합니다.

귀한 걸음 해주시어
저희의 첫 날을 더욱 빛내주시면
더없는 기쁨이겠습니다.`,
  },

  // 갤러리 이미지 (실제 이미지 URL로 교체)
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      alt: "웨딩 사진 1",
      featured: true,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&q=80",
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

  // 계좌 정보
  accounts: [
    {
      side: "신랑측",
      name: "이준호",
      bank: "카카오뱅크",
      number: "3333-01-1234567",
    },
    {
      side: "신랑측 혼주",
      name: "이철수",
      bank: "신한은행",
      number: "110-123-456789",
    },
    {
      side: "신부측",
      name: "김서연",
      bank: "토스뱅크",
      number: "1000-1234-5678",
    },
    {
      side: "신부측 혼주",
      name: "김민준",
      bank: "국민은행",
      number: "123456-78-901234",
    },
  ],
};
