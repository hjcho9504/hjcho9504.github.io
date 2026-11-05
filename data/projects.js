// 프로젝트 데이터. 새 프로젝트는 배열 "맨 위"에 { ... }, 를 복사해 붙여넣으면 됩니다.
// 아래 2개는 예시입니다. 실제 내용으로 바꾸거나 지우세요.
//
// 필드 설명
//  id        : 영문/숫자 고유값 (중복 금지)
//  title     : 프로젝트 이름
//  period    : 진행 기간
//  role      : 역할/인원
//  summary   : 카드와 모달 상단에 보이는 한두 줄 요약
//  tags      : 기술/키워드 태그
//  thumbnail : (선택) 카드 상단 이미지 경로. 예: "img/fab-dt.png"
//  details   : 모달에 나오는 소제목 + 설명 목록 (여러 줄은 "\n"으로 줄바꿈)
//  images    : (선택) 모달에 보여줄 이미지 목록 [{ src, caption }]
//  links     : (선택) GitHub, 보고서 등 외부 링크
const PROJECTS = [
  {
    id: "example-fab-dt",
    title: "(예시) 팹 물류 디지털 트윈 시뮬레이션",
    period: "2025.03 – 2025.06",
    role: "팀장 · 4인",
    summary: "AGV/OHT 이동 병목을 시뮬레이션으로 분석하고 배차 규칙을 개선한 프로젝트.",
    tags: ["시뮬레이션", "물류", "Python"],
    thumbnail: "",
    details: [
      { title: "문제 정의", text: "팹 내 반송 대기시간이 특정 구간에서 급증하는 문제를 해결하고자 했습니다." },
      { title: "수행 내용", text: "이산사건 시뮬레이션 모델을 구축하고 배차 규칙 3종을 비교했습니다." },
      { title: "결과", text: "여기에 정량적 성과를 적어주세요. 예: 평균 반송 대기시간 OO% 감소." },
      { title: "배운 점", text: "본인이 맡은 역할과 느낀 점을 적어주세요." }
    ],
    images: [
      // { src: "img/fab-dt-1.png", caption: "시뮬레이션 모델 구조" }
    ],
    links: [
      // { label: "GitHub", url: "https://github.com/..." }
    ]
  },
  {
    id: "example-qc-anomaly",
    title: "(예시) 센서 데이터 기반 이상치 탐지",
    period: "2024.09 – 2024.12",
    role: "개인",
    summary: "공정 센서 데이터에서 Isolation Forest로 불량 징후를 탐지한 프로젝트.",
    tags: ["품질관리", "이상치 탐지", "Python"],
    details: [
      { title: "문제 정의", text: "관리도만으로는 놓치는 다변량 불량 징후를 찾고자 했습니다." },
      { title: "수행 내용", text: "Z-Score, IQR, Isolation Forest 결과를 비교했습니다." },
      { title: "결과", text: "여기에 성과를 적어주세요." }
    ]
  }
];
