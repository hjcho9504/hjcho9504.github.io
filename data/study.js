// Study 항목 데이터. 카드를 추가/수정하려면 이 배열만 편집하세요.
// body는 HTML 문자열(태그 사용 가능)입니다.
const STUDY = [
  {
    id: "opt",
    ref: "B3:OPT",
    title: "최적화론",
    desc: "수리적 모델링과 메타휴리스틱 알고리즘을 활용한 의사결정 및 자원 배분 최적화.",
    action: "세부 알고리즘 보기 (심플렉스, SA, GA 등)",
    modalTitle: "최적화론 (Optimization Theory)",
    category: "OPERATIONS RESEARCH & MATHEMATICAL MODELING",
    body: `
      <p>제한된 자원 조건 속에서 목표(이익 극대화, 비용 최소화)를 수리적으로 달성하기 위한 의사결정 이론 및 알고리즘을 학습했습니다.</p>
      <div class="detail-box">
        <div class="detail-box-title">1. Simplex Algorithm (심플렉스 알고리즘)</div>
        <p>선형계획법(LP)에서 제약조건 다면체의 꼭짓점을 순차적으로 탐색하여 최적해를 구하는 기본적이고 결정론적인 알고리즘입니다.</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">2. Simulated Annealing (SA / 담금질 기법)</div>
        <p>금속의 냉각 과정을 모방한 확률적 메타휴리스틱 기법입니다. 확률적으로 열등한 해를 허용하여 국소 최적해(Local Optima) 탈출을 가능하게 합니다.</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">3. Genetic Algorithm (GA / 유전자 알고리즘)</div>
        <p>생물 진화론의 선택, 교차, 변이 연산을 활용하는 탐색 기법입니다. 복잡한 조합 최적화 문제(예: 설비 배치, 공정 순서 수립)에서 광범위한 해공간을 효과적으로 탐색합니다.</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">4. Bootstrap (부트스트랩) & 통계적 최적화</div>
        <p>모집단의 분포 형태를 모를 때 재표본추출(Resampling)을 통해 최적화 알고리즘 해의 신뢰구간 및 불확실성(Uncertainty)을 검증하고 안정성을 높입니다.</p>
      </div>`
  },
  {
    id: "scm",
    ref: "B3:SCM",
    title: "공급망 관리 (SCM)",
    desc: "자원 조달, 생산, 물류 유통 네트워크 전체의 효율성 극대화 및 채찍효과 방지.",
    action: "세부 학습 내용 보기",
    modalTitle: "공급망 관리 (Supply Chain Management)",
    category: "LOGISTICS & PRODUCTION NETWORK",
    body: `
      <p>원자재 구매부터 최종 소비자에 이르기까지 전체 공급망 상의 제품, 정보, 자금 흐름을 최적화하는 전략과 정량적 모델을 학습했습니다.</p>
      <ul class="plain-list">
        <li><strong>채찍효과(Bullwhip Effect) 분석:</strong> 공급망 하류의 미세한 수요 변화가 상류로 갈수록 왜곡 증폭되는 현상 방지 전략 연구.</li>
        <li><strong>재고 최적화 (EOQ / Safety Stock):</strong> 보관 비용과 주문 비용 간의 Trade-off를 고려한 적정 안전재고 산정.</li>
        <li><strong>디지털 트윈 및 물류 모의실험:</strong> 팹(Fab) 내 AGV/OHT 이동 병목 현상 완화 및 배차 스케줄링 학습.</li>
      </ul>`
  },
  {
    id: "qc",
    ref: "B3:QC",
    title: "품질 관리",
    desc: "통계적 공정 관리(SPC) 및 데이터 기반 이상치 탐지를 통한 공정 안정화.",
    action: "이상치 탐지 기법 세부 내용 보기",
    modalTitle: "품질 관리 & 이상치 탐지 (Quality Control)",
    category: "STATISTICAL PROCESS CONTROL & DATA ANALYTICS",
    body: `
      <p>공정 데이터의 변동성을 파악하여 품질 불량을 사전에 예방하고 통계적으로 관리하는 방법론을 체득했습니다.</p>
      <div class="detail-box">
        <div class="detail-box-title">1. 통계적 공정 관리 (SPC & 관리도)</div>
        <p>X̄-R 관리도 등을 이용하여 공정 신호의 우연원인과 이상원인을 구분하고 공정능력지수(Cp, Cpk)를 평가합니다.</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">2. 데이터 기반 이상치 탐지 (Anomaly Detection)</div>
        <p>제조 센서 데이터 등 다변량 공정 데이터에서 정상 패턴을 벗어나는 불량 징후를 사전에 포착합니다.</p>
        <ul class="plain-list small">
          <li><strong>Z-Score & IQR:</strong> 단변량 데이터에서 급격한 센서 변동 및 이상값 제거.</li>
          <li><strong>Isolation Forest / LOF:</strong> 공정 데이터 간의 밀도 및 구조적 거리를 분석하여 다변량 고차원 이상치 탐지.</li>
          <li><strong>Autoencoder 기반 탐지:</strong> 정상 데이터를 재구성(Reconstruction Error)하는 딥러닝 기법으로 미세 불량 검출.</li>
        </ul>
      </div>`
  }
];
