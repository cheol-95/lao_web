'use client'

import { useEffect, useRef } from 'react'

export default function InfiniteScrollCards() {
  const cards = [
    "해외 저개발국가의 효율적 지원을 위한 연구, 조사",
    "해외 저개발국가의 글로벌 역량강화를 위한 교육사업 및 교육환경개선 지원사업",
    "해외 저개발국가 공동체, 문화체험 및 스포츠 교류 지원",
    "해외 저개발국가 생활지원 사업",
    "유관단체와의 협력사업",
    "아시안게임 야구 우승",
    "라오브라더스 오순절 성령운동을 전세계에 펼치다.",
    "야구를 통해 세상으로 나아가는 라오브라더스.",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    scrollIntervalRef.current = setInterval(() => {
      container.scrollLeft += 1; // 매번 1px씩 이동

      if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
        container.scrollLeft = container.scrollWidth / 3; // 원본 카드로 이동
      }
    }, 30); // 30ms 간격으로 이동
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollLeft = container.scrollWidth / 3; // 초기 위치 설정
    }

    startAutoScroll(); // 자동 스크롤 시작

    return () => {
      stopAutoScroll(); // 컴포넌트 언마운트 시 자동 스크롤 중지
    };
  }, []);

  return (
    <div
      className="relative overflow-x-scroll pb-4 scrollbar-hidden"
      ref={containerRef}
      style={{
        WebkitOverflowScrolling: "touch", // 모바일 부드러운 스크롤 지원
      }}
    >
      <div className="flex space-x-4 min-w-max">
        {/* 왼쪽 복제 카드 */}
        {cards.map((item, index) => (
          <CardContainer
            key={`left-${index}`}
            index={index}
            item={item}
            stopAutoScroll={stopAutoScroll}
            startAutoScroll={startAutoScroll}
          />
        ))}

        {/* 원본 카드 */}
        {cards.map((item, index) => (
          <CardContainer
            key={`original-${index}`}
            index={index}
            item={item}
            stopAutoScroll={stopAutoScroll}
            startAutoScroll={startAutoScroll}
          />
        ))}

        {/* 오른쪽 복제 카드 */}
        {cards.map((item, index) => (
          <CardContainer
            key={`right-${index}`}
            index={index}
            item={item}
            stopAutoScroll={stopAutoScroll}
            startAutoScroll={startAutoScroll}
          />
        ))}
      </div>
    </div>
  );
}

function CardContainer({
  index,
  item,
  stopAutoScroll,
  startAutoScroll,
}: {
  index: number;
  item: string;
  stopAutoScroll: () => void;
  startAutoScroll: () => void;
}) {
  return (
    <div
      className="relative flex-shrink-0 w-80 h-60 bg-transparent" // 새로운 영역 (카드와 동일한 가로 너비, 더 긴 세로)
    >
      <div
        className={`absolute w-full p-4 md:p-6 rounded-lg shadow-sm bg-[#00AC8F] text-white hover:bg-[#2bbaa2] transition-colors duration-200 ${
          index % 2 === 0 ? "top-0" : "bottom-0"
        }`}
        style={{
          width: "100%", // 카드가 부모 영역의 가로 너비를 채움
        }}
        onMouseEnter={stopAutoScroll} // 마우스가 올라가면 자동 스크롤 멈춤
        onMouseLeave={startAutoScroll} // 마우스가 떠나면 자동 스크롤 재개
      >
        <h4 className="text-lg md:text-xl font-semibold mb-2">
          {index + 1}. {item}
        </h4>
        <p className="text-sm text-white">
          각 사업에 대한 상세 내용, 시행 방법, 예산 등이 계획되어 있습니다. 해당 섹션의 제목과 내용은 추후 변경될 예정입니다.
        </p>
      </div>
    </div>
  );
}
