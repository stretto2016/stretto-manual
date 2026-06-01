// 시작: src/data/manualData.js 전체 교체 (7단계 확장 및 1, 2장 작성)
export const manualData = [
  // 시작: src/data/manualData.js 1장 디테일 심화 및 문장 구조 개편
  // 시작: src/data/manualData.js 1장 전체 데이터 정밀 보강
  {
    phaseId: 1,
    phaseTitle: "1 비즈니스 모델 및 예산 기획",
    sections: [
      {
        sectionId: "1.1",
        sectionTitle: "1.1 매장 규모별 비즈니스 모델 정의",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">소형 테이크아웃 전문점</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">초고속 회전율 및 박리다매 수익 구조</strong>
공간의 제약을 극복하기 위해 테이크아웃과 배달 플랫폼에 매출의 절대다수를 의존하는 모델임. 좌석 점유율에 따른 수익 한계가 없으므로 피크 타임의 주문 처리 속도가 곧 일매출의 상한선을 결정함.
예를 들어 출근 시간대와 점심시간에 트래픽이 집중되므로 메뉴 라인업을 제조 속도가 빠른 핵심 음료 위주로 슬림화해야 함. 객단가가 낮은 대신 원가율을 엄격하게 통제하고 직관적인 동선 기획으로 바리스타 일인당 생산성을 극대화하여 수익을 창출하는 전술을 취함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">소형 및 중형 동네 주거 상권</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">지역 밀착형 커뮤니티 및 리텐션 확보</strong>
불특정 다수보다 매장 반경 일 킬로미터 내의 거주민을 타겟으로 하여 압도적인 재방문율을 이끌어내는 것이 비즈니스의 핵심임. 하루 전반에 걸쳐 트래픽이 고르게 분포하며 고객의 공간 체류 시간이 상대적으로 긺.
예를 들어 오전에는 학부모 모임 수요를 오후에는 재택근무자의 수요를 흡수하기 위해 편안한 좌석과 쾌적한 와이파이 환경을 제공함. 단순한 커피 판매를 넘어 동네의 커뮤니티 공간 역할을 수행하며 수익성을 보완하기 위해 논커피 베리에이션이나 간단한 구움과자를 세트로 구성하여 일인당 객단가를 방어하는 전략이 필수적임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">대형 베이커리 및 외곽형 카페</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">목적 방문형 공간 소비 및 객단가 극대화</strong>
도심을 벗어나 차량을 이용해 방문하는 고객을 타겟으로 하는 공간 중심 비즈니스임. 지나가다 들르는 곳이 아니라 매장 자체가 하나의 온전한 휴식처이자 방문 목적이 되어야 함. 평일과 주말의 매출 편차가 매우 크며 주말과 공휴일에 주간 매출의 70% 이상이 집중되는 특성을 지님.
예를 들어 탁 트인 자연경관이나 압도적인 건축미 등 시각적 차별화 요소가 필수적임. 고객은 커피 한 잔의 물리적 가치를 넘어 공간에 머무는 시간 전체에 프리미엄을 지불함. 따라서 베이커리나 브런치 등 식사를 대체할 수 있는 메뉴를 결합하여 일인당 객단가를 최고 수준으로 끌어올리는 전략이 수반되어야 함. 초기 부지 확보 및 건축에 투입되는 자본의 규모가 가장 크지만 안정화 궤도에 오를 경우 가장 높은 볼륨의 매출액을 확보할 수 있음.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">스페셜티 지향 에스프레소 바</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">하이엔드 미식 경험 제공 및 브랜드 가치 창출</strong>
커피 자체의 압도적인 품질과 바리스타의 전문성에 기꺼이 프리미엄 비용을 지불하는 마니아층을 타겟으로 함. 좌석의 편안함보다는 커피를 추출하고 시음하는 미식 경험 자체를 서비스하는 비즈니스 모델임.
예를 들어 일반적인 아메리카노 외에도 다채로운 싱글 오리진 라인업이나 독창적인 에스프레소 베리에이션 메뉴를 고가에 판매함. 바리스타가 고객과 대면하여 원두의 산지와 가공 방식 등 스토리를 설명하는 도슨트 역할을 수행함. 이러한 하이엔드 이미지는 단기적인 음료 판매 수익을 넘어 향후 원두 납품 비즈니스나 가맹 사업으로 브랜드를 확장하기 위한 가장 강력한 쇼룸이자 포트폴리오로 작동함.</p>`
      },
      {
        sectionId: "1.2",
        sectionTitle: "1.2 현실적인 예산 및 자금 조달 계획",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">초기 투자 비용 매몰 방어</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">보이지 않는 인프라 견적의 함정</strong>
단순히 평당 2백만 원이라는 식의 겉보기 인테리어 단가 산정은 폐업으로 가는 지름길임. 실제 공사에서는 눈에 보이지 않는 설비에 막대한 예산이 투입됨.
예를 들어 낡은 상가의 경우 계약 전력이 오 킬로와트 수준이라 에스프레소 머신 한 대만 켜도 차단기가 떨어짐. 이를 십오 킬로와트로 승압하는 한국전력 불입금 및 배전반 공사 바 스테이션까지 수도관을 끌어오는 코어 타공 및 배관 연장 공사 비용만 수백만 원이 추가됨. 따라서 전체 공사 예산의 최소 이십 퍼센트는 반드시 인프라 예비비로 할당하여 자금 경색을 막아야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">운영 고정비 및 손익분기점 설계</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">생존을 위한 한계이익 역산 모델</strong>
월 임대료는 장마철이나 비수기여도 감당할 수 있도록 예상 월 매출의 십 퍼센트에서 최대 십오 퍼센트 선으로 강력하게 억제해야 함.
예를 들어 월 임대료가 삼백만 원이라면 해당 매장의 생존을 위한 목표 매출은 최소 이천만 원에서 삼천만 원이 되어야 함. 아메리카노 한 잔의 객단가가 사천 원이고 원두 컵 리드 등 변동비가 천 원이라면 한 잔 판매 시 한계이익은 삼천 원임. 임대료와 인건비 등 월 고정비 총액이 구백만 원일 때 적자를 면하기 위해서는 매월 정확히 삼천 잔 즉 하루 백 잔의 아메리카노를 팔아야 한다는 손익분기점 수치가 도출됨. 이 수치를 바탕으로 영업 전략을 세워야 함.</p>`
      },
      {
        sectionId: "1.3",
        sectionTitle: "1.3 브랜드 정체성 구축",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">공감각적 아이덴티티 매핑</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">공간과 철학의 완벽한 동기화</strong>
브랜딩은 단순히 예쁜 로고를 만드는 작업이 아님. 매장의 조도 음악의 장르 가구의 질감 직원들의 응대 톤까지 매장이 지향하는 타겟 페르소나와 일치해야 함.
예를 들어 철제 마감과 노출 콘크리트를 사용한 인더스트리얼 컨셉의 매장이라면 커피 역시 묵직하고 다크한 블렌딩 원두를 사용해야 함. 음악도 베이스가 강조된 로우 템포의 장르를 선택하여 고객의 시각 미각 청각 등 모든 감각 채널에 동일하고 일관된 브랜드 메시지를 전달해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">패키징 확장성 및 시각화 가이드</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">테이스팅 노트의 디자인 자산화</strong>
고객이 매장 밖으로 들고 나가는 테이크아웃 컵과 브로슈어는 가장 강력하고 저렴한 마케팅 수단임.
예를 들어 중강배전 로스팅 레벨의 스트레토 블렌드를 사용할 때 단순히 고소하고 진하다라고 설명하는 대신 초콜릿 아몬드 자스민 건포도 카라멜의 복합적인 향미를 직관적으로 연상시키는 색채와 그래픽이 담긴 컵 노트 카드를 음료와 함께 제공함. 이는 고객에게 스페셜티 커피를 대하는 매장의 전문성을 각인시키고 재방문을 유도하는 훌륭한 시각적 장치로 작용함.</p>`
      }
    ]
  },
// 끝: src/data/manualData.js 1장 전체 데이터 정밀 보강 완료
  // 시작: src/data/manualData.js 2장 상권 분석 및 부동산 계약 전면 보강
  {
    phaseId: 2,
    phaseTitle: "2 상권 분석 및 부동산 계약",
    sections: [
      {
        sectionId: "2.1",
        sectionTitle: "2.1 상권 유형별 타겟 고객 분석",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">오피스 상권</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">초압축 트래픽 대응 및 객단가 방어 전략</strong>
아침 출근 시간과 점심시간 두세 시간 동안 하루 매출의 팔십 퍼센트가 집중되는 트래픽 구조를 가짐. 속도가 곧 매출이므로 바리스타의 동선과 패키징 프로세스를 극단적으로 단축하는 바 설계가 관건임.
예를 들어 메가커피나 컴포즈커피 같은 저가 브랜드의 물량 공세에 밀리지 않기 위해 스페셜티 원두의 가치를 강조하고 프리미엄 오트 밀크 변경이나 고품질 디카페인 라인업을 전면에 배치하여 잔당 한계이익을 방어하는 정밀한 메뉴 설계가 요구됨.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">주거 및 학원가 상권</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">지역 밀착형 커뮤니티 및 체류 시간 통제</strong>
특정 시간대의 폭발적인 트래픽보다는 하루 전반에 걸쳐 고른 매출이 발생함. 오전 시간대 학부모 모임과 저녁 시간대 학원 하원 수요를 모두 흡수해야 하는 상권임.
예를 들어 에스프레소 베이스 음료 외에도 시즌별 과일 에이드나 상하목장 아이스크림 등 가족 단위 고객을 겨냥한 논커피 메뉴가 강력한 무기가 됨. 거주민의 반복적인 방문을 유도하기 위해 카카오톡 기반의 포인트 적립 제도를 도입하고 편안한 좌석을 배치하되 카공족으로 인한 회전율 저하를 막기 위해 콘센트 위치를 전략적으로 제한하는 공간 기획이 수반되어야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">대학가 및 번화가 상권</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">트렌드 선점 및 수익 다각화 유연성</strong>
유행에 가장 민감하고 시각적 자극을 중시하는 이십 대 소비층이 주를 이룸. 커피 본연의 맛을 넘어 인스타그래머블한 시그니처 디저트나 화려한 beverage 라인업이 매장의 흥망을 결정함.
예를 들어 상권 특성상 늦은 밤과 새벽까지 유동 인구가 발생하므로 주간에는 스페셜티 카페로 야간에는 하이볼이나 가벼운 주류를 판매하는 에스프레소 바 형태로 영업시간을 연장하여 임대료 대비 수익을 극대화하는 유연한 전략을 검토해야 함.</p>`
      },
      {
        sectionId: "2.2",
        sectionTitle: "2.2 부동산 계약 전 필수 체크리스트",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">건축물대장 열람 및 위반건축물 점검</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">치명적인 행정 리스크 원천 차단</strong>
상가 임대차 계약 전 건축물대장 발급은 선택이 아닌 필수임. 해당 호실의 용도가 제1종 또는 제2종 근린생활시설 휴게음식점으로 명시되어 있는지 최우선으로 점검해야 함.
예를 들어 이전 세입자가 테라스를 불법으로 증축했거나 매장 내부를 복층으로 개조하여 위반건축물 표기가 노란색 딱지로 붙어 있다면 관할 구청에서 영업신고증 자체가 발급되지 않음. 건물주가 원상복구를 약속하더라도 이행되기 전까지는 절대 계약금을 입금해서는 안 됨.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">상업용 전력 승압 및 배전반 실사</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">피크 타임 셧다운 방지를 위한 인프라 계산</strong>
하이엔드 에스프레소 머신 대형 온수기 상업용 제빙기 천장형 냉난방기를 동시에 가동하려면 최소 십오 킬로와트에서 이십 킬로와트의 전력이 요구됨.
예를 들어 기존 상가의 인입 전력이 오 킬로와트 수준에 불과하다면 한국전력을 통한 승압 공사가 필수적임. 이에 따른 불입금과 내부 메인 배전선로 교체 비용을 인테리어 예산에 수백만 원 단위로 반드시 반영해야 함. 또한 삼상 사선식 전력 인입 여부를 사전에 파악하여 설치할 머신의 스펙과 대조하는 엔지니어링 검토가 선행되어야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">급배수 관로 및 공조 설비 현장 실사</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">동선 제약을 결정짓는 설비 구조 파악</strong>
에스프레소 바가 위치할 메인 스테이션까지 수도관을 끌어오고 배수관을 연결할 수 있는지 상가 바닥의 코어 타공 가능 여부를 점검함.
예를 들어 배수관은 원활한 배출을 위해 최소 오십 밀리미터 이상의 규격을 확보해야 커피 찌꺼기로 인한 역류를 방지할 수 있음. 또한 로스터기나 대형 베이커리 오븐을 운용할 경우 제연기 및 닥트 배기관을 이웃 건물이나 윗층 주거지에 피해 없이 외부로 뽑아낼 수 있는지 건물의 구조적 한계를 현장에서 면밀히 따져야 함.</p>`
      },
      {
        sectionId: "2.3",
        sectionTitle: "2.3 권리금 협상 및 임대차 계약 주의사항",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">장비 엔지니어 관점의 시설 권리금 실사</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">권리금 거품 제거 및 감가상각 평가</strong>
기존 카페 자리를 인수할 경우 영업 권리금과 시설 권리금을 철저히 분리하여 타당성을 검증해야 함. 시설 권리금의 핵심은 에스프레소 머신과 그라인더의 상태임.
예를 들어 겉보기엔 멀쩡한 머신이라도 전문 엔지니어의 시각으로 내부를 열어보면 보일러에 스케일이 가득 누적되어 있거나 로터리 펌프의 추출 압력이 정상 수치에 미치지 못하는 경우가 허다함. 정수 필터 교체 이력조차 불분명하여 전면 오버홀이나 핵심 부품 교체가 필요한 상태라면 해당 수리 견적만큼 시설 권리금을 과감히 삭감하는 협상 카드로 활용해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">임대차 계약 시 필수 특약 사항 방어</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">예기치 못한 설비 리스크의 책임 소재 명확화</strong>
인테리어 공사에 소요되는 기간을 영업 손실로 떠안지 않기 위해 최소 이 주에서 한 달 이상의 렌트프리 즉 무상 임대 기간을 계약서 특약에 명시적으로 확보해야 함.
예를 들어 건물 자체의 노후화로 인한 메인 배수관 막힘이나 천장 누수 등 임차인의 과실이 아닌 중대 하자가 발생할 경우 임대인이 전적으로 수선 의무를 부담한다는 조항을 반드시 삽입해야 함. 이 조항이 누락되면 천장 누수로 인해 에스프레소 머신 메인보드가 침수되는 치명적인 피해를 입고도 전액 자비로 수리해야 하는 최악의 상황을 맞이할 수 있음.</p>`
      }
    ]
  },
// 끝: src/data/manualData.js 2장 상권 분석 및 부동산 계약 전면 보강 완료
  // 시작: src/data/manualData.js 3장 공간 설계 및 바 워크플로우 기획 전면 보강
  {
    phaseId: 3,
    phaseTitle: "3 매장 설계 및 바 동선 기획",
    sections: [
      // 시작: src/data/manualData.js 3.1 섹션 전면 교체
      {
        sectionId: "3.1",
        sectionTitle: "3.1 인테리어 시공 프로세스와 업체 소통법",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">단계별 시공 프로세스와 마일스톤 관리</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">설비 공정의 비가역성 이해</strong>
카페 인테리어는 일반 상가와 달리 급배수와 고용량 전기가 좁은 바 스테이션에 밀집되는 특수 목적 공간임. 철거 및 레이아웃 스케치 단계에서 바의 정확한 위치를 확정해야 함. 이후 바닥을 파내고 배관과 전기를 묻는 설비 공사가 끝나면 동선 수정이 힘들어지므로 목공 및 마감재 공사로 넘어가기 전 반드시 장비 도면과 현장 설비 라인이 일치하는지 교차 검증하는 현장 점검이 필수적임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">견적서 해독 및 명확한 과업 지시</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">추상적 언어 배제와 수치화된 소통</strong>
인테리어 업체와의 분쟁은 대부분 불분명한 요구사항에서 발생함. 따뜻한 느낌이나 모던한 스타일 같은 추상적인 언어를 배제하고 마감재의 정확한 품번 조명의 캘빈 값 바 카운터 상판의 재질과 두께를 명사와 수치로 지시해야 함. 또한 평당 단가로 뭉뚱그린 가견적서가 아닌 자재비와 인건비가 상세히 분리된 물량 산출 내역서를 요구하여 공사 중간에 발생하는 추가금 폭탄 리스크를 원천 차단해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">현장 감리 및 커뮤니케이션 프로토콜</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">기록의 의무화 및 엔지니어 다이렉트 매칭</strong>
시공 중 발생하는 모든 변수와 설계 변경은 구두가 아닌 텍스트와 현장 사진 기록으로 남겨 책임 소재를 명확히 함. 장비가 반입되는 최종 세팅 단계에서는 클라이언트가 중간에 말을 전하는 대신 커피 머신 납품 엔지니어와 인테리어 현장 소장 간의 다이렉트 소통 채널을 개설해 주어야 함. 이를 통해 상판 타공 규격 오류나 전기 결선 실수로 인한 오픈 지연을 막는 것이 효율적인 소통의 핵심임.</p>`
      },
      {
        sectionId: "3.2",
        sectionTitle: "3.2 규모별 최적의 바 워크플로우 설계",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">인체공학적 치수 및 작업 반경 설계</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">근무 인원에 따른 필수 교차 동선 폭</strong>
바 내부의 통로 너비는 근무자의 피로도와 직결되는 가장 중요한 수치임 1인이 단독으로 근무하는 콤팩트 바의 경우 800mm에서 900mm의 통로 폭을 확보하여 깊이 600mm의 언더카운터 냉장고 문을 열고 닫는 데 간섭이 없도록 설계함 반면 2인 이상이 동시에 근무하며 수시로 교차해야 하는 중대형 바는 최소 1200mm를 확보해야 작업자 간의 물리적 충돌을 막고 뜨거운 음료나 워터 보일러로 인한 화상 사고를 예방할 수 있음</p>

<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">바 카운터 상판 규격 및 하부장 매립 스펙</strong>
에스프레소 머신이 올라가는 메인 바의 상판 높이는 900mm가 표준임 이는 탬핑 시 15kg에서 20kg의 압력을 가할 때 어깨와 손목 관절에 무리가 가지 않는 인체공학적 최적 높이임 또한 상업용 테이블 냉장고와 제빙기의 높이가 보통 800mm에서 850mm이므로 이들을 매립하기 위한 필수 공간임 바의 깊이는 하이엔드 상업용 머신의 깊이 600mm를 수용하고 전면부 여유 공간을 확보하기 위해 최소 750mm에서 800mm로 타설해야 함</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">1인 및 2인 소형 바 기기 배치 로직</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">동선 제로를 향한 트라이앵글 세팅</strong>
작업자가 제자리에서 1보 이내로 움직여 모든 음료를 완성하는 것이 핵심임 포스기에서 주문을 받으면 즉시 90도 회전하여 컵과 얼음을 세팅할 수 있도록 일일 생산량 50kg 급의 제빙기를 작업자의 등 뒤 혹은 측면 하부장에 매립함 에스프레소 머신 우측에는 메인 그라인더와 탬핑 스테이션을 두고 바로 아래 상판을 타공하여 매립형 넉박스를 위치시킴 블렌더와 피처 린서는 머신 좌측에 배치하고 폭 600mm 이상의 메인 싱크대와 연계하여 우유 스티밍 후 즉각적인 세척이 가능하도록 세팅함</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">3인 이상 다인원 대형 바 기기 배치 로직</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">컨베이어 벨트식 병목 차단 세팅</strong>
러시 타임에 3명 이상의 바리스타가 투입될 경우 샷 추출 파트 우유 및 논커피 파트 픽업 서비스 파트를 완벽히 분리하는 11자형 평행 바를 구축함 전면 바 중앙에는 3그룹 머신과 듀얼 그라인더를 세팅하고 양쪽 끝단에 싱크대와 피처 린서를 각각 1조씩 독립 설치하여 직원 간 동선 겹침을 방지함 진동과 소음이 심한 블렌더 스테이션은 후면 바에 일렬로 배치함 핵심은 후면 바 하단에 논커피 전담 작업자용 50kg 급 서브 제빙기와 베버리지용 우유 냉장고를 별도로 매립하여 에스프레소 파트의 얼음을 공유하기 위해 교차 이동하는 동선 낭비를 차단함</p>`
      },

      {
        sectionId: "3.3",
        sectionTitle: "3.3 설비 인프라 세부 가이드",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">밀리미터 단위 급배수 관로 타겟팅</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">장비 고장 역류를 방어하는 배관 엔지니어링</strong>
에스프레소 머신 그라인더 제빙기 온수기가 안착될 최종 위치를 입체 도면상에 픽스하고 바닥 단차 타설 전 각 장비의 스펙에 맞는 급배수 라인을 개별적으로 뽑아내야 함.
예를 들어 에스프레소 머신 하부 배수관은 커피 찌꺼기로 인한 배수 불량 및 냄새 역류를 막기 위해 메인 배수구로 향하는 구배를 가파르게 주어야 함. 또한 공냉식 제빙기와 대형 온수기가 밀집된 구역은 과열로 인한 펌프 셧다운을 막기 위해 별도의 배기 그릴과 흡기 팬을 설치하는 기초 열역학 설계가 도면에 선행되어야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">타겟 체류 시간 제어 조명 및 가구 배치</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">공간의 조도를 활용한 심리적 통제</strong>
조명 설계와 가구의 물성은 고객의 매장 체류 시간을 조종하는 가장 조용하고 강력한 무기임.
예를 들어 빠른 회전율이 생명인 테이크아웃 위주의 매장은 캘빈 값이 높은 차가운 백색 조명과 등받이가 없는 스탠딩 테이블을 배치하여 고객의 빠른 퇴장을 유도함. 반면 하이엔드 로스터리 바는 메인 바 스테이션에만 핀 조명을 집중시켜 바리스타의 추출 퍼포먼스를 무대처럼 연출하고 홀 좌석은 눈이 편안한 따뜻한 전구색 조명과 묵직한 목재 가구로 세팅하여 프리미엄 공간 체류 경험을 완성함.</p>`
      }
    ]
  },
// 시작: src/data/manualData.js 4장 장비 및 집기 큐레이션 하이엔드 엔지니어링 보강
  {
    phaseId: 4,
    phaseTitle: "4 장비 및 집기 큐레이션",
    sections: [
      {
        sectionId: "4.1",
        sectionTitle: "4.1 에스프레소 머신 스펙 및 엔지니어링 큐레이션",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">보급형 열교환기 및 중급 듀얼 보일러 머신</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">일일 추출량 기반 보일러 스펙 타겟팅</strong>
일일 추출량 300잔 미만 소규모 매장에는 11L 이상 14L 이하 메인 보일러를 탑재한 열교환기 방식 2그룹 머신 세팅이 합리적임 독립 보일러 시스템이 아니더라도 14L 체급의 스펙을 갖추면 시간당 50잔 이상의 순간 러시 타임을 안정적으로 방어할 수 있음 반면 일일 500잔 이상 트래픽이 발생하는 중대형 매장부터는 그룹헤드별 1L 이상의 독립 보일러와 PID 온도 제어 시스템이 장착된 듀얼 보일러 머신을 필수적으로 도입하여 연속 추출에 따른 그룹헤드 온도 저하 현상을 원천 차단해야 함</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">하이엔드 스페셜티 및 무게 제어 자동화 머신</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">가변압 시스템 및 Gravimetric 머신 도입</strong>
약배전 싱글 오리진의 복합적인 향미를 한계치까지 발현시키기 위해 포화 그룹헤드 방식과 펌프 압력 프로파일링이 가능한 하이엔드 가변압 머신을 운용함 3그룹 이상 하이엔드 머신은 최대 소비 전력이 7kW를 초과하므로 인테리어 설계 단계에서 3상 4선식 380V 전력 인입을 최우선으로 확정해야 함 특히 일일 1000잔 이상을 소화하는 메가 트래픽 매장의 경우 기존 플로우 미터 방식의 유량 제어 한계를 극복하기 위해 드립 트레이 하단에 정밀 로드셀을 장착한 Gravimetric 시스템 머신을 도입함 바리스타의 별도 개입 없이 머신 자체가 실시간으로 추출되는 에스프레소의 무게를 측정하고 타겟 브루 레이시오에 도달하면 펌프를 차단하므로 극한의 러시 타임에도 0.1g 단위의 추출 오차를 완벽하게 통제함</p>`
      },
      // =========================================================================
// 붙여넣을 위치: src/data/manualData.js 파일 내 phaseId: 4 -> sections 배열 안의 4.2 섹션 전체 교체
// 삭제할 코드: 기존 { sectionId: "4.2", sectionTitle: "4.2 정밀 그라인딩 및 브루잉 하드웨어", content: `...` } 객체 전체
// =========================================================================
      {
        sectionId: "4.2",
        sectionTitle: "4.2 정밀 그라인딩 및 브루잉 하드웨어",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">버(Burr) 형태와 사이즈가 추출 수율에 미치는 역학</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">코니컬 버(Conical Burr) vs 플랫 버(Flat Burr)</strong>
원두의 타겟 향미에 따라 그라인더의 칼날(Burr)을 정확히 매칭해야 함. <strong>코니컬 버</strong>는 분쇄 분포도가 상대적으로 넓어 미분(Fines)이 발생하며, 이로 인해 묵직한 바디감과 복합적인 단맛을 끌어내는 데 유리함. 클래식 에스프레소 블렌드나 밀크 베리에이션에 적합함. 반면 <strong>플랫 버</strong>는 입자 균일도가 뛰어나 타겟 수율을 정확히 뽑아낼 수 있으며, 산미의 선명도(Clarity)와 클린컵을 극대화함. 라이트 로스팅된 약배전 싱글 오리진에 필수적임.
<br><br>
<strong class="font-semibold text-stone-900 block mb-1">대구경(Large Burr) 사이즈의 압도적 이점</strong>
71mm를 넘어 80mm 이상의 대구경 칼날을 채택하면 원두가 분쇄되는 면적이 획기적으로 넓어짐. 이는 모터의 회전수(RPM)를 낮춰도 분쇄 속도를 유지할 수 있다는 뜻이며, 결과적으로 칼날의 마찰열(Friction Heat)을 최소화함. 연속 그라인딩 시 원두의 향미 성분이 열에 의해 훼손되는 현상을 방어하는 가장 확실한 물리적 스펙임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">무게 기반 도징(GbW)과 추출(Gravimetric) 시스템</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">인적 오류 제로: Grind by Weight (GbW) 그라인더</strong>
기존 타이머 방식 그라인더는 호퍼에 담긴 원두의 하중에 따라 초당 토출량이 매번 달라지는 치명적인 단점이 있음. 이를 해결하기 위해 포터필터 거치대 쪽에 고정밀 로드셀(Load Cell)을 내장하여 0.1g 단위로 무게를 실시간 측정하는 GbW 그라인더(예: Mahlkönig E65S GbW, Victoria Arduino Mythos MYG85)를 메인 바에 도입해야 함. 바쁜 피크 타임에 바리스타가 포터필터를 저울에 올려 영점을 잡고 원두를 덜어내는 5초의 병목(Bottleneck)을 완벽히 차단함.
<br><br>
<strong class="font-semibold text-stone-900 block mb-1">수율 매니지먼트의 끝판왕: Gravimetric 에스프레소 머신</strong>
플로우 미터(유량계)에 의존하는 일반 머신의 한계를 극복하기 위해, 드립 트레이 자체에 저울이 내장된 무게 제어 기반(Gravimetric) 머신(예: La Marzocco Linea PB ABR, Victoria Arduino Black Eagle Gravitech)을 세팅함. 바리스타가 개입하지 않아도 머신이 실시간으로 추출되는 에스프레소의 질량을 측정하고, 타겟 브루 레이시오(Brew Ratio)에 도달하면 즉각 펌프를 컷오프함. 극한의 러시 타임에도 모든 컵의 추출 오차를 0.5g 미만으로 통제함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">인건비 방어와 일관성을 위한 오토 브루잉(Auto Brewing)</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">핸드드립의 자동화 및 장비별 포지셔닝</strong>
브루잉(필터 커피) 바의 인건비 절감과 추출 일관성을 위해 매장 타겟 고객에 맞는 오토 브루잉 장비를 도입해야 함.
<br><br>
<strong>1. 싱글 컵 브루어 (예: Marco SP9, Poursteady)</strong><br>
장점: 정교한 펄스 브루잉(Pulse Brewing) 횟수와 물줄기 제어가 가능하며, 바리스타의 섬세한 핸드드립 레시피를 완벽히 복제함. 화려한 시각적 퍼포먼스로 하이엔드 스페셜티 매장에 적합함.<br>
단점: 필터 린싱과 원두 도징은 여전히 수동으로 해야 하며, 장비 단가가 에스프레소 머신급으로 매우 고가임.
<br><br>
<strong>2. 배치 브루어 (예: Fetco, Bunn, Moccamaster)</strong><br>
장점: 한 번의 세팅으로 1L에서 3L 이상 대량 추출이 가능함. 추출된 커피를 보온 케그에 담아두면 주문 즉시 탭에서 바로 서브할 수 있어 제조 시간이 1초로 단축됨. 테이크아웃이나 오피스 상권의 '오늘의 커피' 라인업으로 압도적인 효율을 발휘함.<br>
단점: 단일 메뉴 대량 추출 방식이므로 고객이 다양한 싱글 오리진을 선택하는 컵 단위 주문에는 대응하기 어려움.</p>`
      },
      {
        sectionId: "4.3",
        sectionTitle: "4.3 냉장 및 제빙 설비의 장단점 비교와 정수 시스템",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">제빙기 냉각 방식 비교: 공냉식 vs 수냉식</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">매장 통풍 환경과 유지비에 따른 선택</strong>
제빙기는 기계가 얼음을 만들 때 발생하는 뜨거운 열을 어떻게 식히느냐에 따라 두 가지로 나뉨.
<br><br>
<strong>1. 공냉식 제빙기</strong><br>
선풍기처럼 주변 공기로 열을 식히는 방식임. 수도 요금이 적게 들고 설치가 간단하다는 장점이 있음. 하지만 열기를 기계 밖으로 뿜어내기 때문에 좁은 바 카운터 아래에 넣으면 열이 빠져나가지 못해 주변이 매우 더워짐. 특히 한여름에는 기계가 과열되어 얼음이 만들어지는 속도가 느려지거나 기계가 멈출 수 있다는 단점이 있음.
<br><br>
<strong>2. 수냉식 제빙기</strong><br>
수도관을 추가로 연결해 흐르는 물로 열을 식히는 방식임. 주변으로 뜨거운 열기를 내뿜지 않아 작업 환경이 쾌적하고, 밀폐된 공간이나 더운 여름철에도 얼음 생산량이 매우 안정적이라는 것이 가장 큰 장점임. 다만 기계를 식히는 데 물이 계속 소비되므로 공냉식에 비해 수도 요금이 더 많이 나온다는 단점이 있음.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">상업용 냉장고 냉각 방식 비교: 직냉식 vs 간냉식</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">식자재 종류와 관리 편의성에 따른 선택</strong>
<br>
<strong>1. 직냉식 냉장고</strong><br>
냉장고 벽면 안쪽에 깔린 파이프가 차가워지는 방식임. 바람이 불지 않아 수분 유지가 잘 되므로 생과일이나 채소를 보관할 때 신선도가 오래 유지되며, 기계값이 상대적으로 저렴한 편임. 하지만 벽면에 얼음(성에)이 두껍게 생기기 때문에 주기적으로 전원을 끄고 성에를 녹이거나 깨서 청소해야 하는 치명적인 번거로움이 있음.
<br><br>
<strong>2. 간냉식 냉장고</strong><br>
내부의 팬이 차가운 바람을 불어 순환시키는 방식임. 성에가 전혀 생기지 않아 청소와 관리가 매우 편하고, 냉장고 구석구석 온도가 일정하게 유지된다는 장점이 있음. 반면 찬 바람이 계속 불기 때문에 포장하지 않은 식자재는 수분이 날아가 쉽게 마를 수 있다는 단점이 있음. 우유, 시럽, 밀폐 용기에 담긴 디저트 등 카페에서 주로 쓰는 식자재 보관에 유리함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">맛과 기계 수명을 결정하는 정수 시스템 장단점</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">수질에 맞춘 필터 조합의 중요성</strong>
아무리 비싼 장비와 원두를 써도 매장의 물이 맞지 않으면 맛을 낼 수 없음. 무조건 가장 비싼 필터를 사는 것이 아니라, 매장 수돗물의 미네랄 수치를 측정한 뒤 장단점을 고려해 선택해야 함. 
일반적인 정수(카본) 필터는 물맛을 깔끔하게 해 주고 가격이 합리적이지만, 물을 끓일 때 발생하는 딱딱한 석회질을 막지 못해 커피 머신 고장의 원인이 될 수 있음. 반면 연수 필터는 석회질을 걸러내어 수천만 원대 에스프레소 머신의 수명을 늘려주는 확실한 장점이 있지만, 너무 과하게 걸러내면 커피의 기분 좋은 산미와 단맛까지 밋밋해지는 단점이 있음. 따라서 이 두 가지 필터의 특성을 이해하고 매장 수질에 맞게 조합해서 쓰는 것이 가장 정확한 방법임.</p>`
      },
// 시작: src/data/manualData.js 4.4 섹션 자가 진단 리스트 심화
      {
        sectionId: "4.4",
        sectionTitle: "4.4 장비 자가 진단 및 트러블슈팅 가이드",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">장비에 문제가 생겼을 때 무작정 엔지니어를 부르면 시간과 비용이 크게 낭비됨. 현장에서 자주 발생하는 주요 고장 증상과 원인, 그리고 바리스타가 직접 시도해 볼 수 있는 해결 방법을 정리한 트러블슈팅 가이드임. 작업 난이도와 증상을 보고 직접 해결할지 부품 교체 및 수리를 의뢰할지 판단할 수 있도록 구성함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">1. 포터필터 장착 부위에서 물이 샐 때</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
그룹헤드 안쪽의 고무 가스켓이 뜨거운 열에 의해 딱딱하게 경화되어 밀착력이 떨어짐.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
전원을 끄고 송곳이나 뾰족한 도구로 기존 가스켓을 찔러서 빼냄. 새 실리콘 가스켓에 식용 윤활제를 살짝 바른 뒤 포터필터를 이용해 꽉 끼워 넣음. 부품만 구비되어 있다면 누구나 5분 안에 교체 가능하며 통상 3개월에서 6개월 주기로 교체해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">2. 추출을 멈춰도 그룹헤드에서 물이 계속 떨어질 때</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
물길을 열고 닫는 3웨이 솔레노이드 밸브(전자변)에 커피 찌꺼기가 끼어 꽉 닫히지 않거나 밸브 수명이 다함.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
블라인드 바스켓을 끼우고 전용 세정제를 넣어 백플러싱 청소를 5회 이상 반복해 내부 찌꺼기를 강제로 빼냄. 청소 후에도 계속 물이 샌다면 스패너로 밸브 부품을 분해해 내부 스케일을 제거하거나 새 부품으로 교체해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">3. 추출 압력이 9바까지 안 올라가고 바늘이 떨릴 때</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
매장 단수나 정수 필터 막힘에 의한 물 공급 부족, 혹은 머신 내부 로터리 펌프의 수명 저하가 원인임.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
가장 먼저 싱크대 물을 틀어 매장 자체의 단수 여부와 정수 필터 밸브가 잠겨 있는지 확인함. 물 공급이 정상이라면 머신 하부 패널을 열고 펌프의 바이패스 나사를 일자 드라이버로 돌려 압력을 조절해 봄. 그래도 압력이 7바 이하에서 머물거나 이상 소음이 난다면 펌프나 콘덴서 고장이므로 모터 펌프 어셈블리를 통째로 교체해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">4. 스팀 압력이 약하거나 우유가 짝짝이로 나올 때</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
스팀 팁 끝부분의 미세한 구멍에 우유 찌꺼기가 굳어서 막힘, 또는 메인 보일러 히터 고장.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
몽키스패너로 스팀 팁을 분리하여 뜨거운 물과 세정제에 10분간 불림. 핀이나 얇은 철사로 막힌 구멍을 뚫고 헹구어 다시 조립함. 만약 머신 전면의 메인 보일러 압력 게이지 자체가 정상 수치인 1바에서 1.2바를 채우지 못하고 0을 가리킨다면 온도 센서나 히터 코일 고장이므로 부품 수리가 필요함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">5. 추출 시 물줄기가 고르게 떨어지지 않고 사방으로 튈 때</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
샤워 스크린 망 사이사이에 미세한 커피 찌꺼기와 유분이 고착되어 물길이 막히거나 스크린이 휘어짐.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
일자 드라이버로 나사를 풀어 샤워 스크린을 분리함. 세정제를 푼 뜨거운 물에 15분간 담가둔 뒤 전용 칫솔로 부드럽게 문질러 유분을 제거함. 청소 후에도 물줄기가 갈라지거나 철망 자체가 찢어지고 변형되었다면 정상적인 추출 수율을 맞출 수 없으므로 즉시 새 샤워 스크린으로 교체해야 함.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">6. 그라인더 원두가 뭉쳐서 나오거나 토출량이 들쭉날쭉할 때</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">원인</strong>
원두가 나오는 토출구 쪽에 커피 가루가 쌓여 정전기 방지용 플래퍼가 막혔거나 버(칼날) 마모가 심함.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">해결 방법</strong>
그라인더 전원을 완전히 차단하고 청소기 흡입구와 브러시를 이용해 토출구 안쪽의 뭉친 커피 가루를 파내어 긁어냄. 꼼꼼한 청소 후에도 뭉침 현상이 심하고 미분이 많이 발생하여 추출 시간이 매번 달라진다면 버 교체 주기가 지난 것이므로 새 칼날로 교체해야 함.</p>`
      }
// 끝: src/data/manualData.js 4.4 섹션 자가 진단 리스트 심화 완료
    ]
  },
// 시작: src/data/manualData.js 5장 메뉴 기획 및 원가율 설계 전면 보강
  {
    phaseId: 5,
    phaseTitle: "5 메뉴 기획 및 원가율(Cost) 설계",
    sections: [
      {
        sectionId: "5.1",
        sectionTitle: "5.1 시그니처 메뉴 기획과 메뉴판 슬림화",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">선택과 집중을 통한 메뉴판 슬림화</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">재고 폐기율(Loss)을 줄이는 백엔드 기획</strong>
메뉴가 많다고 매출이 오르지 않음. 오히려 안 팔리는 재료가 유통기한을 넘겨 버려지는 폐기율만 높아질 뿐임. 아메리카노와 라떼 같은 필수 커피 메뉴를 제외한 논커피 베리에이션은 최대 5개에서 7개 이하로 제한하는 것이 좋음. 특히 과일 스무디나 생과일주스처럼 손이 많이 가고 재료 보관이 까다로운 메뉴는 과감히 덜어내고, 제조 속도가 빠르며 마진이 좋은 에이드류와 시그니처 밀크티 등으로 라인업을 슬림화해야 바리스타의 노동 피로도를 낮추고 피크 타임 회전율을 높일 수 있음.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">매장의 정체성을 담은 시그니처 베버리지</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">시각적 차별화와 원두 캐릭터의 결합</strong>
다른 카페에는 없는 우리 매장만의 시그니처 메뉴 1개에서 2개는 필수적으로 기획해야 함. 단순히 달콤한 크림을 올리는 것을 넘어, 납품받는 원두의 향미를 극대화하는 레시피가 필요함. 예를 들어 초콜릿, 아몬드, 자스민, 건포도, 카라멜 향미가 특징인 중강배전 스트레토 블렌드를 사용할 경우, 이 원두로 추출한 진하고 묵직한 에스프레소 베이스에 아몬드 우유와 수제 카라멜 크림을 얹어 견과류의 고소함과 단맛을 배가시키는 '너티 카라멜 크림 라떼'를 시그니처로 내세울 수 있음. 이는 시각적으로 화려할 뿐만 아니라 원두의 캐릭터를 완벽히 활용하는 훌륭한 브랜딩 전략임.</p>`
      },
      // 시작: src/data/manualData.js 5.2 섹션 회계 기준 원가율 및 판매가 책정 보강
      {
        sectionId: "5.2",
        sectionTitle: "5.2 부가세와 로스율을 반영한 실원가 책정법",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">공급가액 기준의 원가 계산과 로스율(Loss Rate) 적용</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">숨은 비용과 세무 기준을 적용한 정확한 단가 산출</strong>
모든 식자재 원가는 부가세(VAT) 10%를 제외한 '공급가액' 기준으로 계산해야 함. 매입 시 지불한 부가세는 종합소득세 및 부가세 신고 시 환급받거나 공제되기 때문임. 또한 매일 아침 영점 조절을 위해 버려지는 원두, 스티밍 후 남는 우유 등 필연적으로 발생하는 5% 내외의 로스율을 반드시 원가에 얹어야 함.
<br><br>
아이스 바닐라 라떼 1잔의 원가 역산 예시 (공급가액 기준):<br>
1. 원두: 1kg 30000원 기준 20g 사용 = 600원<br>
2. 우유: 1L 2500원 기준 200ml 사용 = 500원<br>
3. 포장재: 테이크아웃 컵 80원, 뚜껑 30원, 홀더 40원, 빨대 10원 = 160원<br>
4. 기타: 시럽 1펌프 50원, 얼음 및 정수 필터 감가상각 10원<br>
순수 원가 합계는 1320원이며, 여기에 로스율 5%(66원)를 더한 1386원이 1잔의 정확한 실원가임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">실매출 기반의 원가율 계산과 교차 마진 전략</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">부가세 포함 판매가의 함정 피하기</strong>
위 라떼를 메뉴판에 4500원으로 책정했다면, 이 판매가에는 부가세 10%가 포함되어 있음. 즉, 매장 통장에 꽂히는 진짜 내 돈(실매출)은 4091원이고 나머지 409원은 세무서에 낼 세금임.
실매출 4091원 대비 실원가 1386원을 나누면 이 음료의 실제 원가율은 약 33.8%임. 이상적인 카페 식자재 원가율인 30%를 초과하는 수치임. 이처럼 스페셜티 원두나 프리미엄 시럽 사용으로 특정 메뉴의 원가율이 치솟을 경우, 무작정 가격을 5000원으로 올리기보다 원가율이 15% 미만인 아이스티나 티백 차 종류의 판매 비중을 늘려 매장 전체의 '통합 원가율'을 25%에서 30% 사이로 방어하는 교차 마진(Cross Margin) 설계가 외식업 생존의 핵심임.</p>`
      },
{
        sectionId: "5.3",
        sectionTitle: "5.3 카테고리별 메뉴 레시피",
        content: `<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-bold text-stone-900 block mb-1">메뉴 레시피 노트</strong>제시된 레시피는 메뉴 기획을 위한 기본적인 뼈대임. 이를 토대로 각 매장의 상권과 타겟 고객에 맞춰 재료의 배합량을 가감하여, 오너가 만족하는 최상의 시그니처 음료를 완성하는 데 필요한 메뉴 개발 가이드라인으로 활용해야 함.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. Black (블랙 커피 - 에스프레소 & 워터 베이스)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">에스프레소 (Espresso)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">투샷 기준 18g도징, 1:2 ratio 추출시 36g 서브.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">리스트레토 (Ristretto)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">투샷 기준 20~25g으로 짧게 추출하여 산미와 임팩트를 극대화함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 전md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">룽고 (Lungo)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">투샷 기준 50~60g으로 길게 추출함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">에스프레소 마키아토</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">에스프레소 투샷 위에 고운 스팀 폼 30g을 정중앙에 얹음.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">에스프레소 콘파냐</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">에스프레소 투샷 위에 단단하게 휘핑된 동물성 생크림 30g을 올림.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">에스프레소 로마노</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">잔 테두리에 레몬즙을 림 코팅하고, 에스프레소 투샷에 레몬 슬라이스 1조각을 곁들여 서브함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아메리카노 (Americano)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Iced] 물 200g + 얼음 150g + 에스프레소 투샷 <br>[Hot] 뜨거운 물 250g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">롱 블랙 (Long Black)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Iced] 얼음 150g + 물 150g + 에스프레소 투샷 (크레마 보존) <br>[Hot] 뜨거운 물 200g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">헤이즐넛 아메리카노</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">아메리카노 레시피에 헤이즐넛 시럽 20g을 추가함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">배치 브루 / 오늘의 커피</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">모카마스터나 마르코 등 브루어 사용 (원두 60g : 물 1000g 비율). 브루잉 후 케그에 보관하며 주문 시 250g을 즉각 서브함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">커피 테이스팅 플라이트</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">에어로프레스로 각각 다른 원두 2종 추출(원두 15g : 물 200g). 작은 글라스(4oz)에 100g씩 소분하여 서브함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">콜드브루 오리지널</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">원두 1 : 물 10 비율로 12시간 침출식 추출. 서브 시 콜드브루 원액 80g + 물 120g + 얼음 150g으로 세팅함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">니트로 콜드브루</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">1:1로 희석한 콜드브루 원액을 질소 케그에 주입 후, 탭에서 250g을 추출하여 얼음 없이 서브함.</div>
      </div>
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. White (화이트 커피 - 클래식 밀크 베이스)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">코르타도 / 지브롤터</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Hot 전용 4~5oz 글라스] 에스프레소 투샷 + 얇은 스팀 밀크 60g (1:1 비율).</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">피콜로 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Hot 전용 4oz 글라스] 리스트레토 샷 + 스팀 밀크 80g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">플랫 화이트 (Flat White)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Hot 8oz 잔] 에스프레소 투샷 + 마이크로 스팀 밀크 150g (폼 두께 0.5cm 이하).</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">전통 카푸치노</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Hot 8oz 잔] 에스프레소 투샷 + 스팀 밀크 150g (거품 두께 1.5cm 이상 둥글게).</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">알 프레도</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">셰이커에 에스프레소 투샷 + 우유 100g + 얼음 5알을 넣고 강하게 셰이킹 후 거품까지 글라스에 푸어링함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 라떼 (Caffè Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Iced] 우유 200g + 얼음 150g + 에스프레소 투샷 <br>[Hot] 에스프레소 투샷 + 스팀 밀크 250g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">바닐라 / 헤이즐넛 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">아이스 라떼 레시피 + 시럽 25g (에스프레소 샷에 먼저 완벽히 녹임).</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">바닐라 페이스트 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">아이스 라떼 레시피 + 천연 바닐라 빈 페이스트 20g 추가.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">스윗 라떼 / 카라멜 마키아토</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[스윗 라떼] 아이스 라떼 레시피 + 머스코바도 시럽 20g 추가.<br>[마키아토] 아이스 바닐라 라떼 위에 카라멜 소스 15g 드리즐.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 모카 / 화이트 모카</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[Iced] 초코/화이트초코 소스 30g (샷에 완벽히 녹임) + 우유 180g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">오트 / 소이 / 아몬드 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">라떼 레시피에서 일반 우유를 오틀리 등 대체유 200g으로 전량 변경함.</div>
      </div>
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. Variation (베리에이션 - 시그니처 & 크림 & 퓨전)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">크림 베이스 통합 레시피</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">동물성 생크림 7, 식물성 크림 3 비율에 설탕 10%를 섞어 미리 쫀득하게 블렌딩 후 냉장 보관함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아인슈페너 / 크림 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[아인슈페너] 물 100g + 얼음 100g + 샷 위에 크림 60g 얹기.<br>[크림 라떼] 우유 150g + 얼음 100g + 샷 위에 크림 60g 얹기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">브라운 버터 미소 카라멜 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">에스프레소 투샷 + 수제 미소 카라멜 소스 25g(태운 버터, 백된장, 카라멜 1:1:3) 녹임 + 우유 180g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">쿠키 버터 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">에스프레소 투샷 + 로투스 스프레드 20g 녹임 + 넛맥 가루 1톡 + 우유 180g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아이스 놀라 / 놀라 콜드폼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">치커리&커피 혼합 콜드브루 원액 100g + 우유 100g + 사탕수수 시럽 15g + 얼음 150g. (놀라 콜드폼은 위에 바닐라 폼 50g 추가)</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아니세타 / 에스프레소 토닉</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[아니세타] 셰이커에 투샷 + 감초/팔각 시럽 10g + 얼음 넣고 하드 셰이킹 후 마티니 글라스 서브.<br>[토닉] 얼음 150g + 토닉워터 150g + 투샷 살살 붓기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">흑임자 / 쑥 크림 샷 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">우유 150g + 얼음 150g + 에스프레소 투샷 위에 흑임자/쑥 페이스트를 섞은 크림 60g 얹기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아포가토 / 썸머 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[아포가토] 아이스크림 2스쿱 + 투샷 서브. <br>[썸머] 아이스 라떼 레시피(얼음 소량) + 아이스크림 1스쿱 얹기.</div>
      </div>
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">4. Non-Coffee (논커피 - 밀크, 에이드, 티, 블렌디드)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">리얼 딸기 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">딸기청 70g + 얼음 150g + 우유 200g (섞이지 않게 층 내어 푸어링) + 생딸기 다이스 20g 토핑.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">말차 / 녹차 라떼 계열</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">말차 파우더 35g을 뜨거운 물 30ml에 완벽히 녹인 후 얼음 150g + 우유 180g 추가. (응용: 우베 클라우드 마차, 스트로베리 마차 등)</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">딥 초콜릿 라떼 / 핫 초콜릿</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">초코 파우더 25g + 초코 소스 15g을 뜨거운 물 30g에 녹인 후 얼음 150g + 우유 180g 추가.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">밀크티 및 티 라떼 류</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[로얄/얼그레이] 밀크티 액상 베이스 40g + 우유 180g + 얼음 150g.<br>[로즈 카다멈] 장미/카다멈 농축 시럽 25g + 블랙티 베이스 50g + 우유 150g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">스파클링 에이드 류</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">과일청(레몬/자몽 등) 65g + 얼음 150g + 차가운 탄산수 150g (로즈마리 및 건조 과일칩 가니쉬).</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">요거트 스무디 / 프라페</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">블렌더에 우유 120g + 파우더/베이스 50g + 얼음 200g 넣고 20초간 블렌딩함.</div>
      </div>
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">5. Global Signature Vol.1 (오리지널 레시피 1~20)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">민트 모히토 아이스 커피</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[필즈 커피] 민트 잎 10장과 설탕 시럽 20g을 가볍게 찧고 얼음 채움 + 드립 커피 150g + 헤비 크림 50g 토핑.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">스패니쉬 라떼 / 교토 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[% 아라비카] 잔 바닥 가당 연유 30g + 우유 180g + 얼음 150g + 에스프레소 투샷 층 분리.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">안젤리노 (The Angeleno)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[인텔리젠시아] 에스프레소 포샷(약 70g) + 우유 120g + 아가베 시럽 20g + 얼음을 넣고 하드 셰이킹.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">블랙 앤 탄 (Black and Tan)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[라 콜롬브] 얼음 150g + 콜드브루 원액 120g 위에 케그에서 뽑은 질소 주입 드래프트 라떼 120g을 얹음.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">마카다미아 아몬드 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[GGET] 수제 마카다미아 아몬드 밀크 200g + 얼음 150g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">아히 모카 / 스파이시 모카</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[오닉스 커피 랩] 에스프레소 투샷에 다크 초콜릿 소스 25g과 카이엔 페퍼 1꼬집을 녹인 뒤 스팀 밀크 250g 붓기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">메이플 라떼 (Maple Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[버브 커피 로스터스] 에스프레소 투샷 + 퓨어 메이플 시럽 20g + 우유 180g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">비체린 (Bicerin)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[카페 알 비체린] 뜨겁고 묵직한 핫초콜릿 50g + 에스프레소 원샷 + 무가당 생크림 30g을 층지게 쌓아 서브.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 마로키노</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[오르소 라보라토리오] 미니 글라스 벽면에 초콜릿 파우더 더스팅 + 에스프레소 원샷 + 벨벳 밀크폼 30g + 파우더 다시 더스팅.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">더티 차이 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[토비스 에스테이트] 마살라 차이 농축액 30g + 우유 180g + 얼음 150g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">코코넛 콜드브루</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[버브 커피 로스터스] 얼음 150g + 무가당 코코넛 워터 100g + 콜드브루 원액 80g 부어 층 내기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">판단 라떼 (Pandan Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[PPP 커피] 동남아식 판단 시럽 20g + 우유 180g + 얼음 150g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">프레도 에스프레소</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[타프 커피] 에스프레소 투샷 + 설탕 10g + 얼음 2알 넣고 고속 믹싱하여 크레마 폼 생성 후 새 얼음 잔에 푸어링.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">지브랄타 (Gibraltar)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[리추얼 커피 로스터스] 에스프레소 투샷(더블 리스트레토) + 약 55도의 마이크로 스팀 밀크 60g 붓기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 미엘 (Caffè Miel)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[매드캡 커피] 천연 꿀 20g과 시나몬 1톡에 에스프레소 투샷을 부어 녹인 뒤 스팀 밀크 250g 붓기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">브라운 슈가 오트 셰이큰 에스프레소</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[스타벅스 리저브] 에스프레소 투샷 + 흑당 시럽 20g + 시나몬 1톡을 얼음과 하드 셰이킹 후 오트밀크 60g 띄움.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카다멈 라떼 (Cardamom Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[데이글로우] 이국적인 향이 강한 카다멈 농축 시럽 20g + 우유 180g + 얼음 150g + 에스프레소 투샷.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">스모크드 버터스카치 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[스타벅스 로스터리] 훈연 버터스카치 소스 30g 베이스 + 에스프레소 투샷 + 스팀 밀크 250g + 스모크드 슈가 토핑.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">커피 콤부차 (Coffee Kombucha)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[커피 콜렉티브] 발효된 커피 콤부차 원액 50g + 탄산수 120g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">에스프레소 올드 패션드</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[커피 바 공통] 에스프레소 투샷 + 심플 시럽 10g + 앙고스투라 비터스 2대시를 30초간 스터링 후 큐브 얼음에 푸어링 (오렌지 껍질 가니쉬).</div>
      </div>
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">6. Global Signature Vol.2 (오리지널 레시피 21~40)</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2">
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">매직 (Magic)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[호주 멜버른 전역] 더블 리스트레토 샷 + 약 60도의 실키한 마이크로 스팀 밀크 110g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 니코 (Caffè Nico)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[에스프레소 비바체] 에스프레소 투샷 + 오렌지 시럽 10g + 하프앤하프 스팀 60g + 시나몬 1톡 + 신선한 오렌지 제스트.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">드래프트 라떼 (Draft Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[라 콜롬브] 콜드브루와 우유 배합액을 질소 케그에 보관 후 얼음 없는 잔에 350g 추출함.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">범블 커피 (Bumble Coffee)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[동유럽 스페셜티 씬] 얼음 150g + 카라멜 시럽 15g + 100% 착즙 오렌지 주스 150g + 에스프레소 투샷을 선명하게 층 분리.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">더티 라떼 (Dirty Latte)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[베어 폰드 에스프레소] 아주 차가운 우유 120g 표면에 쫀득한 더블 리스트레토 샷을 부어 섞지 않고 서브.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 스트라파짜토</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[나폴리 정통 에스프레소 바] 데미타세 잔 안쪽 카카오 파우더 더스팅 + 설탕 1티스푼 + 에스프레소 원샷 + 10회 강하게 젓기 후 표면 재더스팅.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">로즈 페탈 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[팜 걸 카페] 에스프레소 투샷 + 로즈 워터 15g + 비트 파우더 1g 섞기 + 스팀 밀크 250g + 건조 장미꽃잎 가니쉬.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 피에노 (Caffè Pieno)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[카페 나폴리] 에스프레소 원샷 + 크레미나(수제 설탕 크림) 1스푼 + 잔 테두리를 덮을 정도로 카카오 파우더 듬뿍 뿌려 서브.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">마자그란 (Mazagran)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[오스트리아 빈 카페 씬] 얼음 150g + 레몬즙 20g + 심플 시럽 15g + 찬물 100g + 룽고 에스프레소 더블샷 + 레몬 휠.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">비엔나 멜랑쥬 (Wiener Melange)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[카페 센트럴] 에스프레소 룽고 원샷 + 뜨거운 물 30g + 스팀 밀크 70g + 거친 드라이 밀크폼 듬뿍 얹기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">라벤더 허니 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[고 겟 엠 타이거] 천연 꿀 15g + 라벤더 시럽 10g을 에스프레소 열기에 완전히 녹임 + 우유 180g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">코르타디토 (Cortadito)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[베르사유 레스토랑] 원두와 백설탕을 함께 탬핑해 내린 쿠반 풀 에스프레소 투샷 + 스팀한 무가당 연유 60g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">피스타치오 로즈 워터 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[% 아라비카] 피스타치오 페이스트 20g + 로즈 워터 5g + 우유 180g + 얼음 150g + 에스프레소 투샷 + 다진 피스타치오 분태 토핑.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 수아 다 (Ca Phe Sua Da)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[쯩응우옌 레전드] 가당 연유 40g + 핀 필터로 내린 로부스타 다크 로스팅 원액 80g + 잘게 부순 크러시드 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">베트남 에그 커피 (Cà Phê Trứng)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[카페 장] 계란 노른자 2개, 연유 30g, 꿀 10g을 5분간 고속 휘핑한 에그 크림을 뜨거운 에스프레소 60g 위에 듬뿍 얹기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">위엔양 / 동윤영 (Yuenyeung)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[란퐁유엔] 실론티 블랙티 원액 100g + 무가당 연유 30g + 심플 시럽 15g + 콜드브루 원액 80g + 얼음 150g.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">점적식 오지 드립 / 더치 커피</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[쿠루스] 대형 점적식 기구로 12시간 이상 추출 후 디캔팅. 와인 글라스에 커다란 둥근 얼음 1개와 원액 100g 서브.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">시그니처 티라미수 라떼</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[하이엔드 베이커리 공통] 바닐라 라떼 베이스 위에 마스카포네 치즈 폼 60g 얹기 + 카카오 파우더 더스팅 + 레이디핑거 쿠키 1개 꽂기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">씨 솔트 카라멜 폼 콜드브루</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[아시아권 트렌드] 얼음 150g + 콜드브루 원액 80g + 물 100g + 시럽 10g 베이스 위에 핑크 솔트가 들어간 카라멜 폼 60g 얹기.</div>
      </div>
      <div class="py-3 border-b border-stone-100/50 last:border-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
        <div class="md:w-1/3 font-bold text-stone-800 shrink-0">카페 투바 (Café Touba)</div>
        <div class="md:w-2/3 text-stone-600 leading-relaxed">[세네갈 로컬] 기니 후추와 클로브를 배합해 로스팅한 향신료 원두 20g을 V60으로 200g 푸어오버 추출한 뒤 설탕 10g 녹여 서브.</div>
      </div>
    </div>
  </details>
</div>`
      }
    ]
  },
// =========================================================================
// 붙여넣을 위치: src/data/manualData.js 파일 내 phaseId: 6 전체 
// 삭제할 코드 처음:   { phaseId: 6, phaseTitle: "6 오퍼레이션 및 품질 관리", sections: [
// 삭제할 코드 끝:     ] }, (7장 시작 전까지의 6장 전체 블록)
// =========================================================================

  {
    phaseId: 6,
    phaseTitle: "6 오퍼레이션 및 실무 매니지먼트",
    sections: [
      {
        sectionId: "6.1",
        sectionTitle: "6.1 아르바이트 노무 관리 및 인건비 방어 실무",
        content: `<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4 first:mt-0">근로계약서 작성 및 주휴수당의 실체</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">고용노동부 표준 양식 사용 및 벌금 방어</strong>
알바생이 단 1일을 일하더라도 출근 첫날 근무 시작 전에 근로계약서를 무조건 작성하고 교부해야 함. 미작성 시 최대 500만 원의 벌금이 부과됨. 양식은 고용노동부 홈페이지 정책자료실에서 '표준근로계약서'를 무료로 다운로드하여 사용하면 됨.<br>
<strong class="font-semibold text-stone-900 block mt-2 mb-1">주휴수당 지급 기준과 스케줄링 쪼개기</strong>
주휴수당은 1주일에 15시간 이상 근무하는 모든 근로자(알바 포함)에게 '하루치 일당'을 더 주는 법적 의무임. 시급으로 환산하면 약 20%의 인건비가 폭등하는 치명적인 요소임. 이를 합법적으로 방어하려면 파트타이머의 근무 시간을 주 14시간 이하(예: 주 2일, 하루 7시간 근무)로 쪼개어 여러 명을 채용하는 스케줄링 전략이 필수적임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">4대 보험 가입 의무와 3.3% 프리랜서 신고 리스크</h4>
<p class="text-stone-700 mb-6 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">탈세의 덫과 노동청 고발 원천 차단</strong>
카페 알바생을 세금 덜 내겠다고 3.3% 사업소득자(프리랜서)로 신고하는 관행은 명백한 불법임. 직원이 퇴사 후 노동청에 실근로자임을 주장하며 고발하면, 그동안 미납된 4대 보험료와 과태료 수백만 원을 오너가 독박 쓰게 됨. 월 60시간 이상 근무자는 무조건 4대 보험에 가입시키고, 월 60시간 미만 초단시간 근로자는 산재보험만 가입시키는 것이 가장 안전한 원칙임.</p>

<h4 class="text-xl font-bold text-stone-900 mt-10 mb-4">노무사 기장 대행의 비용과 선택 기준</h4>
<p class="text-stone-700 mb-8 leading-relaxed"><strong class="font-semibold text-stone-900 block mb-1">감정 노동의 외주화 및 피드백 속도</strong>
직원이 3명 이상 넘어가면 급여 명세서 의무 교부, 4대 보험 취득 및 상실 신고, 일자리 안정자금 등 정부 지원금 신청을 오너가 직접 챙기기 불가능함. 매월 10만 원에서 15만 원의 기장료를 내고 노무법인에 아웃소싱하는 것이 정신 건강과 매장 운영에 압도적으로 이로움. 노무사를 선택할 때는 화려한 이력의 대형 법인보다, 실시간 카카오톡 소통이 가능하고 내 질문에 30분 이내로 명확한 가이드를 찍어주는 실무형 노무사를 고르는 것이 핵심임.</p>`
      },
      {
        sectionId: "6.2",
        sectionTitle: "6.2 보이지 않는 재고 로스(Loss) 통제와 원가 방어",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">매출이 높아도 통장에 남는 돈이 없다면 백이면 백 식자재 로스 관리에 구멍이 뚫린 것임. 바리스타의 손끝에서 새어나가는 10원의 손실을 막는 실무 시스템임.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. 시럽 펌프 및 스쿠프 정량화의 절대 원칙</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      바닐라 라떼를 만들 때 '시럽 2펌프'라는 레시피는 쓰레기임. 제조사마다 1펌프의 토출량이 7g, 10g, 15g으로 전부 다름. 알바생이 펌프를 끝까지 누르지 않고 반만 누르는 습관이 있다면 음료 맛은 매번 달라지고 원가 계산은 붕괴됨. 모든 시럽과 소스 병 앞에는 '1펌프 = 10g'이라는 라벨을 붙이고, 전자저울에 올려 정확히 타겟 무게가 들어가는지 매일 확인하는 훈련을 시켜야 함. 파우더 역시 밥숟가락이 아닌 계량스푼을 깎아내어(Leveling) 15g을 정확히 맞추도록 통제해야 함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. 우유 및 빙과류 발주 사이클과 재고 회전</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      우유는 유통기한이 짧아 폐기율 1순위 품목임. 대리점을 통해 매일 배송받는 것이 가장 이상적이나, 최소 물량 제한(예: 하루 10팩 이상)이 있다면 주 3회(월, 수, 금) 분산 발주로 전환하여 냉장고 공간을 확보하고 폐기를 막아야 함. 입고된 우유와 생과일은 무조건 매직으로 입고 날짜를 크게 적고 냉장고 안쪽에 배치하여 완벽한 선입선출(FIFO)이 이루어지도록 매장 룰을 세팅함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. 스티밍 우유 로스율 제로화 훈련</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      라떼 1잔(10oz 잔 기준)을 만들기 위해 우유를 200g 스티밍하고 150g만 부은 뒤 50g을 개수대에 버리는 직원이 있다면 당장 교정해야 함. 하루 100잔이면 5L의 우유(약 13,000원)가 하수구로 버려지는 꼴이며 한 달이면 40만 원의 손실임. 각 사이즈별 밀크 피처 내부에 타겟 용량 선(Line)을 긋고, 버려지는 우유가 10g을 넘지 않도록 스티밍 용량을 극한으로 타겟팅하는 연습을 시켜야 함.
    </div>
  </details>
</div>`
      },
      // =========================================================================
// 붙여넣을 위치: src/data/manualData.js 파일 내 phaseId: 6 -> sections 배열 안의 6.3 섹션 전체 교체
// 삭제할 코드: 기존 { sectionId: "6.3", sectionTitle: "6.3 매장 셧다운을 막는 시설 유지보수 실무", content: `...` } 객체 전체
// =========================================================================
      {
        sectionId: "6.3",
        sectionTitle: "6.3 매장 셧다운을 막는 시설 유지보수 실무",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">커피 머신보다 중요한 것이 매장의 기초 인프라임. 하수구가 막히거나 해충이 발생하면 그날 영업은 강제 종료됨. 오너가 반드시 챙겨야 할 시설 관리 루틴임.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. 배관 설계 한계 극복 및 역류 방어 플러싱</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      싱크대에서 버려지는 우유 찌꺼기와 커피 유분은 배관 내부에 고착되어 단단한 슬러지를 형성함. 애초에 75mm 이상의 넓은 배관 규격과 시원한 구배(기울기)를 확보한 완벽한 설비 환경이라면 큰 문제가 없으나, 배관 설계가 부실하거나 50mm 이하의 얇은 관을 사용하는 노후 상가의 경우 역류 방지를 위해 싱크대 하부에 유지망(그리스트랩) 설치를 고려해야 함. 설비의 완벽함과 무관하게, 영업 마감 시 70도 이상의 뜨거운 물 10L를 메인 배수구에 한 번에 부어 배관 내부에 쌓인 유분을 강제로 밀어내는(플러싱) 작업을 매일 수행하는 것만으로도 배관 막힘을 예방하는 가장 확실하고 경제적인 통제 수단이 됨.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. 정수 필터 교체 주기와 수압 펌프 체크</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      상업용 정수 필터의 교체 주기는 렌털 정수기처럼 개월 수로 정해진 것이 아님. 매장의 물 사용량과 수질에 따라 3개월이 될 수도 6개월이 될 수도 있음. 커피 머신 펌프 압력 게이지가 평소 9바에서 7바 이하로 떨어지거나, 제빙기 얼음 생성 속도가 현저히 느려졌다면 수압이 약해진 것이며 이는 필터가 이물질로 막혔다는 가장 확실한 신호임. 이때 즉시 메인 밸브를 잠그고 스페어 필터로 교체할 수 있도록 항상 여분의 카트리지를 매장에 비치해 두어야 함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. 방역 및 해충 통제(Pest Control) 시스템</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      커피 찌꺼기와 시럽의 단내는 바퀴벌레와 초파리를 끌어들이는 완벽한 환경임. 매장에 한 번 해충이 번식하면 자체 방역으로는 완벽히 해결하기 어려움. 오픈 첫 달부터 전문 방역 업체와 계약하여 정기적인 관리를 받는 것이 유리함. 이는 단순한 위생을 넘어, 배달 앱 리뷰나 고객 컴플레인으로 인한 치명적인 브랜드 이미지 타격을 막는 가장 저렴한 보험임.
    </div>
  </details>
</div>`
      }
    ]
  },
  // =========================================================================
// 붙여넣을 위치: src/data/manualData.js 파일 내 phaseId: 7 전체 
// 삭제할 코드 처음:   { phaseId: 7, phaseTitle: "7 인허가 행정 및 마케팅 오픈", sections: [
// 삭제할 코드 끝:     ] } (파일의 마지막 배열 요소 전체)
// =========================================================================

  {
    phaseId: 7,
    phaseTitle: "7 인허가 행정 및 마케팅 오픈",
    sections: [
      {
        sectionId: "7.1",
        sectionTitle: "7.1 필수 행정 절차와 절세 타임라인",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">구청과 세무서를 오가며 시간을 낭비하지 않으려면 행정 절차의 순서를 정확히 지켜야 함. 특히 초기 투자금의 부가세를 환급받기 위한 타임라인 엄수가 핵심임.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. 순서가 생명인 인허가 발급 타임라인</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      보건증 발급은 검사 후 수령까지 최소 1주일이 소요되므로 가장 먼저 보건소에 방문해야 함. 이후 한국휴게음식업중앙회에서 주관하는 온라인 위생교육을 수료함. 이 2가지 서류와 임대차계약서, 신분증을 지참해야만 관할 구청에서 '영업신고증' 발급이 가능함. 영업신고증 없이는 다음 단계인 사업자등록이 불가능하므로 반드시 이 순서를 지켜야 함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. 인테리어 부가세 환급을 위한 사업자등록 선발급</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      수천만 원이 깨지는 인테리어 대금과 에스프레소 머신 구매 시 부가세 10%를 환급받는 것이 초기 자금 방어의 핵심임. 영업신고증이 나오기 전이라도, 임대차계약서와 신분증을 지참해 관할 세무서에 가면 '오픈 예정'으로 사업자등록증 선발급이 가능함. 이를 통해 장비 계약 및 공사 대금 송금 시 반드시 매장 사업자 번호로 세금계산서를 발급받아 두어야 추후 온전하게 부가세를 돌려받을 수 있음.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. 영업신고 현장 실사와 위반건축물 리스크 통제</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      영업신고증 발급 과정 혹은 발급 후 1개월 내에 구청 위생과에서 현장 실사를 나옴. 이때 도면과 다르게 불법 증축된 테라스 공간이나 허가받지 않은 복층 구조가 적발되면, 즉시 철거 명령과 함께 막대한 이행강제금이 부과됨. 오픈 직후 영업이 중단되는 치명적인 상황을 피하려면 인테리어 설계 단계부터 건축물대장에 위배되지 않는 합법적인 가이드라인을 엄수해야 함.
    </div>
  </details>
</div>`
      },
      {
        sectionId: "7.2",
        sectionTitle: "7.2 로컬 알고리즘 최적화 및 초기 마케팅",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">전단지를 돌리는 시대는 끝났음. 로컬 카페의 성패는 고객이 지도 앱을 켰을 때 우리 매장이 어떻게, 얼마나 상단에 노출되느냐에 달려 있음.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. 네이버 스마트플레이스 SEO 및 키워드 타겟팅</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      초행길 고객의 90%는 네이버 검색으로 유입됨. 스마트플레이스 등록 시 매장명 뒤에 '지역명 + 로스터리 카페' 또는 '지역명 + 스페셜티' 같은 직관적인 타겟 키워드를 전략적으로 배치해야 함. 또한 텍스트로만 메뉴를 적어두면 클릭률이 현저히 떨어지므로, 시그니처 메뉴 3개 이상은 반드시 스튜디오급 고해상도 이미지를 촬영하여 등록해 시각적인 신뢰도를 줘야 함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. 어뷰징 없는 초기 영수증 리뷰 빌드업</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      마케팅 대행사에 돈을 주고 가짜 영수증 리뷰를 찍어내는 행위는 네이버 알고리즘에 의해 매장 검색 노출이 영구 누락되는 자살 행위임. 정식 오픈 전 지인이나 동네 커뮤니티 기반의 소규모 체험단을 초대하여 실제 결제 트래픽을 일으키고, 텍스트가 아닌 '사진이 3장 이상 포함된 양질의 영수증 리뷰' 30개를 초기 데이터로 탄탄하게 쌓아 플레이스 순위를 안전하게 끌어올리는 것이 정석임.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. 텍스트 배제 및 시각 중심의 인스타그램 포트폴리오</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      인스타그램 피드에 원두의 산지와 철학을 설명하는 구구절절한 텍스트는 아무도 읽지 않음. 커피 맛이 좋다는 천 마디 말보다, 에스프레소가 쫀득하게 떨어지는 하이엔드 머신의 릴스 영상이나 매장의 묵직한 조도가 담긴 공간 사진 1장이 훨씬 강력함. 피드는 매장의 톤앤매너를 보여주는 룩북(Look-book)으로만 활용하고, 지저분해 보일 수 있는 휴무일이나 공지사항은 스토리 하이라이트로 따로 빼서 브랜드의 시각적 일관성을 유지해야 함.
    </div>
  </details>
</div>`
      },
      {
        sectionId: "7.3",
        sectionTitle: "7.3 스트레스 테스트 및 그랜드 오픈 전략",
        content: `<p class="text-stone-700 mb-8 leading-relaxed">오픈 첫날 손님이 몰려 음료가 20분씩 지연되면 그 매장의 이미지는 회복 불가능함. 완벽한 대비태세를 갖추기 위한 실무 매뉴얼임.</p>

<div class="border-t border-stone-200 mt-6">
  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">1. 축하 파티가 아닌 극한의 가오픈 스트레스 테스트</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      가오픈(Soft Opening)은 지인들을 불러 칭찬을 듣는 자리가 아님. 동시에 10팀이 몰려들었을 때 POS 영수증이 꼬이지 않는지, 연속 추출 시 머신의 보일러 스팀 압력이 버티는지, 피크 타임에 제빙기 얼음이 동나지 않는지 점검하는 '버그 리포트' 기간임. 고의로 오퍼레이션의 한계치를 유발하여 바리스타 간의 동선 충돌과 레시피의 병목 현상을 찾아내고, 정식 오픈 전까지 바 세팅을 전면 수정하는 데 목적을 둬야 함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">2. 체리피커를 걸러내는 브랜드 가치 보존 프로모션</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      그랜드 오픈 시 '전 메뉴 50% 할인'이나 '아메리카노 1000원' 같은 단가 인하 행사는 절대 금물임. 이는 행사 기간이 끝나면 즉시 발길을 끊는 체리피커(Cherry Picker)들만 매장에 바글거리게 만듦. 음료의 제값을 온전히 받되, 결제 고객에게 매장의 시그니처 블렌드 드립백을 무료로 제공하거나 로고가 각인된 고품질 리유저블 컵을 증정하여, 가격 훼손 없이 우리 브랜드의 퀄리티를 집까지 가져가게 만드는 전략이 압도적으로 유리함.
    </div>
  </details>

  <details class="group border-b border-stone-200 overflow-hidden">
    <summary class="list-none cursor-pointer py-5 flex justify-between items-center transition-colors [&::-webkit-details-marker]:hidden hover:opacity-70">
      <span class="font-bold text-stone-900 text-lg tracking-tight">3. 초기 단골 록인(Lock-in)을 위한 리텐션 바우처</span>
      <svg class="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </summary>
    <div class="pb-6 pt-2 text-stone-600 leading-relaxed">
      오픈발로 밀려든 첫 방문 고객이 2주일 내에 다시 매장을 찾도록 강제하는 장치가 필요함. 구두로만 "또 오세요"라고 인사하는 것은 의미가 없음. 첫 결제 고객에게 음료와 함께 '2주일 내 재방문 시 시그니처 구움과자 무료 증정' 등 확실하고 매력적인 베네핏이 적힌 실물 바우처 쿠폰을 건네주어, 단발성 호기심 방문을 정기적인 소비 습관으로 전환시키는 리텐션(Retention) 시스템을 가동해야 함.
    </div>
  </details>
</div>`
      }
    ]
  }
];